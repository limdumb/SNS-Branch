import iconValue from "@/function/util/iconValue";
import style from "./style/tabButton.module.css";
import Link from "next/link";

interface TabButtonProps {
  contents: string;
}

export default function TabButton(props: TabButtonProps) {
  const icons = iconValue();

  return (
    <Link
      className={style.Tab_Button_Container}
      href={`/${props.contents !== "Home" ? props.contents.toLowerCase() : ""}`}
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
