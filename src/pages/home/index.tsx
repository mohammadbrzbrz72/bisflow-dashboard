import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const styles = {
  main: `
   lg:flex lg:justify-between
  `,
  header: `
    text-white text-6xl not-italic font-bold leading-[56px] tracking-[-1.6px]
    mr-[200px] 
  `,
};

export default function HomePage() {
  return (
    <div className={styles.main}>
      <LeftSide />
      <RightSide />
    </div>
  );
}
