import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <button className={styles.buttonContainer} type="button">
      <FaGithub color="#04d361" />
      <span>Victor Parente</span>
      <FiX className={styles.closeIcon} />
    </button>
    ) : (
    <button className={styles.buttonContainer} type="button">
     <FaGithub color="#eba417" />
     <span>Sign in with GitHub</span>
     <FiX className={styles.closeIcon} />
   </button>
  );
}