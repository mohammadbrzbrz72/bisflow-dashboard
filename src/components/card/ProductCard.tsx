import { css } from "@emotion/react";

import storage from "@/utils/storage";
import { AddButton } from "..";

interface IProductCard {
  id: string;
  // image property
  src: string;
  alt: string;
  // bottom card
  title: string;
  subTitle: string;
  description: string;
  price: string;
  currency: string;
  onClick?: () => void;
}

const styles = {
  root: `
    flex flex-col justify-between
    text-white
    w-[300px] h-[585px]
    
    bg-gray-100
    rounded-[3rem]
    overflow-hidden
  `,
  img: `
    w-full h-[298px]
  `,
  textBox: `
    flex flex-col justify-between
    h-[287px]
    bg-gradient-to-r from-[#50C9C3] to-[#96deda]
    px-7 pt-10 pb-7
    rounded-[3rem]
  `,
  titleBox: `
    h-fit    
  `,
  title: `
    text-[40px] not-italic font-bold leading-[35px] tracking-[-1.067px]
  `,
  subTitle: `
    text-sm not-italic font-medium leading-[20px] tracking-[-0.373px]
  `,
  description: `
    text-[10px] not-italic font-medium leading-[18px] tracking-[-0.267px]
    mt-5
  `,
  priceBox: `
    text-xl not-italic font-medium tracking-[-0.533px]
  `,
};
const _css = {
  mainHover: css`
    @media (min-width: 768px) {
      transition: 0.4s;
      &:hover {
        width: 340px;
        height: 655px;
        margin-top: -15px;

        > div {
          height: 320px;
        }
      }
    }
  `,
};

export function ProductCard({
  id,
  src,
  alt,
  title,
  subTitle,
  description,
  price,
  currency,
}: // onClick,
IProductCard) {
  return (
    <div className={styles.root} css={_css.mainHover}>
      <img src={src} alt={alt} />
      <div className={styles.textBox}>
        <div className={styles.titleBox}>
          <h6 className={styles.title}>{title}</h6>
          <span className={styles.subTitle}>{subTitle}</span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className="flex justify-between items-center mt-5">
          <div className={styles.priceBox}>
            <span>{price}</span> <span>{currency}</span>
          </div>
          <AddButton
            color="white"
            onClick={() => {
              storage.push("product", id);
            }}
          />
        </div>
      </div>
    </div>
  );
}
