import Link from "next/link";
import CommonInput from "../CommonInput";
import Logo from "../Logo";
import SubmitButton from "../SubmitButton";
import style from "./style/signupBox.module.css";
import { useForm } from "@/customHook/useForm";

export default function SignUpBox() {
  const { inputValue, setInputValue } = useForm({
    email: "",
    name: "",
    nickName: "",
    password: "",
  });

  return (
    <div className={style.SignUp_Box_Wrapper}>
      <div className={style.SignUp_Container}>
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
              valueType={"email"}
              inputValue={inputValue.email}
              inputHandler={setInputValue}
            />
            <CommonInput
              placeholder={"성함을 입력해주세요"}
              width={"100%"}
              height={"37px"}
              type={"text"}
              valueType={"name"}
              inputValue={inputValue.name}
              inputHandler={setInputValue}
            />
            <CommonInput
              placeholder={"닉네임을 입력해주세요 ex) @test"}
              width={"100%"}
              height={"37px"}
              type={"text"}
              valueType={"id"}
              inputValue={inputValue.nickName}
              inputHandler={setInputValue}
            />
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
        <div className={style.Button_Container}>
          <div className={style.Button_Wrapper}>
            <SubmitButton>로그인</SubmitButton>
          </div>
        </div>
      </div>
      <div className={style.Navigate_Container}>
        <span>이미 계정이 있으신가요?</span>
        <Link className={style.Login_Navigate} href={"/login"}>
          로그인
        </Link>
      </div>
    </div>
  );
}
