import { useForm } from "@/customHook/useForm";
import CustomImage from "../CustomImage";
import Logo from "../Logo";
import style from "./style/loginBox.module.css";
import CommonInput from "../CommonInput";
import SubmitButton from "../SubmitButton";
import Link from "next/link";

export default function LoginBox() {
  const { inputValue, setInputValue } = useForm({ id: "", password: "" });

  return (
    <div className={style.Account_Box}>
      <div className={style.Image_Wrapper}>
        <CustomImage imageURL={""} alt={""} />
      </div>
      <div className={style.Login_Box_Wrapper}>
        <div className={style.Login_Container}>
          <div className={style.Logo_Box}>
            <Logo fontWeight={"bold"} navigateRoute={""} fontSize={50} />
          </div>
          <div className={style.Conture_Line}></div>
          <div className={style.Input_Container}>
            <div className={style.Input_Wrapper}>
              <CommonInput
                placeholder={"이메일을 입력해주세요"}
                width={"100%"}
                height={"37px"}
                type={"text"}
                valueType={"id"}
                inputValue={inputValue.id}
                inputHandler={setInputValue}
              />
            </div>
            <div className={style.Input_Wrapper}>
              <CommonInput
                placeholder={"비밀번호를 입력해주세요"}
                width={"100%"}
                height={"37px"}
                type={"password"}
                valueType={"password"}
                inputValue={inputValue.password}
                inputHandler={setInputValue}
              />
            </div>
          </div>
          <div className={style.Button_Wrapper}>
            <SubmitButton>로그인</SubmitButton>
          </div>
        </div>
        <div className={style.Navigate_Container}>
          <span>계정이 없으신가요?</span>
          <Link className={style.SignUp_Navigate} href={"/signup"}>
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
