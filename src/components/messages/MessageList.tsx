import styled from "styled-components";
import CustomImage from "../CustomImage";
import styles from "./styles/messageList.module.css";
import Link from "next/link";

const MessageContaeinr = styled.aside`
  width: 20%;
  min-height: 100vh;
  border-right: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 760px) {
    width: 37%;
  }
`;

const MessageBox = styled.div`
  width: 100%;
  height: 56px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

interface MessageListProps {
  name: string;
  message: string;
  imageUrl: string;
}

export default function MessageList() {
  return (
    <MessageContaeinr>
      <Link href={"/"} className={styles.Message_Box}>
        <div className={styles.Image_Wrapper}>
          <CustomImage borderRadious={"50%"} imageURL={""} alt={""} />
        </div>
        <div className={styles.User_Wrapper}>
          <div className={styles.Name_Wrapper}>@dumb_Lim</div>
          <div className={styles.Message_Wrapper}>아니그래서내가...</div>
        </div>
      </Link>
    </MessageContaeinr>
  );
}
