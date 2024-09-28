import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./Header.scss";

import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to={`/`} className="header__logocontainer">
        <div className="header__logocontainer">
          <img className="header__logo" src={logo} alt="Brainflix-logo" />
        </div>
      </Link>
      <div className="header__searchcontainer">
        <div className="header__search">
          <img
            className="header__searchicon"
            src={searchIcon}
            alt="search-icon"
          />
          <input
            type="text"
            name="search-box"
            className="header__searchtext"
            placeholder="Search"
          />
        </div>
        <Avatar prop={avatarImage} />
        <Link to={'/upload'} className="upload" >
          <Button prop="UPLOAD" url={uploadIcon} />
        </Link>
      </div>
    </div>
  );
}
