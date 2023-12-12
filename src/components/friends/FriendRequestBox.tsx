import style from "./style/friendRequestBox.module.css";
import { FriendsDataType } from "./Friends";
import CustomImage from "../CustomImage";
import SubmitButton from "../SubmitButton";

export default function FrinedRequestBox(props: FriendsDataType) {
  return (
    <div className={style.Request_Box_Container}>
      <div className={style.User_Profile_Container}>
        <div className={style.Image_Wrapper}>
          <CustomImage
            imageURL={props.imageUrl}
            alt={"Profile 이미지"}
            borderRadious="50%"
          />
        </div>
        <div className={style.NickName_Wrapper}>
          <span>{props.nickName}</span>
        </div>
      </div>
      <div className={style.Button_Wrapper}>
        <div className={style.Button_Container}>
          <SubmitButton>수락</SubmitButton>
        </div>
        <div className={style.Button_Container}>
          <SubmitButton>거절</SubmitButton>
        </div>
      </div>
    </div>
  );
}
