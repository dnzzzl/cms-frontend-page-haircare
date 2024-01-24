import { Product } from "../components/product-card"

const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}

export function getProductsMockData() {
  const products:Product[] = [
    {
      "id": 1,
      "images": ["http://localhost:8889/wp-content/uploads/2024/01/858dbcbd-1bde-4c5a-bfec-3cad829cccd3.jpg"],
      "name": "Clean Me Up",
      "short_description": "Limpia a profundidad sin maltratar tu cabello. Con un aroma delicioso que disfrutarás. Hecho a base de hierbas estimulantes del crecimiento.",
      "long_description": "Experimenta una limpieza profunda que mime tu cabello con nuestro champú Clean Me Up.\nEstá elaborado con una fragancia irresistiblemente encantadora que convertirá tu rutina de cuidado del cabello en una experiencia sensorial.\nEsta fórmula única, hecha con hierbas estimulantes, tiene como objetivo promover el crecimiento del cabello mientras lo mantiene increíblemente limpio.\n\nInstrucciones de uso:\n1. Moja completamente tu cabello.\n2. Vierte una cantidad adecuada de champú en tus manos.\n3. Aplica el champú en el cuero cabelludo, masajeándolo suavemente.\n4. Deja que la espuma cremosa se deslice por tus mechones.\n5. Enjuaga y repite si es necesario.\n6. Enjuaga completamente con abundante agua.\n\nEvita frotar el champú bruscamente en tus mechones, ya que podría provocar sequedad innecesaria.\nCon Clean Me Up, asegúrate de una limpieza delicada que ama tu cabello tanto como tú lo haces.",
      "price": "$595"
    },
    {
      "id": 2,
      "images": ["http://localhost:8889/wp-content/uploads/2024/01/770a0e8f-b783-4418-b00a-f507202d55c8.jpg"],
      "name": "Less Tangle",
      "short_description": " Descubre un cabello suave y manejable con nuestro acondicionador Less Tangle. Elaborado con ingredientes enriquecedores, este acondicionador ofrece una hidratación esencial, lo que da como resultado un cabello fácil de peinar y protegido contra el calor.",
      "long_description":"El acondicionador Less Tangle juega un papel esencial en tu rutina de cuidado del cabello al sellar los efectos beneficiosos de tu mascarilla o tratamiento capilar. Con solo un poco de producto puedes desenredar las hebras más rebeldes. Cuida tu cabello con nuestra fórmula ligera pero profundamente nutritiva adecuada para todo tipo de cabello.\n\nInstrucciones de uso:\n1. Después de lavarse el cabello con champú o aplicarse una mascarilla para el cabello, aplique el acondicionador Less Tangle.\n2. Desenreda tu cabello comenzando desde abajo usando un peine de dientes anchos.\n3. Enjuague generosamente con agua.\n\nCon el acondicionador Less Tangle, disfruta de un cuidado nutritivo que respeta la belleza natural de tu cabello.",
      "price": "$7.99"
    },
  ]
  return { edges:products }
  }