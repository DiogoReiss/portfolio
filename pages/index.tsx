import { NextPage } from 'next';
import Head from 'next/head'
import Nav from '../components/nav';
import Modal from '../components/repositories'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diogo Reis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
      </Head>
      <Modal />
      <Nav />
      <div className="absolute px-20 py-10 w-1/3 inset-y-10 right-0 m-20 h-10">
        <h1 className="font-header text-6xl text-white-color font-black text-right tracking-tight">Hi, Dear. I'm a <strong className="text-pink-color">fullstack programmer</strong>. Come see my projects<strong className="text-pink-color"> :).</strong></h1>
      </div>
      <footer className="absolute inset-x-0 bottom-0 p-2 bg-transparent">
        <p className='font-sans text-pink-color font-500 text-center bg-transparent'>website made with, nextjs, tailwindcss and lots of love</p>
      </footer>
    </div>
  );
};

export default IndexPage;
