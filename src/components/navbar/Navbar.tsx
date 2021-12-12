import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  type pageOptions = Array<{
    route: string;
    name: string;
  }>;
  const pageOptions: pageOptions = [
    { route: "/", name: "home" },
    { route: "/projects", name: "projects" },
    { route: "/blog", name: "blog" },
    { route: "/curriculum", name: "curriculum" },
  ];

  return (
    <div className={styles.container}>
      <a href="/">
        <Image
          src="/samurai.svg"
          alt="page logo"
          id="nav-logo"
          width={70}
          height={70}
        />
      </a>
      <div className={styles.pageOptions}>
        {pageOptions.map((route, index) => (
          <Link key={index} href={route.route}>
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
