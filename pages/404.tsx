import { NextPage } from 'next';
import Layout from '../components/layout';

export default function DoNotFind() {
  return (
    <Layout title="404" actualPage="">
      <div className="flex w-screen h-full justify-center">
        <img
          src="images/4040.png"
          alt="error 404"
          className="absolute opacity-25 self-center"
        />
        <div className="flex flex-col relative content-center justify-center items-center">
          <h1 className="font-extrabold text-404 italic text-pink-color font-mono">
            404
          </h1>
          <h2 className="flex font-normal text-xl sm:text-2xl md:text-3xl text-nav">
            sorry but i can't find this page in my mess :(
          </h2>
        </div>
      </div>
    </Layout>
  );
}
