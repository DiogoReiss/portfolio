import Head from 'next/head';
import Nav from './nav';

export default function Layout({ children, title, actualPage }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/ico" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,800;1,800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Welcome to my website, here I'll talk about me"
        />
        <meta name="author" content="Diogo Reis" />
      </Head>
      <div className="absolute bg-gray-color w-full h-full">
        <div className="absolute transition-all duration-150 ease-in-out h-full hidden md:flex w-3 bg-background-color" />
        <Nav actualPage={`${actualPage}`} />
        {children}
        <footer className="absolute inset-x-0 bottom-0 justify-center">
          <p className="font-sans text-pink-color font-500 text-center">
            website made with, nextjs, tailwindcss and lots of love
          </p>
        </footer>
      </div>
    </>
  );
}
