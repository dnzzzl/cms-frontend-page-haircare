import Container from './container'
import { EXAMPLE_PATH, LOGO_SEETHRU_IMG_URL } from '../lib/constants'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-20 md:grid md:grid-cols-3 ">
          <Image
          src={LOGO_SEETHRU_IMG_URL}
          alt="logo"
          width={300}
          height={300}
          />
          <div className='flex justify-center m-2'>
            <h2 className='font-bold'>Paginas</h2>
            <ul className="px-2">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/posts"}>Blog</Link>
              </li>
              <li>
              <Link href={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link href={"/nosotros"}>Nosotros</Link>
              </li>
            </ul>
          </div>
          <div className='flex justify-center'>
            <h2 className='font-bold'>Redes</h2>
            <ul className="px-2">
              <li>
                <Link href={"https://instagram.com/elizabethhaircare"}>Instagram</Link>
              </li>
              <li>
                <Link href={"https://wa.me/18094618336"}>Whatsapp</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
