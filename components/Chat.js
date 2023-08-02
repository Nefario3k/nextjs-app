import * as React from 'react';
import { useSelector } from 'react-redux'
import helper from '@/plugins/helper';
import IconButton from '@mui/material/IconButton';
const { getFullName, formatNaira } = helper
// icons 
import MessageIcon from '@/static/svg/message';
import Order from '@/static/svg/order';
import PlusIcon from '@/static/svg/plus';
import EmojiIcon from '@/static/svg/emoji';
import SendIcon from '@/static/svg/send';
import ChatCheck from '@/static/svg/chatCheck';
// empty states 
const EmptyStateChat = function () {
    return <div className='emptyStates_chat text-center flex flex-row items-center justify-center'>
        <div className='flex flex-col gap-8 items-center'>
            <div>
                <MessageIcon />
            </div>
            <h3>No chat selected yet!</h3>
            <h4>To continue your conversation, please select a chat from the contact list</h4>
        </div>
    </div>
}
// chat area 
const ChatContent = function ({ data }) {
    if (!Object.keys(data).length) return 'An error occurred'
    return <>
        <div className='header_chat flex gap-4 items-center justify-between'>
            <aside className='flex gap-4 items-center'>
                <div className='imageHolder'>
                    <img src={data.imageUrl} alt={getFullName(data.first_name, data.last_name)} />
                </div>
                <div className="flex flex-col justify-between gap-4">
                    <h6>{getFullName(data.first_name, data.last_name)}</h6>
                    <div className='flex items-center gap-4'>
                        <div className={`status ${data.status}`}></div>
                        <span className='tagline'>{data.status}</span>
                        <span className='date'>{data.time_stamp}</span>
                    </div>
                </div>
            </aside>
            <div className="flex flex-col justify-between gap-4">
                <div className='flex items-center gap-5'>
                    <span className="message_counter">New Customer</span>
                    <IconButton className='Btn drowpDownbtn variant_href'>
                        <span>View Profile</span>
                    </IconButton>
                </div>
                <div className='flex items-center gap-4 justify-end'>
                    <div>
                        <Order />
                    </div>
                    <span style={{ fontSize: '1.4rem' }} className="date">0 Orders</span>
                </div>
            </div>
        </div>

        <section id='ChatSection'>
            {data.messageDateStamps.map((stamp, index) => {
                return (
                    <div key={index + stamp} className='ChatSectionWrapper flex flex-col gap-16'>
                        <p className='self-center date_stamp'>{stamp}</p>
                        {data.message.filter(element => element.date_stamp === stamp).map((item, id) => {
                            return <div key={id + 22323 + index + stamp} className={`chat_wrapper ${!item.user ? 'self-end admin' : ''}`} >
                                <div className='chat_bubble'>
                                    {item.content}
                                </div>
                                <div className={`${item.user ? '' : 'mt-4 flex items-center justify-end gap-4'}`}>
                                    <span className='tag'>{item.time_stamp}</span>
                                    <span className={`check ${item.user ? 'hidden' : 'inline-block'}`}><ChatCheck /></span>
                                </div>
                            </div>
                        })}
                    </div>
                )
            })}
        </section>
    </>
}
// input fiel 
const TextArea = function () {
    return <>
        <div className='inputArea relative'>
            <textarea placeholder='Your message' name="" id=""></textarea>
            <div title='Images, Docs, video, File' className='absolute plus'>
                <PlusIcon />
            </div>
            <div title='Emoji' className='absolute emoji'>
                <EmojiIcon />
            </div>
            <div title='Send' className='absolute send'>
                <IconButton className='Btn drowpDownbtn variant_send'>
                    <span>Send</span>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    </>
}
export default function ChatArea() {
    const chatData = useSelector(state => state.chat.value)
    let data = Object.keys(chatData).length
    if (!data) return <EmptyStateChat />
    return <div className="flex gap-4 flex-col">
        <ChatContent data={chatData} />
        <TextArea />
    </div>
}