import { FruitCard } from "@/components";
import DB from "@/database";

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
        {DB.get("fruit").map((data: any) => {
          return <FruitCard {...data} key={data.id} />;
        })}
      </div>
    </section>
  );
}
