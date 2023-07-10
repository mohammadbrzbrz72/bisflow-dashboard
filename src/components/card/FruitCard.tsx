import { css } from "@emotion/react";
import clsx from "clsx";

import { ColText, AddButton } from "..";

interface IFruitCard {
  className?: string;
  // image property
  src: string;
  alt: string;
  // bottom card
  title: string;
  subTitle: string;
  price: string;
  currency: string;
  onClick: () => void;
}

const styles = {
  main: `
    flex items-center
    w-full sm:w-[350px]
    rounded-[29px]
    bg-white shadow-[-9px_0px_29px_0px_#E5E5E5]
    pl-8 pr-4 py-10
  `,
  priceBox: `
    hidden
    w-[33px] h-[103px]
    mr-5
    rounded-[14px]
    bg-green-dark-2
    text-white text-[15px] not-italic font-medium tracking-[-0.4px]
  `,
  priceRotateBox: `
    flex-center
    rotate-90 min-w-[90px]
  `,
  contentBox: `
    flex items-center
  `,
  img: `
    w-[50px] h-[50px]
    object-cover object-center
  `,
};
const _css = {
  mainHover: css`
    @media (min-width: 768px) {
      transition: 0.6s;
      &:hover {
        background: linear-gradient(44deg, #50c9c3 0%, #96deda 100%);

        width: 390px;
        margin-left: -45px;

        .fruit-card-priceBox {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .col-text-component {
          h6,
          span {
            color: white !important;
          }
        }
        .add-button-component {
          background: white;
          * {
            color: #23a0a5 !important;
          }
        }
      }
    }
  `,
};

export function FruitCard({
  className,
  src,
  alt,
  price,
  currency,
  title,
  subTitle,
}: IFruitCard) {
  return (
    <div className={clsx(styles.main, className)} css={_css.mainHover}>
      <div className={styles.priceBox + " fruit-card-priceBox"}>
        <div className={styles.priceRotateBox}>
          <span>{price}</span> <span className="ml-1">{currency}</span>
        </div>
      </div>
      <div className="flex flex-grow justify-between items-end">
        <div className={styles.contentBox}>
          <div className="flex-center bg-gray-100 w-[86px] h-[86px] rounded-full">
            <img className={styles.img} src={src} alt={alt} />
          </div>
          <ColText className="ml-8" title={title} subTitle={subTitle} />
        </div>
        <div className="mb-[-20px]">
          <AddButton
            classes={{
              root: `
                w-[30px] h-[30px]
              `,
            }}
            onClick={() => {}}
            color="white"
            size={15}
          />
        </div>
      </div>
    </div>
  );
}
