import { FC, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const App: FC = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const ruleX = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!wrapper.current || !ruleX.current) return;
    const info = wrapper.current.getBoundingClientRect();
    const { width, height } = info;
    ruleX.current.width = width;
    ruleX.current.height = 24;

    const ctx = ruleX.current.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "#fff";
    ctx.moveTo(24, 0);
    ctx.lineTo(24, 16);
    ctx.stroke();
  }, [wrapper, ruleX]);

  return (
    <div ref={wrapper} className={`h-full w-full ${styles["main-box"]}`}>
      <div className={styles["main-header"]}></div>
      <div className={styles["content-box"]}>
        <canvas
          ref={ruleX}
          className={styles["rule-x"]}
          style={{ border: "1px solid #ff0000" }}
        />
        <canvas className={styles["rule-y"]} />
      </div>
    </div>
  );
};

export default App;
