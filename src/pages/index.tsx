import type { NextPage } from "next";
import Head from "../components/Head";
import Link from "next/Link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head title="Home Page"></Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey, we are building a{" "}
          <Link href="https://github.com/DiogoReiss/portfolio">
            new portfolio
          </Link>{" "}
          here :)
        </h1>
        <span>This won&lsquo;t take long, I hope.</span>
        <footer className={styles.footer}>
          <Link href="https://github.com/DiogoReiss">
            *WE* It&lsquo;s actually me and my different musical tastes
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default Home;
