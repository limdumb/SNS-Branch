import CustomImage from "../CustomImage";
import style from "./style/profileBox.module.css";

interface ProfilePropsType {
  imageUrl: string;
  nickName: string;
  id: number;
  introContents: string;
}

export default function ProfileBox(props: ProfilePropsType) {
  return (
    <div className={style.Profile_Box_Container}>
      <div className={style.Profile_Image_Wrapper}>
        <CustomImage
          imageURL={props.imageUrl}
          alt={"Profile Image"}
          borderRadious="10px"
        />
      </div>
      <div className={style.Profile_Contants_Wrapper}>
        <div className={style.NickName_Wrapper}>
          <span>{props.nickName}</span>
        </div>
        <div className={style.Information_Wrapper}>
          <span>{props.introContents}</span>
        </div>
      </div>
    </div>
  );
}
