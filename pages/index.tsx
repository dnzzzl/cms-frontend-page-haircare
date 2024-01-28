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
      <Intro image_data={{imageUrl:heroImgUrl,alt:"Hero_image"}}>
        <div 
        className="flex-col flex items-center justify-between bg-cover px-8 py-14 mt-14 lg:mt-20 mx-0 sm:w-3/4 md:w-1/2 relative transition-all ease-in-out duration-500">
          <h1 className="text-left text-6xl lg:text-8xl tracking-tighter leading-tight">                                      
            {title}                                                         
          </h1>
          <h4 className="text-center text-xl md:text-2xl  my-5 ">                                                            
            {subtitle}                                                       
          </h4>
          <div className=" rounded-lg ">
            <button className="my-4 px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button>
          </div>    
        </div>
      </Intro>
      <TabView labels={["shop","blog"]}>
        <div>
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Shop
          </h2>
          <ShopGrid allProducts={allProducts} preview={preview} />
        </div>
        <div 
        className=''
        >
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Featured
          </h2>
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
