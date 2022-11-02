import React from "react";
import UserProfile from "../../profileUser";
import styles from "./index.module.css";

function AdminProfile() {
  return (
    <main className={styles.mainSectionAdminProfile}>
      <UserProfile />
    </main>
  );
}

export default AdminProfile;
