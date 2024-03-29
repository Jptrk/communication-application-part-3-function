// Libraries
import React from "react";
import styles from "./ManageDocuments.module.scss";
// Components
import MyUploads from "./MyUploads";
import SharedUploads from "./SharedUploads";

function ManageDocuments() {
  return (
    <main className={styles.main}>
      {/* My uploads */}
      <MyUploads />
      {/* <!-- Shared uploads --> */}
      <SharedUploads />
    </main>
  );
}

export default ManageDocuments;
