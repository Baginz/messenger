import React from "react";
import UserInfo from "./UserInfo";

import classes from "./header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <UserInfo />
        </div>
    );
};

export default Header;
