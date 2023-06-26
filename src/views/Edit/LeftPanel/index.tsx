import { FC } from "react";

import styles from "./index.module.scss";

const App: FC = () => {
  return (
    <div className={styles["left-box"]}>
      <div className={styles["left-header"]}>图层</div>
      <div className={styles["left-operator"]}>
        <div className={styles["el-tooltip__trigger"]}></div>
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
