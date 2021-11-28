import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import { logout } from "./features/counter/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header__search">
            <SearchIcon />
          <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar="https://media-exp1.licdn.com/dms/image/C5603AQHjbQukB-Sj1g/profile-displayphoto-shrink_800_800/0/1633548806325?e=1643241600&v=beta&t=EH6-lIESfouloJ119fSf26LqYPLRc1L-W-xkEVfGPBw" title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
