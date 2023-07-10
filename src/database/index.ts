import DATABASE from "./db";

type ICategory = "product" | "fruit";
interface IFindCategory {
  category: ICategory;
  ids: string[];
}

export default {
  get(category: "product" | "fruit") {
    return DATABASE[category];
  },
  find({ ids, category }: IFindCategory) {
    const dbData = DATABASE[category];

    const result = ids
      .map((id) => dbData.find((data) => data.id === id))
      .filter(Boolean);

    return result;
  },
};
