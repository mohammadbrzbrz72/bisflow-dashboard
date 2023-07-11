import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { Drawer, BasketCard } from "@/components";
import type { ICategory } from "@/components";
import { useBasketDispatcher } from "@/store/dispatchers/basket.dispatcher";
import { basketSelector } from "@/store/selectors/basket.selector";

type IToggleDrawer = (data?: boolean) => void;
interface IBasketDrawer {
  isOpen: boolean;
  toggleDrawer: IToggleDrawer;
}

export function BasketDrawer({ isOpen, toggleDrawer }: IBasketDrawer) {
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
