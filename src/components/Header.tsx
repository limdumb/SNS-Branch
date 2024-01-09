import style from "./style/header.module.css";

interface HeaderProps {
  routes: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header className={style.Header_Container}>
      {props.routes === "/" ? "HOME" : props.routes}
    </header>
  );
}
