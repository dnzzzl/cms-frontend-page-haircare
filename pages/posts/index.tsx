import {FC} from "react";
import Layout from "../../components/layout";
import preview from "../api/preview";
import Intro from "../../components/intro";

interface Props {
    preview: boolean,

}


const Blog: FC<Props> = ({preview}:Props) => {
  const title="Blog"
  const subtitle=""
  return <Layout preview={preview}>
    <Intro>
    <div 
      className="flex-col flex items-center justify-end bg-cover px-8 py-14 mt-14 mx-0 sm:w-3/4 md:w-1/2 z-20 relative transition-all ease-in-out duration-500">
        <h1 className="text-left text-6xl tracking-tighter leading-tight">                                      
          {title}                                                         
        </h1>
        <h4 className="text-center text-xl md:text-2xl ">                                                            
          {subtitle}                                                       
        </h4>
      </div>
    </Intro>
  </Layout>
};

export default Blog;
