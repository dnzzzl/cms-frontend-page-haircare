import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import Container from './container';
import { useState } from 'react';

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
    <section>
        <div 
        onClick={()=>alert('hello')} 
        className="hover:transition-all duration-700 ease-in-out  rounded-lg p-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28"
        style={{
          cursor: hovered?'pointer':'no', 
          transform: hovered ? 'scale(0.98)' : ''
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link
                href={`/posts/${slug}`}
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              ></Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <Date dateString={date} />
            </div>
          </div>
          <div>
            <div
              className="text-lg leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <Avatar author={author} />
          </div>
        </div>
    </section>
  )
}
