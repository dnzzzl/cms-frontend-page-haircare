import Link from 'next/link'

export default function Header() {
  return (
    <div className="container flex items-center justify-center p-4">
      <div className="hidden lg:flex lg:ml-6 lg:space-x-4">
          <Link href="#" className="inline-block py-2 px-4 rounded-lg shadow-sm hover:bg-blue-700 hover:text-white">
            Blog
          </Link>
          <Link href="#" className="inline-block py-2 px-4 rounded-lg shadow-sm hover:bg-blue-700 hover:text-white">
            Escribe un DM
          </Link>
          <Link href="#" className="inline-block py-2 px-4 rounded-lg shadow-sm hover:bg-blue-700 hover:text-white">
            FAQs
          </Link>
        </div>
        <div className="flex-shrink-0 w-full lg:w-auto mx-5">
          <Link href="/" className="font-bold hover:underline">
            Blog
          </Link>
        </div>
      </div>
  )
}
