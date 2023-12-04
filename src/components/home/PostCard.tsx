import CustomImage from "../CustomImage";
import SubmitButton from "../SubmitButton";
import CommentBox from "./CommentBox";
import style from "./style/postCard.module.css";

interface CommentType {
  user: {
    id: number;
    nickName: string;
    imageUrl: string;
  };
  contents: string;
}

interface PostCardProps {
  user: {
    id: number;
    nickName: string;
    imageUrl: string;
  };
  contents: string;
  likes: number;
  comments: CommentType[];
}

export default function PostCard() {
  return (
    <div className={style.Post_Box_Wrapper}>
      <div className={style.Post_Card_Container}>
        <div className={style.Post_Profile_Container}>
          <div className={style.Image_Wrapper}>
            <CustomImage imageURL={""} alt={""} borderRadious="50%" />
          </div>
          <div>
            <span>@dumb_Lim</span>
          </div>
        </div>
        <div className={style.Post_Inner_Contents}>
          <div>dd </div>
        </div>
        <div className={style.Reaction_Container}>
          <div>👍 Like</div>
          <div>💬 Comment</div>
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
          <CommentBox />
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
