import { FC, useState } from "react";

import styles from "./index.module.scss";

const App: FC = () => {
  const [list] = useState([
    "icon-upper",
    "icon-lower",
    "icon-toTop",
    "icon-toBottom",
  ]);
  return (
    <div className={styles["left-box"]}>
      <div className={styles["left-header"]}>图层</div>
      <div className={styles["left-operator"]}>
        <div className={styles["el-tooltip__trigger"]}>
          {list.map(i => {
            return <i className={`iconfont ${i}`} key={i}></i>;
          })}
        </div>
      </div>
      <div className={styles["el-scrollbar"]}>
        <div className={styles.node}>节点名称</div>
        <div className={styles.node}>节点名称</div>
        <div className={styles.node}>节点名称</div>
        <div className={styles.node}>节点名称</div>
        <div className={styles.node}>节点名称</div>
        <div className={styles.node}>节点名称</div>
        <div className={styles.node}>节点名称</div>
      </div>
    </div>
  );
};

export default App;
