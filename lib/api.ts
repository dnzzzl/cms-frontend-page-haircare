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
      "imageUrl": "https://via.placeholder.com/300x450",
      "name": "Shampoo",
      "description": "Our all-natural shampoo is infused with nourishing ingredients like coconut oil and shea butter to leave your hair feeling soft and clean.",
      "price": "$8.99"
    },
    {
      "id": 2,
      "imageUrl": "https://via.placeholder.com/300x450",
      "name": "Conditioner",
      "description": "Moisturizing and hydrating, our conditioner helps detangle and protect your hair from heat damage.",
      "price": "$7.99"
    },
    {
      "id": 3,
      "imageUrl": "https://via.placeholder.com/300x450",
      "name": "Leave-In Conditioner",
      "description": "A lightweight leave-in conditioner that adds moisture and shine to your hair without weighing it down.",
      "price": "$6.99"
    },
    {
      "id": 4,
      "imageUrl": "https://via.placeholder.com/300x450",
      "name": "Styling Cream",
      "description": "A rich styling cream that provides hold and definition to your hair, perfect for updos and braids.",
      "price": "$9.99"
    },
    {
      "id": 5,
      "imageUrl": "https://via.placeholder.com/300x450",
      "name": "Hair Mask",
      "description": "A luxurious hair mask that deeply nourishes and conditions your hair, leaving it soft and silky smooth.",
      "price": "$12.99"
    },
    {
      "id": 6,
      "imageUrl": "https://via.placeholder.com/300x450",
      "name": "MEGA10",
      "description": "Es una mezcla de más de 10 aceites infusionados con especias naturales de la India. Dejara tu piel, cuero cabelludo y melena saludables y llenos de vida",
      "price": "$750"
    },
    {
      "id": 7,
      "imageUrl": "https://via.placeholder.com/300x450",
      "name": "Styling Cream",
      "description": "A rich styling cream that provides hold and definition to your hair, perfect for updos and braids.",
      "price": "$9.99"
    },
    {
      "id": 8,
      "imageUrl": "https://via.placeholder.com/300x450",
      "name": "Hair Mask",
      "description": "A luxurious hair mask that deeply nourishes and conditions your hair, leaving it soft and silky smooth.",
      "price": "$12.99"
    },
    {
      "id": 9,
      "imageUrl": "https://via.placeholder.com/300x450",
      "name": "Hair Oil",
      "description": "A nourishing hair oil that leaves your locks healthy, shiny, and full of life.",
      "price": "$14.99"
    }
  ]
  return { edges:products }
  }