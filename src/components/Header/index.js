import React from "react";
import "./style.css";

function Header() {
  return (
<div>
  <nav className="uk-navbar-container uk-margin" uk-navbar="true">
    <div className="uk-navbar-left">

        <a className="uk-navbar-item uk-logo" href="/">Employee Directory</a>


        <div className="uk-navbar-item">
            <div>Filter</div>
        </div>

        <div className="uk-navbar-item">
            <form>
                <input className="uk-input uk-form-width-small" type="text" placeholder="Input"/>
                <button className="uk-button uk-button-default">Button</button>
            </form>
        </div>

    </div>
</nav>
</div>
  );
}

export default Header;
