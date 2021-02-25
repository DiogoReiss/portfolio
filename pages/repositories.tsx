import { NextPage, GetServerSideProps } from 'next';
import Layout from '../components/layout';
import ProjectCard from '../components/projectCard';
import { IRepo, IProjectCard } from '../utils/types';

const Repositories: NextPage<IRepo> = ({ data }: any) => {
  return (
    <Layout title="Projects" actualPage="GITHUB">
      <div className="flex flex-row w-screen h-full justify-center">
        <section className="flex flex-col justify-center items-center flex-1">
          <h1 className="flex font-header text-background-color font-semibold mb-6 md:ml-8 self-center md:self-start text-base md:text-2xl lg:text-3xl">
            Now you can see my{'    '}
            <strong className="text-pink-color ml-2 font-semibold">
              repositories
            </strong>
            .
          </h1>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-y-8 justify-items-center">
            {data.map(
              ({ name, description, language, html_url }: IProjectCard) => (
                <ProjectCard
                  name={name}
                  description={description}
                  language={language}
                  html_url={html_url}
                  styles="w-9/12 flex flex-col items-center font-mono font-semibold row-end-auto text-center text-xs md:text-base"
                />
              )
            )}
          </div>
        </section>
        <section
          className="flex-1 justify-center w-full mr-0 hidden md:flex
        "
        >
          <img
            src="images/page3.png"
            className="flex self-center justify-self-end mr-0 md:visible"
            alt="cyborg image by Icons8"
          />
        </section>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://api.github.com/users/DiogoReiss/repos`);
  const data: IProjectCard = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return { props: { data } };
};

export default Repositories;
