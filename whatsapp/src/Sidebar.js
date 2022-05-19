import React from 'react'
import "./Sidebar.css";
import {DonutLarge} from '@mui/icons-material';
import {IconButton, Avatar} from "@material-ui/core"
import {Chat}from "@material-ui/icons" 
import {MoreVert} from "@material-ui/icons" 
import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
            <Avatar src='image.png'/>
         <div className="sidebar_headerRight">
           <IconButton>
                <DonutLarge/>
            </IconButton>
            <IconButton>
                <Chat/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
         </div>
        </div>
        <div className='sidebar_search'>
            <div className='sidebar_searchContainer'>
                <SearchOutlined/>
                <input placeholder='search or start new chat'type="text"/>
            </div>
        </div>
        <div className='sidebar_chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar
