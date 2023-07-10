import { FC, useState } from "react";
import styles from "./index.module.scss";

const App: FC = () => {
  const [current, setCurrent] = useState("pc");
  const [rightMenu] = useState([
    { label: "全部设置", icon: "icon-shezhi-xianxing" },
    { label: "预览", icon: "icon-yulan1" },
    { label: "发布", icon: "icon-icon_fabu" },
  ]);
  const handleClick = () => {
    setCurrent(current === "pc" ? "phone" : "pc");
  };
  return (
    <div className={`${styles.container} f-x`}>
      <div className={"f-1 f-x a-i-c"}>
        <div className={`f-x j-c-c a-i-c ${styles["left-menu-item"]}`}>
          <i className={`iconfont icon-023tuceng `}></i>
        </div>
        <div className={`f-x j-c-c a-i-c ${styles["left-menu-item"]}`}>
          <i className="iconfont icon-layout-two"></i>
        </div>
      </div>
      <div className={"f-1 f-x j-c-c a-i-c"}>
        <div className={styles["switch-box"]} onClick={handleClick}>
          <div className={styles["switch-item"]}>
            <i className="iconfont icon-PCtaishiji"></i>
            <i className="iconfont icon-shumashouji"></i>
          </div>
          <div
            className={`${styles["slid"]} ${
              current === "phone" ? styles["current"] : ""
            }`}
          ></div>
        </div>
        <div className={styles["title"]}>test</div>
      </div>
      <div className={`f-1 f-x j-c-fe a-i-c ${styles["right-menu"]}`}>
        {rightMenu.map(i => {
          return (
            <div
              key={i.icon}
              className={`f-y a-i-c ${styles["right-menu-item"]}`}
            >
              <i className={`iconfont ${i.icon}`}></i>
              <span>{i.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
