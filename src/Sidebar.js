//import ExpandMore from '@material-ui/icons/ExpandMore'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import { useStateValue } from "./StateProvider"



function Sidebar() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="sidebar">
            <SidebarRow 
                src={user.photoURL}
                title={user.displayName}/> 
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>

        </div>
    )
}

export default Sidebar