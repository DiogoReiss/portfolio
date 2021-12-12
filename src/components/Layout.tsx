import { ReactChild } from "react";
import Navbar from "./navbar/Navbar";
import Head from "./Head";

const Layout = ({
  children,
  title,
}: {
  children: ReactChild | Array<ReactChild>;
  title: string;
}) => {
  return (
    <>
      <Head title={title} />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
