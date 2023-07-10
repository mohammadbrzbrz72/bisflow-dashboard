import { SubtractButton, ProductCard } from "@/components";
import DB from "@/database";

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
        {DB.get("product").map((data: any) => {
          return (
            <ProductCard
              {...data}
              key={data.id}
              onClick={() => {
                console.log(data.id);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
