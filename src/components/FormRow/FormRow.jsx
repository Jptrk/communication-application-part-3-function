// Libraries
import styles from "./FormRow.module.scss";
import React from "react";

function FormRow(props) {
  return (
    <div className={styles.formRowContainer}>
      <div className="form-row">
        <label className={`${styles.formLabel}`}>
          <strong>{props.label}</strong>
        </label>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onInput={(e) => props.handler(e)}
          value={props.value}
        />
      </div>
      <small style={{ color: "red" }} className={styles.error}>
        {props.error}
      </small>
    </div>
  );
}

export default FormRow;
