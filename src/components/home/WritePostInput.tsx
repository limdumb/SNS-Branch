import { ChangeEvent } from "react";
import CustomImage from "../CustomImage";
import SubmitButton from "../SubmitButton";
import style from "./style/writePostInput.module.css";
import { CreatePostType } from "../Layout";
import { AxiosResponse } from "axios";

interface WritePostInputProps {
  inputValue: string;
  changeFunction: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  submitFunction: (
    props: CreatePostType
  ) => Promise<AxiosResponse<any, any> | undefined>;
  postRequest: CreatePostType;
}

export default function WritePostInput(props: WritePostInputProps) {
  console.log(props.postRequest);
  return (
    <div className={style.Post_Container}>
      <div className={style.Post_Contents_Wrapper}>
        <div className={style.Image_Container}>
          <CustomImage imageURL={""} alt={""} borderRadious="50%" />
        </div>
        <div className={style.Input_Container}>
          <textarea
            className={style.Write_Area_Contents}
            placeholder="어떤일이 일어나고있나요?"
            value={props.inputValue}
            onChange={(e) => {
              props.changeFunction(e);
            }}
          />
        </div>
      </div>
      <div className={style.Submit_Button_Wrapper}>
        <div style={{ width: "130px", height: "25px" }}>
          <SubmitButton
            onClick={async () => {
              const response = await props.submitFunction(props.postRequest);

              if (response?.status === 201) {
                alert("작성이 완료되었습니다.");
                window.location.reload();
              }
            }}
          >
            작성하기
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
