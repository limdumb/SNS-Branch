import CustomImage from "../CustomImage";
import style from "./style/commentBox.module.css";

// 코멘트 Type을 가져올 예정

export default function CommentBox() {
  return (
    <div className={style.Comment_Box_Container}>
      <div className={style.Comment_User_Profile_Wrapper}>
        <div className={style.Image_Wrapper}>
          <CustomImage borderRadious={"50%"} imageURL={""} alt={""} />
        </div>
        <span style={{ fontSize: "14px" }}>@dumb_Lim</span>
      </div>
      <div className={style.Comment_Contents_Wrapper}>
        <span className={style.Comment_Contents}></span>
      </div>
    </div>
  );
}
