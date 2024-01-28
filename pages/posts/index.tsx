import {FC} from "react";
import Layout from "../../components/layout";
import preview from "../api/preview";
import Intro from "../../components/intro";
import MoreStories from "../../components/more-stories";
import { GetStaticProps} from "next";
import { getAllPostsForHome } from "../../lib/api";
import HeroPost from "../../components/hero-post";


interface Props {
  allPosts: {
    edges:any
  },
  preview: boolean, 

}

export const getStaticProps:GetStaticProps = async ({preview = false}) =>{
  const allPosts = await getAllPostsForHome(preview)
  return {
    props:{
    allPosts:allPosts,
    preview: preview
    }
  }
}

const Blog: FC<Props> = ({ allPosts: { edges }, preview }:Props) => {
  const title="Blog"
  const subtitle=""
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  return <Layout preview={preview}>
    <Intro>
    <div 
      className="flex-col flex items-center justify-end bg-cover px-8 py-14 mt-14 mx-0 sm:w-3/4 md:w-1/2 z-20 relative transition-all ease-in-out duration-500">
        <h1 className="text-left text-6xl tracking-tighter leading-tight w-full">                                      
          {title}                                                         
        </h1>
        <h4 className="text-center text-xl md:text-2xl ">                                                            
          {subtitle}                                                       
        </h4>
      </div>
    </Intro>
    <section className="py-12 px-4">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Ultimo Post
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
    </section>
  </Layout>
};


export default Blog;
