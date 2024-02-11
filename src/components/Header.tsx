import style from "./style/header.module.css";
import { IoIosMenu } from "react-icons/io";

interface HeaderProps {
  routes: string;
  changeModalClicked: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <header className={style.Header_Container}>
      <div className={style.Header_Wrapper}>
        <span>{props.routes === "/" ? "HOME" : props.routes}</span>
        <div className={style.Icon_Wrapper}>
          <IoIosMenu size={30} onClick={() => props.changeModalClicked()} />
        </div>
      </div>
    </header>
  );
}
