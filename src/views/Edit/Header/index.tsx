import { FC } from "react";
import styles from "./index.module.scss";

const App: FC = () => {
  return (
    <div className={`${styles.container} f-x`}>
      <div className={"f-1 f-x a-i-c"}>左</div>
      <div className={"f-1 f-x j-c-c a-i-c"}>
        <div className={styles["switch-box"]}></div>
      </div>
      <div className={"f-1 f-x j-c-fe a-i-c"}>右</div>
    </div>
  );
};

export default App;
