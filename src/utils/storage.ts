export const BASKET_PRODUCT = "product";
export const BASKET_FRUIT = "fruit";

type keyType = typeof BASKET_PRODUCT | typeof BASKET_FRUIT;

export default {
  get(key: keyType) {
    return JSON.parse(localStorage.getItem(key) ?? "[]");
  },
  set(key: keyType, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  push(key: keyType, id: string) {
    const data = this.get(key) as string[];
    data.push(id);
    this.set(key, data);
  },
  remove(key: keyType, id: string) {
    const data = this.get(key) as string[];

    const index = data.indexOf(id);
    if (index > -1) {
      data.splice(index, 1);
    }

    this.set(key, data);
  },
};
