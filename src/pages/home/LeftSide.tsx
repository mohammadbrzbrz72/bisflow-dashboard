import { SubtractButton, ProductCard } from "@/components";
import ProductImg from "@/assets/home-images/JAR.png";

const styles = {
  main: `
    w-full lg:w-[calc(100%_-_400px)]
  `,
  header: `
    text-white text-6xl not-italic font-bold leading-[56px] tracking-[-1.6px]
    mr-10 md:mr-[200px]
  `,
  cardBox: `
    flex flex-col md:flex-row items-center md:items-start md:flex gap-[80px]
    my-20 mt-24
  `,
};

export default function LeftSide() {
  return (
    <section className={styles.main}>
      <div className="flex items-center">
        <h3 className={styles.header}>Best Sellers</h3>
        <SubtractButton />
      </div>
      <div className={styles.cardBox}>
        <ProductCard
          title="Lotus Jar"
          subTitle="Green Fruit Jelly"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
          price={4.0}
          currency="$"
          src={ProductImg}
          alt="product image"
          onClick={() => {}}
        />
        <ProductCard
          title="Lotus Jar"
          subTitle="Green Fruit Jelly"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
          price={4.0}
          currency="$"
          src={ProductImg}
          alt="product image"
          onClick={() => {}}
        />
      </div>
    </section>
  );
}
