import { FC } from "react";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import Main from "./Main";
import styles from "./index.module.scss";
const App: FC = () => {
  return (
    <div className={`${styles.container}`}>
      <Header />
      <div className={`${styles.bottom} f-x`}>
        <LeftPanel />
        <Main />
      </div>
    </div>
  );
};

export default App;
