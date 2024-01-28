import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import Container from './container';
import { useState } from 'react';
import Image from 'next/image';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const [hovered, setHovered] = useState(false);

  
  return (
      <Link href={`/posts/${slug}`}>
        <div
        className="bg-rose-400/25 min-h-[200px] relative duration-700 ease-in-out rounded-lg overflow-hidden px-6 py-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-16 md:mb-20"
        style={{
          cursor: hovered?'pointer':'no', 
          transform: hovered ? 'scale(0.98)' : ''
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
          {coverImage&&<Image
             src={coverImage}
             alt={title}
             layout="fill"
             objectFit="cover"
             className='absolute z-0'
          />}
          <div className='relative z-10 p-2' >
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
          <div>
            <div 
              className="text-lg leading-relaxed mb-4 relative z-10 "
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <Avatar author={author} />
          </div>
        </div>
      </Link>
  )
}
