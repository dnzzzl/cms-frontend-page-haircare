import Avatar from './avatar'
import Date from './date'
import Link from 'next/link'
import { useState } from 'react';
import Image from "next/image";

type Props = {
  title: string,
  coverImage: string,
  date:string,
  excerpt:string,
  author:any,
  slug:string
}

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}:Props) {
  const [hovered, setHovered] = useState(false);
  const backgroundImage = coverImage ? `url(${coverImage})` : null;

  
  return (
    <Link href={`/posts/${slug}`}>
      <div
      className="bg-rose-400/25 min-h-[200px] relative duration-700 ease-in-out rounded-lg overflow-hidden mb-16 md:mb-20"
      style={{
        cursor: hovered ? 'pointer' : 'no', 
        transform: hovered ? 'scale(0.98)' : '',
        backgroundImage: `${backgroundImage}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
        <div className='bg-gradient-to-tr from-black to-transparent rounded-lg p-4  md:grid md:grid-cols-2 md:gap-x-8'>
          <div className='relative z-10 text-white' >
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link
                href={`/posts/${slug}`}
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              ></Link>
            </h3>
            <div className="mb-2 md:mb-0 text-lg">
              <Date dateString={date} />
            </div>
          </div>
          <div className='text-white'>
            <div 
              className="text-lg leading-relaxed mb-4 relative z-10 "
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <Avatar author={author} />
          </div>
          </div>
      </div>
    </Link>
  );
}
