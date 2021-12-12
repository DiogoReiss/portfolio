import { NextPage } from "next";
import Layout from "../components/Layout";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

const Blog: NextPage = () => {
  return (
    <Layout title="Blog">
      <h1>Posts</h1>
      <section>
        <BsArrowLeftShort />
        <div>
          <Image src={"/post-icon.svg"} width={200} height={260} />
          <span>Title</span>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div></div>
        <div></div>
        <BsArrowRightShort />
      </section>
    </Layout>
  );
};

export default Blog;
