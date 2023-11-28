/* 1. 로고의 Props를 정의한다
   1-1. Widht, Height를 정의한다
   1-2. Logo의 Color를 정의한다
   1-3. Logo의 font-weight를 정의한다
   1-4. Logo의 Navigate의 경로를 지정한다
*/

import Link from "next/link";
import style from "./style/logo.module.css";
import { kanit } from "@/font";

interface LogoProps {
  fontWeight: string;
  navigateRoute: string;
  fontSize: number;
  backgroundColor?: string;
}

export default function Logo(props: LogoProps) {
  const logoStyle = {
    fontWeight: props.fontWeight,
    navigateRoute: props.navigateRoute,
    backgroundColor: props.backgroundColor,
    fontSize: props.fontSize,
  };

  return (
    <div style={logoStyle} className={`${style.mainLogo} ${kanit.className}`}>
      <Link href={props.navigateRoute}>Branch</Link>
    </div>
  );
}
