import { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/nav'

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sobre mim</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
      </Head>
      <Nav />
      <img
        src="images/profile.jpg"  
        className='absolute rounded-full border-solid border-4 border-pink-color w-1/6 h-1/12 insent-x-0 right-0 m-20 mx-40'
        alt="Myself"
      />
      <div className="absolute px-10 py-40 w-1/2 inset-y-10 right-0 my-48 mx-14 h-10 bg-transparent">
        <h1 className="font-header text-3xl text-white-color font-black text-right tracking-tight w-auto h-0 m-20">So, I'm this little person right here xD. <strong className="text-pink-color">I can work with anything that brings money </strong>
        but often i work with<strong className="text-pink-color"> typescript, node.js, express, react</strong> and
        <strong className="text-pink-color"> next.js</strong> :3.
        </h1>
      </div>
      <footer className="absolute inset-x-0 bottom-0 p-2 bg-transparent">
        <p className='font-sans text-pink-color font-500 text-center bg-transparent'>website made with, nextjs, tailwindcss and lots of love</p>
      </footer>
    </div>
  )
}

export default AboutPage;