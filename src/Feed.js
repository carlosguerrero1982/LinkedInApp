import React,{useState} from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts';


 function Feed() {
    
    const [posts, setPosts] = useState([
       
    ]);

    return (
        <div className="feed">
            
            <div className="feed_inputContainer">

                <div className="feed_input">

                <CreateIcon />

                <form >

                <input type="text"/>
                <button type="submit">Send</button>

                </form>

                </div>

            <div className="feed_inputOptions">

                 <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                 <InputOption Icon={SubscriptionsIcon} title="Subscription" color="#E7A33E" />
                 <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                 <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
            </div>


        </div>

        {posts.map((post)=>(

            <Posts />
        ))
        }
        <Posts name="Carlos Guerrero" description="Test" message="Testing"/>

     </div>
    )
}

export default Feed
