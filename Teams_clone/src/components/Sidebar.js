import React, { useState, useEffect } from 'react'
import db from "../firebase"
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import './Sidebar.css'
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import { useStateValue } from './StateProvider';
import AddAlertIcon from '@material-ui/icons/AddAlert';


const Sidebar = () => {
    const [rooms, setRooms] = useState([])
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar__headerRight">
                    
                    <button variant="contained"  type="button" onClick={(e)=>{
                        e.preventDefault();
                        // window.location.href='https://teams-video-frontend.herokuapp.com';
                        window.open('https://teams-video-frontend.herokuapp.com')
                    }}>
                        <IconButton>
                            <VideoCallIcon fontSize="large" />
                        </IconButton> 
                    </button>
                    
                    <IconButton>
                        <CalendarTodaySharpIcon />
                    </IconButton>

                    <IconButton>
                        <AddAlertIcon />
                    </IconButton>
                    
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
