import iconValue from "@/function/util/iconValue";
import style from "./style/tabButton.module.css";
import { signika } from "@/font";

interface TabButtonProps {
  contents: string
}

export default function TabButton(props: TabButtonProps) {
  const icons = iconValue();

  return (
    <div className={`${style.Tab_Button_Container} ${signika.className}`}>
      {icons.map((el) => {
        if (el.name === props.contents) {
          return el.icon;
        }
      })}
      <button className={style.Tab_Button_Wrapper}>{props.contents}</button>
    </div>
  );
}
