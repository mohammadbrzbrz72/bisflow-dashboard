import { AiOutlineClose } from "react-icons/ai";

import { RowText } from "@/components";
import { useBasketDispatcher } from "@/store/dispatchers/basket.dispatcher";
import storage from "@/utils/storage";

export type ICategory = "product" | "fruit";
interface IBasketCard {
  id: string;
  alt: string;
  src: string;
  title: string;
  subTitle: string;
  category: ICategory;
}

export function BasketCard({
  id,
  category,
  title,
  subTitle,
  src,
  alt,
}: IBasketCard) {
  const { dispatchNewData } = useBasketDispatcher();

  return (
    <div className="flex flex-col items-center shadow-[-9px_0px_20px_0px_#E5E5E5] rounded-md py-5">
      <div className="flex-center bg-gray-100 w-[86px] h-[86px] rounded-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-[40px] h-[40px] object-cover object-center"
        />
      </div>

      <RowText
        classes={{
          root: "mt-5",
        }}
        title={title}
        subTitle={subTitle}
      />

      <div className="w-full flex justify-end pr-3 mt-3">
        <div
          className=" min-h-[10px] min-w-[10px] p-1 flex-center rounded-full bg-red-300 cursor-pointer"
          onClick={() => {
            storage.remove(category, id);
            dispatchNewData();
          }}
        >
          <AiOutlineClose
            className="w-[10px] h-[10px]"
            size={10}
            color="white"
          />
        </div>
      </div>
    </div>
  );
}
