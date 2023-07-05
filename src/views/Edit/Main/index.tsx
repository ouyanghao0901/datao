import { FC, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { initRuler } from "./initRuler";

const App: FC = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const ruleX = useRef<HTMLCanvasElement | null>(null);
  const ruleY = useRef<HTMLCanvasElement | null>(null);

  const getGap = (zoom: number) => {
    const zooms = [0.02, 0.03, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 18];
    const gaps = [5000, 2500, 1000, 500, 250, 100, 50, 25, 10, 5, 2];

    let i = 0;
    while (i < zooms.length && zooms[i] < zoom) {
      i++;
    }

    return gaps[i - 1] || 5000;
  };

  useEffect(() => {
    if (!wrapper.current || !ruleX.current || !ruleY.current) return;

    const info = wrapper.current.getBoundingClientRect();
    const { width, height } = info;

    // 初始化X轴尺子宽高
    ruleX.current.width = width - 20;
    ruleX.current.height = 20;

    // 初始化Y轴尺子宽高
    ruleY.current.width = 20;
    ruleY.current.height = height - 60;

    const zoom = 0.5;
    const gap = getGap(zoom);

    initRuler({ ruleX: ruleX.current, ruleY: ruleY.current, zoom, gap });
  }, [wrapper, ruleX]);

  return (
    <div ref={wrapper} className={`h-full w-full ${styles["main-box"]}`}>
      <div className={styles["main-header"]}></div>
      <div className={styles["content-box"]}>
        <canvas ref={ruleX} className={styles["rule-x"]} />
        <canvas ref={ruleY} className={styles["rule-y"]} />
        <div className={styles["scroll-wrap"]}>
          <div className={styles["scroll-box"]}>4324</div>
        </div>
      </div>
    </div>
  );
};

export default App;
