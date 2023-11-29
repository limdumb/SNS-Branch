import CustomImage from "../CustomImage";
import SubmitButton from "../SubmitButton";
import style from "./style/writePostInput.module.css";

interface WritePostInputProps {
  inputValue: string;
  changeFunction: () => {};
  submitFunction: () => {};
}

export default function WritePostInput() {
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
            // ( Value값, Change Function 적용 예정 )
          />
        </div>
      </div>
      <div className={style.Submit_Button_Wrapper}>
        <div style={{ width: "130px", height: "25px" }}>
          <SubmitButton>작성하기</SubmitButton>
        </div>
      </div>
    </div>
  );
}
