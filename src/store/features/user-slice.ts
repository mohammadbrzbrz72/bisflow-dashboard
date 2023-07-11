import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IBasketProduct, IFruitProduct } from "@/database/db";
import storage from "@/utils/storage";
import DB from "@/database";

type IData = (IFruitProduct | IFruitProduct)[] | [];
interface IInitialState {
  data: IData;
}

const initialState: IInitialState = {
  data: [],
};

export const userSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    get(state) {
      const dataProduct = storage.get("fruit");
      const dataFruit = storage.get("product");
      const data = [
        ...DB.find({
          ids: dataProduct,
          category: "fruit",
        }),
        ...DB.find({
          ids: dataFruit,
          category: "product",
        }),
      ];

      state.data = data as IData;
    },
  },
});

export default userSlice;
