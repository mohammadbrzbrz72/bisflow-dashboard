/** @jsx jsx */

import { css } from "@emotion/react";
import { RxDash } from "react-icons/rx";
import clsx from "clsx";

interface IMinesButton {
  className?: string;
}

const styles = {
  main: `
    bg-white
    flex items-center justify-center
    w-[50px] h-[50px]
    rounded-full
  `,
};
const _css = {
  main: css`
    filter: drop-shadow(0px 10px 10px #44d0d2);
  `,
};

export function SubtractButton({ className }: IMinesButton) {
  return (
    <div className={clsx(styles.main, className)} css={_css.main}>
      <RxDash color="#3FBFB5" size={50} />
    </div>
  );
}
