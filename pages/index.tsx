import { NextPage } from 'next';
import Layout from '../components/layout';

const IndexPage: NextPage = () => {
  return (
    <div className="w-full">
      <Layout title="Diogo Reis" actualPage="HOME">
        <div className="flex flex-row w-screen justify-center">
          <div className="grid justify-items-center flex-1">
            <div className="flex flex-col justify-center md:text-left items-center text-center">
              <h1 className="flex font-extrabold font-header text-background-color text-4xl xl:text-6xl md:self-center lg:self-start">
                Hi, Dear.
              </h1>
              <p className="font-header text-background-color  text-lg xl:text-2xl w-9/12 md:self-center lg:self-start">
                <strong className="text-pink-color font-normal">
                  I'm a fullstack programmer.
                </strong>{' '}
                Come to see my projects{' '}
                <strong className="text-pink-color font-normal">:).</strong>
              </p>
              <a href="/repositories" className="grid w-9/12">
                <button
                  className="grid justify-self-center md:justify-self-end md:animate-bounce bg-pink-color p-3 mt-2 rounded-lg font-header text-background-color font-semibold"
                  type="button"
                >
                  <h1>MY PROJECTS</h1>
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 justify-center w-full mr-0 hidden md:flex lg:flex">
            <img
              src="images/page1.png"
              className="flex self-center justify-self-end mr-0 invisible md:visible xl:visible"
              alt="cyborg image by Icons8"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
