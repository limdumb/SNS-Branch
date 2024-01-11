import styled from "styled-components";
import CustomImage from "../CustomImage";
import styles from "./styles/messageList.module.css";

const MessageContaeinr = styled.aside`
  width: 20%;
  min-height: 100vh;
  border-right: 1px solid #dbdbdb;
`;

const MessageBox = styled.div`
  width: 100%;
  height: 56px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  background-color: pink;
  padding-left: 10px;
`;

export default function MessageList() {
  return (
    <MessageContaeinr>
      <MessageBox>
        <div className={styles.Image_Wrapper}>
          <CustomImage borderRadious={"50%"} imageURL={""} alt={""} />
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </MessageBox>
    </MessageContaeinr>
  );
}
