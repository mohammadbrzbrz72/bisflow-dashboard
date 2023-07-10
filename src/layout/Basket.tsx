import { useState, useCallback, useEffect } from "react";
import { BsBasket3 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { Drawer, RowText } from "@/components";
import { useBasketDispatcher } from "@/store/dispatchers/basket.dispatcher";
import { basketSelector } from "@/store/selectors/basket.selector";
import storage from "@/utils/storage";

type IToggleDrawer = (data?: boolean) => void;
interface IBasketDrawer {
  isOpen: boolean;
  toggleDrawer: IToggleDrawer;
}

export default function Basket() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = useCallback((data?: boolean) => {
    setIsOpen((prevState) => data ?? !prevState);
  }, []);

  return (
    <>
      <BsBasket3 size={35} onClick={toggleDrawer} className="cursor-pointer" />
      {isOpen && <BasketDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />}
    </>
  );
}
type ICategory = "product" | "fruit";
interface IBasketCard {
  id: string;
  alt: string;
  src: string;
  title: string;
  subTitle: string;
  category: ICategory;
}

function BasketDrawer({ isOpen, toggleDrawer }: IBasketDrawer) {
  const { dispatchNewData } = useBasketDispatcher();

  const basketSelectorData = basketSelector();

  useEffect(() => {
    dispatchNewData();
  }, []);

  return (
    <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
      <>
        <div className="p-2">
          <AiOutlineClose
            className="cursor-pointer"
            size={20}
            color="black"
            onClick={() => toggleDrawer(false)}
          />
        </div>
        <div className="flex flex-col gap-5 w-full h-full px-3 py-5">
          {basketSelectorData.data?.map((data, i) => {
            return (
              <BasketCard
                key={data.id + data.category + `.${i}`}
                id={data.id}
                category={data.category as ICategory}
                alt={data.alt}
                src={data.src}
                title={data.title}
                subTitle={data.subTitle}
              />
            );
          })}
        </div>
      </>
    </Drawer>
  );
}

function BasketCard({ id, category, title, subTitle, src, alt }: IBasketCard) {
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
          className="p-1 flex-center rounded-full bg-red-300 cursor-pointer"
          onClick={() => {
            storage.remove(category, id);

            console.log(storage.get(category), id);

            dispatchNewData();
          }}
        >
          <AiOutlineClose size={10} color="white" />
        </div>
      </div>
    </div>
  );
}
