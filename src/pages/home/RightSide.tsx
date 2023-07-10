import { FruitCard } from "@/components";
import appleImg from "@/assets/home-images/apples.png";
import tripleFruitImg from "@/assets/home-images/triple-fruit.png";
import grapeImg from "@/assets/home-images/grape.png";

const styles = {
  main: `
    w-full lg:w-[calc(100%_-_400px)]
    flex flex-col items-center lg:items-end 
    pt-[30px]
  `,
  header: `
    text-green-dark-2 text-[35px] not-italic font-medium tracking-[-0.6px];
    w-full md:w-[352px]
  `,
  cardBox: `
    flex flex-col lg:items-end gap-14 
    mt-6
  `,
};

export default function RightSide() {
  return (
    <section className={styles.main}>
      <h3 className={styles.header}>More Items</h3>
      <div className={styles.cardBox}>
        <FruitCard
          title="Apple Fruit"
          subTitle="Original Taste"
          price="10.00"
          currency="$"
          src={appleImg}
          alt="apple image"
          onClick={() => {}}
        />
        <FruitCard
          title="Triple Fruit"
          subTitle="Original Taste"
          price="10.00"
          currency="$"
          src={tripleFruitImg}
          alt="triple fruit image"
          onClick={() => {}}
        />
        <FruitCard
          title="Grape Fruit"
          subTitle="Original Taste"
          price="10.00"
          currency="$"
          src={grapeImg}
          alt="grape image"
          onClick={() => {}}
        />
      </div>
    </section>
  );
}
