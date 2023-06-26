import { FC, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const App: FC = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapper.current) return;
    let [mainWidth, mainHeight] = [0, 0];
    const info = wrapper.current.getBoundingClientRect();
    console.log(info.width, info.height, 333);
    const { width, height } = info;
    mainWidth = width;
    mainHeight = height;
  }, [wrapper]);

  return (
    <div ref={wrapper} className={`h-full w-full ${styles["main-box"]}`}>
      <div className={styles["main-header"]}></div>
      <div className={styles["content-box"]}>
        <canvas className={styles["rule-x"]} />
        <canvas className={styles["rule-y"]} />
      </div>
    </div>
  );
};

export default App;
