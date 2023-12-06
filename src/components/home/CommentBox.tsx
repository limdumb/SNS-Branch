import { CommentType } from "@/app/home/page";
import CustomImage from "../CustomImage";
import style from "./style/commentBox.module.css";

// 코멘트 Type을 가져올 예정

export default function CommentBox(props: CommentType) {
  return (
    <div className={style.Comment_Box_Container}>
      <div className={style.Comment_User_Profile_Wrapper}>
        <div className={style.Image_Wrapper}>
          <CustomImage
            borderRadious={"50%"}
            imageURL={props.user.imageUrl}
            alt={"돼지야"}
          />
        </div>
        <span style={{ fontSize: "14px" }}>{props.user.nickName}</span>
      </div>
      <div className={style.Comment_Contents_Wrapper}>
        <span className={style.Comment_Contents}>{props.comments}</span>
      </div>
    </div>
  );
}
