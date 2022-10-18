import React from "react";
import GameDashBoard from "../gameDashboard";
import styles from "./index.module.css"

function DashBoardAdmin() {
  return (
    <main className={styles.mainDashboard} >
      {/* Header */}
      <nav className={styles.navigationDashboard}>Navigation</nav>
      <GameDashBoard />
    </main>
  );
}

export default DashBoardAdmin;
