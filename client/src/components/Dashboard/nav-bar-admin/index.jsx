import React from "react";
import "./index.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const NavBarAdmin = () => {
    return (
        <div className="navbaradmin">
          <div className="wrapper">
            <div className="searchadmin">
              <input type="text" placeholder="Search..." />
                <SearchIcon/>
              </div>
              <div className="items">
                <div className="item">
                  <LanguageIcon/>
                    English
                </div>
                <div className="item">
                  <DarkModeIcon/>
                </div>
                <div className="item">
                  <NotificationsIcon/>
                </div>
                <div className="item">
                  <ChatBubbleOutlineIcon/>
                </div>
              </div>
          </div>
        </div>
    );
};

export default NavBarAdmin;