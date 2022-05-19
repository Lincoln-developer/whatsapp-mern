import React from 'react'
import './Chat.css'
import {Avatar} from "@material-ui/core"
import {SearchOutlined} from "@material-ui/icons"
import {AttachFile } from "@material-ui/icons"
import {MoreVert} from "@material-ui/icons"
import {IconButton} from "@material-ui/core"

function Chat() {
  return (
    <div className='chat'>
        <div className='chat_header'>
          <Avatar/>
          <div className='chat_headerInfo'>
            <h3>Room name</h3>
            <p>Last seen...</p>
          </div>
          <div className='chat_headerRight'>
            <IconButton>
              <SearchOutlined/>
            </IconButton>
            <IconButton>
              <AttachFile/>
            </IconButton>
            <IconButton>
              <MoreVert/>
            </IconButton>
          </div>
        </div>
        <div className='chat_body'>
          <p>
            <span className='chat_name'>Lincoln</span>

            This is the message body

            <span className='chat_timestamp'>
              {new Date.toUTCString()}
            </span>
          </p>
        </div>
    </div>
  )
}

export default Chat