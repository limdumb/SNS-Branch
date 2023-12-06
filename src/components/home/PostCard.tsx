import { PostCardType } from "@/app/home/page";
import CustomImage from "../CustomImage";
import SubmitButton from "../SubmitButton";
import CommentBox from "./CommentBox";
import style from "./style/postCard.module.css";

export default function PostCard(props: PostCardType) {
  return (
    <div className={style.Post_Box_Wrapper}>
      <div className={style.Post_Card_Container}>
        <div className={style.Post_Profile_Container}>
          <div className={style.Image_Wrapper}>
            <CustomImage
              imageURL={props.user.imageUrl}
              alt={""}
              borderRadious="50%"
            />
          </div>
          <div>
            <span>{props.user.nickName}</span>
          </div>
        </div>
        <div className={style.Post_Inner_Contents}>
          <span>{props.contents}</span>
        </div>
        <div className={style.Reaction_Container}>
          <span>👍 Like {props.likes}</span>
          <div>💬 Comment {props.comments.length}</div>
        </div>
      </div>
      <div className={style.Comment_Box}>
        <div
          style={{
            borderBottom: "1px solid #DBDBDB",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          {props.comments.map((el, index) => {
            return (
              <CommentBox
                key={index}
                user={{
                  id: el.user.id,
                  nickName: el.user.nickName,
                  imageUrl: el.user.imageUrl,
                }}
                comments={el.comments}
              />
            );
          })}
        </div>
        <div className={style.Write_Comment_Box}>
          <textarea
            className={style.Write_Input}
            placeholder="댓글을 입력해 주세요"
          />
          <div className={style.Button_Wrapper}>
            <SubmitButton>댓글작성</SubmitButton>
          </div>
        </div>
      </div>
    </div>
  );
}
