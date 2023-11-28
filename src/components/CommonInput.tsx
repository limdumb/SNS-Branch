import { ChangeEvent } from "react";
import style from "./style/commonInput.module.css";

interface InputProps {
  placeholder: string;
  width: string;
  height: string;
  type: "text" | "password";
  valueType: "id" | "password" | "nickName" | "name" | "email";
  inputValue: string;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CommonInput(props: InputProps) {
  const inputStyle = {
    width: `${props.width}`,
    height: `${props.height}`,
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
