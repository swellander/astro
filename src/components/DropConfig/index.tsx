import styles from "./styles";
import { useState } from "react";

function DropConfig() {
  const [isSendingTokens, setIsSendingTokens] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <div
          onClick={() => setIsSendingTokens(true)}
          className={`${styles.btn} ${isSendingTokens && styles.isSelected}`}
        >
          <p className={styles.btnSubtitle}>Send</p>
          <h2 className={styles.btnTitle}>Tokens</h2>
        </div>
        <div className={styles.or}>
          <p>or</p>
        </div>
        <div
          className={`${styles.btn} ${!isSendingTokens && styles.isSelected}`}
          onClick={() => setIsSendingTokens(false)}
        >
          <p className={styles.btnSubtitle}>Send</p>
          <h2 className={styles.btnTitle}>NFTs</h2>
        </div>
      </div>
      <div className={styles.tokenInput}></div>
    </div>
  );
}

export default DropConfig;
