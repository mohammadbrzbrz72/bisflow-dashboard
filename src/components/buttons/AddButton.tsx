import { HiPlus } from "react-icons/hi";
import clsx from "clsx";

interface IAddButton {
  classes?: { root?: string; icon?: string };
  onClick: () => void;
  color: "white" | "green";
  size?: number;
}

const COLORS = {
  white: "white",
  green: "#23A0A5",
};

const styles = {
  root: `
    bg-green-dark-2
    flex items-center justify-center
    w-[50px] h-[50px]
    rounded-full
    cursor-pointer
  `,
};

export function AddButton({ classes, onClick, color, size = 20 }: IAddButton) {
  return (
    <div
      className={clsx(styles.root, classes?.root, "add-button-component")}
      onClick={onClick}
    >
      <HiPlus
        className={classes?.icon + ""}
        color={COLORS[color]}
        size={size}
      />
    </div>
  );
}
