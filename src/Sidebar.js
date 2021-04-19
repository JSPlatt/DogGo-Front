//import ExpandMore from '@material-ui/icons/ExpandMore'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons'




function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLIz3Nf6-_D12lWNCal6uTPrZ56bfCwrSzg&usqp=CAU' 
                title='Dynamic Username'/> 
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title="Messages"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar