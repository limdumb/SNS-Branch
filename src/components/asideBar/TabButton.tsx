import iconValue from "@/function/util/iconValue";
import style from "./style/tabButton.module.css";
import { signika } from "@/font";
import Link from "next/link";

interface TabButtonProps {
  contents: string;
  getPathValue: (clickValue: string) => void;
}

export default function TabButton(props: TabButtonProps) {
  const icons = iconValue();

  return (
    <Link
      className={`${style.Tab_Button_Container} ${signika.className}`}
      href={`/${
        props.contents !== "Home" ? props.contents.toLowerCase() : ""
      }`}
      onClick={() => props.getPathValue(props.contents)}
    >
      {icons.map((el) => {
        if (el.name === props.contents) {
          return el.icon;
        }
      })}
      <button className={style.Tab_Button_Wrapper}>{props.contents}</button>
    </Link>
  );
}
