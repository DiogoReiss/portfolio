import Link from 'next/link';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT ME' },
  { href: '/repositories', label: 'GITHUB' },
];

export default function Nav({ actualPage }) {
  return (
    <nav className="flex flex-row h-24 z-50 w-screen absolute justify-start">
      <ul className="flex items-center font-header m-auto md:ml-10 md:text-xl md:font-extrabold">
        <ul className="grid grid-cols-3 space-x-4 text-center">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`no-underline ${
                    actualPage == label
                      ? 'text-pink-color'
                      : 'text-background-color'
                  } text-md font-bold hover:${
                    actualPage == label ? 'underline' : 'text-pink-color'
                  }`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
