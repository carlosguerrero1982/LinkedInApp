import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import {logout} from './features/userSlice';
import {useSelector} from "react-redux";
import { selectUser } from './features/userSlice';

function Header() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();


  const logoutApp = () =>{

    dispatch(logout())
    auth.signOut();

  }

    return (
        <div className="header">
           
         

            <div className="header_left">

              <img src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt=""/>

              <div className="header_search">

              <SearchIcon />

                <input placeholder="Search" type="text"/>

              </div>

            </div>



            <div className="header_right">

            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar={true} onClick={logoutApp} title="me" />
            
            </div>
        </div> 
    )
}

export default Header
