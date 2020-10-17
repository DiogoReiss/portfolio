import { NextPage } from 'next'
import Link from 'next/link'

const links = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT ME' },
]

const Nav: NextPage = () => {
  return (
    <nav>
      <ul className="flex justify-end p-8 mx-24">
        <ul className="flex items-end justify-end space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className="no-underline nav-link hover:text-white-color active:text-color-white">{label}</a>
              </Link>
            </li>
          ))}
          <li>
            <Link href="">
              <a className="no-underline nav-link hover:text-white-color">GITHUB</a>
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  )
}

export default Nav
