import { AiOutlineSearch } from "react-icons/ai";

import { Input } from ".";

interface ISearchInput {}

const styles = {
  main: `
    flex items-center justify-between
    w-full h-[45px]
    bg-white 
    border rounded-[22.5px] border-solid border-[#CFCFCF]
    px-3 py-1
  `,
};

export function SearchInput({}: ISearchInput) {
  return (
    <div className={styles.main}>
      <Input
        className="rounded-[22.5px]"
        placeholder="Search"
        onChange={() => {}}
      />
      <AiOutlineSearch size={20} />
    </div>
  );
}
