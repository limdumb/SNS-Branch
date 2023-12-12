import { nobile } from "@/font";
import styles from "./style/submitButton.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SubmitButton(props: ButtonProps) {
  return (
    <button className={`${styles.Custom_Button} ${nobile.className}`} {...props}>
      {props.children}
    </button>
  );
}
