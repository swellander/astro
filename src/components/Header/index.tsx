import logo from "./logo.svg";
import styles from "./styles";

function Header() {
  return (
    <h1 className={styles.h1}>
      <img src={logo} />
    </h1>
  );
}

export default Header;
