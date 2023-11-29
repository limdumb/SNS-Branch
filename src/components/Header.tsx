import { lalezar } from "@/font";
import style from "./style/header.module.css";

interface HeaderProps {
  routes: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header className={`${style.Header_Container} ${lalezar.className}`}>
      {props.routes === "/" ? "HOME" : props.routes}
    </header>
  );
}
