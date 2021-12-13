import { NextPage } from "next";
import Layout from "../components/Layout";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import styles from "../styles/Blog.module.css";

const Blog: NextPage = () => {
  return (
    <Layout title="Blog">
      <div className={styles.blog}>
        <h1 className={styles.title}>Posts</h1>
        <section className={styles.section}>
          <BsArrowLeftShort className={styles.arrow} />
          <div className={styles.container}>
            <img
              src={"/post-icon.svg"}
              width={200}
              height={260}
              className={styles.image}
            />
            <span className={styles.titlePost}>Title</span>
            <p className={styles.text}>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>{" "}
          <div className={styles.container}>
            <img
              src={"/post-icon.svg"}
              width={200}
              height={260}
              className={styles.image}
            />
            <span className={styles.titlePost}>Title</span>
            <p className={styles.text}>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>{" "}
          <div className={styles.container}>
            <img
              src={"/post-icon.svg"}
              width={200}
              height={260}
              className={styles.image}
            />
            <span className={styles.titlePost}>Title</span>
            <p className={styles.text}>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <BsArrowRightShort className={styles.arrow} />
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
