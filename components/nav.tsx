import { NextPage } from 'next'
import Link from 'next/link'

const links = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT ME' },
  { href: '/repositories', label: 'GITHUB' },
]

const Nav: NextPage = () => {
  return (
    <nav className="bg-transparent">
      <div className="absolute h-full w-2 inset-0 bg-pink-color"></div>
      <ul className="flex justify-end p-8 mx-24 bg-transparent">
        <ul className="flex items-end justify-end space-x-4 bg-transparent">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="bg-transparent">
              <Link href={href}>
                <a className="no-underline nav-link hover:text-white-color active:text-color-white bg-transparent">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}

export default Nav
