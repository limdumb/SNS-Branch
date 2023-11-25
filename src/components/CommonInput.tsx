import { ChangeEvent } from "react";
import style from "./style/commonInput.module.css";

interface InputProps {
  placeholder: string;
  width: number;
  height: number;
  type: "text" | "password";
  valueType: "id" | "password" | "nickName" | "name" | "email";
  inputValue: string;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CommonInput(props: InputProps) {
  const inputStyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
  };

  return (
    <div style={inputStyle}>
      <input
        name={props.valueType}
        placeholder={props.placeholder}
        type={props.type}
        className={style.customInput}
        style={inputStyle}
        value={props.inputValue}
        onChange={(e) => props.inputHandler(e)}
      />
    </div>
  );
}
