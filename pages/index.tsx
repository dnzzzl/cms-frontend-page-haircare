//template components
import Head from 'next/head'
import { GetStaticProps } from 'next'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getSimpleProductsFromGraphQL, getAllTestimonials} from '../lib/api'
import {HERO_IMG_URL} from '../lib/constants'
import Link from 'next/link'
import {ArrowUpRight, Link as LinkIcon} from 'lucide-react'
//custom components:
import HeroPost from '../components/hero-post'
import TabView from '../components/Tabview'
import ShopGrid from '../components/shop-section-grid'
import EmailInput from '../components/email-input'
import TestimonialsGallery from '../components/testimonials-gallery'

export default function Index({ allPosts: { edges }, allProducts, allTestimonials, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  const title = "Elizabeth Haircare"
  const subtitle = "Productos para mostrar la mejor versión de tu cabello."
  
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Elizabeth Haircare`}</title>
      </Head>
      <Intro image_data={{imageUrl:HERO_IMG_URL,alt:"Hero_image"}}>
        <div 
        className="flex-col flex items-center justify-between bg-cover px-8 py-14 mt-14 lg:mt-20 mx-0 sm:w-3/4 md:w-1/2 relative transition-all ease-in-out duration-500">
          <h1 className="text-left text-6xl lg:text-8xl tracking-tighter leading-tight">                                      
            {title}                                                         
          </h1>
          <h2 className="text-center text-xl md:text-2xl  my-5 ">                                                            
            {subtitle}                                                       
          </h2>
          <div className=" rounded-lg ">
            <Link href={"https://wa.me/18094618336?text=Hola%20%3A%29%20me%20interesa%20la%20linea%20Elizabeth%20Haircare"} className="my-4 px-5 py-4 text-base text-center text-white transition duration-500 ease-in-out transform bg-green-600 lg:px-10 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-bold">Ordena en Whatsapp</Link>
          </div>    
        </div>
      </Intro>
      <TabView labels={["shop","blog"]}>
        <div>
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Destacados
           
          </h2>
          <Link href='/shop' className='text-4xl font-semibold tracking-tighter leading-tight hover:underline flex items-center w-min whitespace-nowrap'>
            <LinkIcon/>
            <p className='mx-2'>ver todos</p>
            <ArrowUpRight/>
          </Link>
          
          <ShopGrid allProducts={allProducts?.edges} />
        </div>
        <div 
        className=''
        >
          {heroPost && (<>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Blogpost Reciente
            </h2>
            <Link href='/posts' className='mb-8 text-4xl font-semibold tracking-tighter leading-tight hover:underline flex items-center w-min whitespace-nowrap'>
              <LinkIcon/>
                <p className='mx-2 '>ver todos</p>
              <ArrowUpRight/>
            </Link>
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node.sourceUrl}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
            </>
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </TabView>
      <section className={`relative h-[${allTestimonials.length*100}vh] text-center w-full p-4`}>
        
        <TestimonialsGallery listoftestimonials={allTestimonials}/>
      </section>
      <EmailInput />
      
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  const allProducts = await getSimpleProductsFromGraphQL(true);
  const allTestimonials = await getAllTestimonials();

  return {
    props: { allPosts, allProducts, allTestimonials, preview },
    revalidate: 10,
  }
}
