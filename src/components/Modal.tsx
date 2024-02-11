import iconValue from "@/function/util/iconValue";
import Link from "next/link";
import styled from "styled-components";

interface ModalPropsType {
  changeModalClicked: () => void;
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #101010;
  height: 100vh;
  width: 25vh;
  position: fixed;
  z-index: 50;
  bottom: 0px;
  right: 0px;
  padding: 65px 30px;

  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ccc;
`;

const MenuList = styled.ul`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > li > a {
    font-size: 15px;
    font-weight: 600;
    color: rgb(204, 204, 204);
    bottom: 20px;
  }
`;

const ModalBackground = styled.div`
  width: 50vh;
  height: 100vh;
  position: fixed;
  z-index: 35;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.2;
  background-color: gray;
`;

export default function Modal(props: ModalPropsType) {
  const categoryValue = iconValue().map((el) => el.name);
  return (
    <>
      <ModalContainer>
        <MenuList>
          {categoryValue.map((el) => {
            return (
              <li key={el}>
                <Link href={`/${el.toLocaleLowerCase()}`}>{el}</Link>
              </li>
            );
          })}
        </MenuList>
      </ModalContainer>
      <ModalBackground onClick={() => props.changeModalClicked()} />
    </>
  );
}
