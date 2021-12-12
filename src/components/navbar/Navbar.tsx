import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const pageOptions: string[] = ["home", "projects", "blog", "curriculum"];

  return (
    <div className={styles.container}>
      <Image
        src="/samurai.svg"
        alt="page logo"
        id="nav-logo"
        width={70}
        height={70}
      />
      <div className={styles.pageOptions}>
        {pageOptions.map((route, index) => (
          <Link key={index} href={`#${route}`}>
            {route}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
