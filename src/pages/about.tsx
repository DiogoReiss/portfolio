import { NextPage } from 'next';
import Layout from '../components/layout';
import ImageCard from '../components/imageCard';

const AboutPage: NextPage = () => {
  return (
    <Layout title="About Me " actualPage="ABOUT ME">
      <div className="flex flex-row w-screen h-full justify-center">
        <div
          className="flex-1 justify-center w-full mr-0 hidden md:flex
        "
        >
          <img
            src="images/page2.png"
            className="flex self-center h-full justify-self-end mr-0 md:visible"
            alt="cyborg image by Icons8"
          />
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="flex flex-col w-10/12 md:w-8/12">
            <div className="flex flex-row border-2 rounded border-pink-color flex-grow text-center items-center flex-1">
              <h1 className="font-header text-background-color font-semibold text-xs md:text-sm lg:text-base">
                So, I'm this little person right here xD.
                <strong className="text-pink-color font-semibold">
                  I can work with anything that brings money
                </strong>{' '}
                but often i work with{' '}
                <strong className="text-pink-color font-semibold">
                  typescript
                </strong>
                ,
                <strong className="text-pink-color font-semibold">
                  node.js
                </strong>
                ,{' '}
                <strong className="text-pink-color font-semibold">
                  express
                </strong>
                ,{' '}
                <strong className="text-pink-color font-semibold">react</strong>{' '}
                and{' '}
                <strong className="text-pink-color font-semibold">
                  next.js
                </strong>{' '}
                :3.
              </h1>
              <div className="flex w-12/12 md:w-7/12 justify-end">
                <img
                  src="images/profile.jpg"
                  alt="a beautiful image of me"
                  className="rounded "
                />
              </div>
            </div>
            <div className="flex flex-none flex-row mt-4 gap-6 h-20">
              <ImageCard
                src="images/next.svg"
                alt="nextjs framework"
                cardStyle="w-8/12 flex rounded border-2 border-pink-color justify-center"
              />
              <ImageCard
                src="images/typescript.png"
                alt="typescript language"
                cardStyle="w-3/12 flex rounded border-2 border-pink-color justify-center"
              />
              <ImageCard
                src="images/express.png"
                alt="express framework"
                cardStyle="w-9/12 flex rounded border-2 border-pink-color justify-center"
              />
            </div>
            <div className="flex flex-none flex-row mt-4 gap-4 h-20">
              <ImageCard
                src="images/node.png"
                alt="node.js"
                cardStyle="w-6/12 flex rounded border-2 border-pink-color justify-center"
              />
              <ImageCard
                src="images/sql-server.png"
                alt="sql"
                cardStyle="w-11/12 flex rounded border-2 border-pink-color justify-center"
              />
              <ImageCard
                src="images/react.png"
                alt="react library"
                cardStyle="w-11/12 flex rounded border-2 border-pink-color justify-center"
              />
              <ImageCard
                src="images/mongodb.png"
                alt="mongo database"
                cardStyle="w-8/12 flex rounded border-2 border-pink-color justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
