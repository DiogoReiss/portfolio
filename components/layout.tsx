import Head from 'next/head';
import Nav from './nav';

export default function Layout({ children, title, actualPage }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
      <div className="flex bg-gray-color w-full h-screen">
        <div className="absolute h-screen w-3 bg-background-color" />
        <Nav actualPage={`${actualPage}`} />
        {children}
        <footer className="absolute inset-x-0 bottom-0 p-2 bg-transparent">
          <p className="font-sans text-pink-color font-500 text-center bg-transparent">
            website made with, nextjs, tailwindcss and lots of love
          </p>
        </footer>
      </div>
    </>
  );
}
