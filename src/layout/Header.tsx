import { Link } from "react-router-dom";

import Basket from "./Basket";
import diamondImg from "@/assets/layout-image/diamond.png";
import { SearchInput } from "@/components";

const styles = {
  header: `
    container
    flex flex-col md:flex-row md:justify-between md:items-center gap-10
    pt-[40px] md:pt-[100px]

  `,
  homeLinkBox: `
    w-fit flex gap-4 items-center
  `,
  link: `
    text-teal-700 text-4xl not-italic font-medium
  `,
  img: `
    w-[22px] h-[22px] mt-3
  `,
  searchBox: `
    flex items-center gap-10
    w-full md:w-[352px]
  `,
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.homeLinkBox}>
        <Link to="/" className={styles.link}>
          Lotus
        </Link>
        <img
          src={diamondImg}
          alt="Lotus logo"
          className={styles.img}
          width={22}
          height={16}
        />
      </div>
      <div className={styles.searchBox}>
        <SearchInput />
        <Basket />
      </div>
    </header>
  );
}
