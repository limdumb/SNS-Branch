import Logo from "../Logo";
import TabButton from "./TabButton";
import style from "./style/asideBar.module.css";

interface AsideBarProps {
}

export default function AsideBar(props: AsideBarProps) {
  const asideTabs = ["Home", "Friends", "Commercial", "Profile", "Messages"];

  return (
    <aside className={style.Aside_Container}>
      <div className={style.Logo_Container}>
        <Logo fontWeight={"bold"} navigateRoute={""} fontSize={30} />
      </div>
      {asideTabs.map((el) => {
        return (
          <TabButton key={el}contents={el} />
        );
      })}
    </aside>
  );
}
