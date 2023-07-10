import { Outlet } from "react-router-dom";

//! I just import these sections to show my layout organizations
import Header from "./Header";
import Footer from "./Footer";

import bgImg from "@/assets/layout-image/shape.svg";

const styles = {
  main: `
    min-h-screen w-full
    overflow-x-hidden
    relative
    pb-20
  `,
  container: `
    container
    mt-[50px]
  `,
  img: `
    w-[100vw] md:w-[60%] h-[100vh]
    absolute left-[-50px] top-[0px]
    object-cover
  `,
};

export default function Layout() {
  return (
    <div className={styles.main}>
      <img src={bgImg} alt="" className={styles.img} style={{ zIndex: -20 }} />
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
