import { NextPage } from 'next';
import Head from 'next/head'
import Nav from '../components/nav';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diogo Reis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
      </Head>
      <Nav />
      <div className="absolute max-w-lg max-h-lg inset-y-0 my-auto md:my-48 lg:my-56 xl:my-64 right-0 mr-32">
        <h1 className="font-header h-2 md:text-2xl lg:text-4xl xl:text-6xl text-white-color font-black text-right tracking-tight">Hi, Dear. I'm a <strong className="text-pink-color">fullstack programmer</strong>. Come see my projects<strong className="text-pink-color"> :).</strong></h1>
      </div>
      <footer className="absolute inset-x-0 bottom-0 p-2 bg-transparent">
        <p className='font-sans text-pink-color font-500 text-center bg-transparent'>website made with, nextjs, tailwindcss and lots of love</p>
      </footer>
    </div>
  );
};

export default IndexPage;
