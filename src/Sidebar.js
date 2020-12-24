import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';


function Sidebar() {

    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );



    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&
                ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
                <Avatar className="sidebar_avatar" />
                <h2>Carlos Guerrero</h2>
                <h4>carlos.guerrero.rodriguez.dev@gmail.com</h4>
            </div>

            <div className="sidebar_stats">

                <div className="sidebar_stat">

                    <p>Who viewed you</p>
                    <p className="sidebarStat_number">2.5</p>
                </div>

                <div className="sidebar_stat">

                <p>Views on post</p>
                <p className="sidebarStat_number">2.4</p>

                </div>


            </div>

            <div className="sidebar_bottom">
                
                <p>Recent</p>

                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software')}
                {recentItem('hardware')}
                {recentItem('designer')}


            </div>
        </div>
    )
}

export default Sidebar
