import React from "react";
import styles from "../Toggle/index.module.css"

const Toggle =  ({onChange}) =>(
    <label className={styles.ImputWrapper}>
    <input type="checkbox" onChange={onChange} className={styles.inputtogle}/>
    <span className={styles.spantogle}/>
    </label>
    
);


export default Toggle;