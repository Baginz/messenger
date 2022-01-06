import React from "react";
import UserInfo from "./UserInfo";

import "./styles.css";
import Theme from "./Theme";

const Header = () => {
    return (
        <div className="header">
            <UserInfo />
            <Theme />
        </div>
    );
};

export default Header;
