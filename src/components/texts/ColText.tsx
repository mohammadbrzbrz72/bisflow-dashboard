import React from "react";
import clsx from "clsx";

interface IColText {
  className?: string;
  title: string;
  subTitle: string;
}

const styles = {
  main: `
    
  `,
  title: `
    text-green-dark-1 text-[15px] not-italic font-bold tracking-[-0.4px]
    `,
  subTitle: `
    text-gray-light text-xs not-italic font-medium tracking-[-0.32px]
  `,
};

export function ColText({ className, title, subTitle }: IColText) {
  return (
    <div className={clsx(styles.main, className, "col-text-component")}>
      <h6 className={styles.title}>{title}</h6>
      <span className={styles.subTitle}>{subTitle}</span>
    </div>
  );
}
