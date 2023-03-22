import React from "react";
import './header-component.scss'

const HeaderComponent = ():JSX.Element => {
    return (
      <header>
        <h1 className="headerTitle">Todo list</h1>
      </header>
    );
}

export default HeaderComponent;