import style from "./style/commonInput.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  width: number;
  height: number;
  type: "text" | "password"
}

export default function CommonInput(props: InputProps) {
  const inputStyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
  };
  
  return (
    <>
      <input className={style.customInput} {...props} style={inputStyle} />
    </>
  );
}
