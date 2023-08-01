import * as React from 'react';
import helper from '@/plugins/helper';
import IconButton from '@mui/material/IconButton';
const { getFullName, formatNaira } = helper
// icons 
import MessageIcon from '@/static/svg/message';
import Order from '@/static/svg/order';
const EmptyStateChat = (
    <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col gap-8 items-center'>
            <div>
                <MessageIcon />
            </div>
            <h3>No chat selected yet!</h3>
            <h4>To continue your conversation, please select a chat from the contact list</h4>
        </div>
    </div>
)
const ChatArea = function(data){
    if (!Object.keys(data).length)return 'An error occurred'
    return <div className="flex gap-14 flex-col">
        <div className='header_chat flex gap-4 items-center justify-between'>
            <aside className='flex gap-4 items-center'>
                <div className='imageHolder'>
                    <img src={data.imageUrl} alt={getFullName(data.first_name, data.last_name)} />
                </div>
                <div className="flex flex-col justify-between gap-4">
                    <h6>{getFullName(data.first_name, data.last_name)}</h6>
                    <div className='flex items-center gap-8'>
                        <div className={`status ${data.status}`}></div>
                        <span className='tag'>{data.status}</span>
                        <span className='date'>{data.time_stamp}</span>
                    </div>
                </div>
            </aside>
            <div className="flex flex-col justify-between gap-4">
                <div className='flex items-center gap-4'>
                    <span className="message_counter">New Customer</span>
                    <IconButton className='Btn drowpDownbtn variant_href'>
                        <span>View Profile</span>
                    </IconButton>
                </div>
                <div className='flex items-center gap-4'>
                    <Order />
                    <span className="tag">0 Orders</span>
                </div>
            </div>
        </div>

        <section id='ChatSection' className='ChatSection flex flex-col gap-16'>
            {data.messageDateStamps.map((stamp, index)=> {
                return 
            })}
        </section>
    </div>
}
export default function ChatArea() {
    const [chatData, setChatData] = React.useState({});
    const toggleChat = (element, index) => {
        if (element) setChatData({ ...element, id: index });
        else setChatData({});
    };

    let data = Object.keys(chatData).length
    if(!data) return <EmptyStateChat />
    return <ChatArea data={chatData} />
}