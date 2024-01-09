/* 1. 로고의 Props를 정의한다
   1-1. Widht, Height를 정의한다
   1-2. Logo의 Color를 정의한다
   1-3. Logo의 font-weight를 정의한다
   1-4. Logo의 Navigate의 경로를 지정한다
*/

import Link from "next/link";
import style from "./style/logo.module.css";

interface LogoProps {
  fontWeight: string;
  navigateRoute: string;
  backgroundColor?: string;
}

export default function Logo(props: LogoProps) {
  const logoStyle = {
    fontWeight: props.fontWeight,
    navigateRoute: props.navigateRoute,
    backgroundColor: props.backgroundColor,
  };

  return (
    <div style={logoStyle} className={style.mainLogo}>
      <Link href={props.navigateRoute}>Branch</Link>
    </div>
  );
}
