import { NextPage } from 'next';
import Layout from '../components/layout';

interface iRepo {
  name?: string;
  description?: string;
  language?: string;
  html_url?: string;
}

const Modal: NextPage<iRepo> = ({ data }: any) => {
  return (
    <Layout title="Projects" actualPage="HOME">
      <div className="absolute w-screen h-full left-0 inset-y-0 bg-pink-color mr-1/2">
        <section className="bg-transparent">
          <h1 className="text-white-color bg-transparent nav-link">
            Now you can visit my{' '}
            <strong className="text-background-color ml-0 mr-0 bg-transparent nav-link">
              repositories
            </strong>
            .
          </h1>
          {data.map(({ name, description, language, html_url }) => (
            <a href={html_url} className="inline-flex bg-transparent">
              <div className="inline-flex px-2 bg-transparent">
                <div className="flex-1 bg-transparent rounded">
                  <li className="bg-transparent text-white-color nav-link">
                    {name}
                  </li>
                  <li className="bg-transparent text-white-color nav-link">
                    {description}
                  </li>
                  <li className="bg-transparent text-white-color nav-link">
                    {language}
                  </li>
                </div>
              </div>
            </a>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/DiogoReiss/repos`);
  const data: iRepo = await res.json();

  return { props: { data } };
}

export default Modal;
