import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getProductsMockData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { sub } from 'date-fns'
import TabView from '../components/Tabview'
import { ShopGrid } from '../components/shop-section-grid'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  const title = "Elizabeth Haircare"
  const subtitle = "Productos para mostrar la mejor versión de tu cabello."
  const allProducts = getProductsMockData();
  const heroImgUrl = 'http://localhost:8889/wp-content/uploads/2024/01/hero-02.png'

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Intro image={heroImgUrl} title={title} subtitle={subtitle}/>
      <TabView labels={["shop","blog"]}>
        <div>
          <ShopGrid allProducts={allProducts} preview={preview} />
        </div>
        <div 
        className=''
        >
          blog section
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </TabView>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
