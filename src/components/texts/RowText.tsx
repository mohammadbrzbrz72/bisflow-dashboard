import clsx from "clsx";

interface IColText {
  classes?: { root?: string; title?: string; subTitle?: string };
  title: string;
  subTitle: string;
}

const styles = {
  main: `
    flex gap-5
  `,
  title: `
    text-green-dark-1 text-[15px] not-italic font-bold tracking-[-0.4px]
    `,
  subTitle: `
    text-gray-light text-sm not-italic font-medium tracking-[-0.32px]
  `,
};

export function RowText({ classes, title, subTitle }: IColText) {
  return (
    <div className={clsx(styles.main, classes?.root, "row-text-component")}>
      {title && <h6 className={clsx(styles.title, classes?.title)}>{title}</h6>}
      <span className={clsx(styles.subTitle, classes?.subTitle)}>
        {subTitle}
      </span>
    </div>
  );
}
