import type { NextPage } from "next";
import Head from "../components/Head";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Diogo Reis">
      <div className={styles.container}>
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
    </Layout>
  );
};

export default Home;
