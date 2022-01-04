import React from "react";
import classes from "./userinfo.module.css";

const UserInfo = () => (
    <div className={classes.userinfo}>
        <div className={classes.name}>Baginz</div>
        <div className={classes.status}>
            <span className={classes.circle} />В сети
        </div>
    </div>
);

export default UserInfo;
