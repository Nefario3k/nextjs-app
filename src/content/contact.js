
import * as React from 'react';
const orderArr = [
    {
        first_name: 'Jane',
        last_name: 'Doe',
        imageUrl: '../../static/image/user1.png',
        last_message: 'I want to know if the price is negotiable, i need about 2 Units',
        quantity: 1,
        message_counter: 1,
        status: 'online',
        time_stamp: '12:55 am',
        message: [
            {
                user: true,
                content: 'Hello, I want to make enquiries about your product',
                time_stamp: '12:55 am',
                date_stamp: '12 August 2022',
            },
            {
                user: false,
                content: 'What do you need to know?',
                time_stamp: '12:57 am',
                date_stamp: '12 August 2022',
            },
            {
                user: false,
                content: 'Hello Janet, thank you for reaching out',
                time_stamp: '12:57 am',
                date_stamp: '12 August 2022',
            },
            {
                user: false,
                content: 'I want to know if the price is negotiable, i need about 2 Units',
                time_stamp: '12:55 am',
                date_stamp: 'today',
            },
        ],
        messageDateStamps: ['12 August 2022', 'yesterday', 'today'],
        userItem: {
            title: 'iPhone 13',
            imageUrl: '../../static/image/order1.png',
            price: 730000,
            stock: 12,
        },
    },
    {
        first_name: 'Janet',
        last_name: 'Adebayo',
        imageUrl: '../../static/image/user2.png',
        last_message: 'I want to know if the price is negotiable, i need about 2 Units',
        quantity: 1,
        message_counter: 1,
        status: 'offline',
        time_stamp: '12:55 am',
        message: [
            {
                user: true,
                content: 'Hello, I want to make enquiries about your product',
                time_stamp: '12:55 am',
                date_stamp: '12 August 2022',
            },
            {
                user: false,
                content: 'What do you need to know?',
                time_stamp: '12:57 am',
                date_stamp: '12 August 2022',
            },
            {
                user: false,
                content: 'Hello Janet, thank you for reaching out',
                time_stamp: '12:57 am',
                date_stamp: '12 August 2022',
            },
            {
                user: false,
                content: 'I want to know if the price is negotiable, i need about 2 Units',
                time_stamp: '12:55 am',
                date_stamp: 'today',
            },
        ],
        messageDateStamps: ['12 August 2022', 'yesterday', 'today'],
        userItem: {
            title: 'iPhone 13',
            imageUrl: '../../static/image/order1.png',
            price: 730000,
            stock: 12,
        },
    },
    {
        first_name: 'Kunle',
        last_name: 'Adekunle',
        imageUrl: '../../static/image/user3.png',
        last_message: 'I want to know if the price is negotiable, i need about 2 Units',
        quantity: 1,
        message_counter: 2,
        status: 'offline',
        time_stamp: '12:55 am',
        message: [
            {
                user: true,
                content: 'Hello, I want to make enquiries about your product',
                time_stamp: '12:55 am',
                date_stamp: '12 August 2022',
            },
            {
                user: false,
                content: 'What do you need to know?',
                time_stamp: '12:57 am',
                date_stamp: '12 August 2022',
            },
            {
                user: false,
                content: 'Hello Janet, thank you for reaching out',
                time_stamp: '12:57 am',
                date_stamp: '12 August 2022',
            },
            {
                user: false,
                content: 'I want to know if the price is negotiable, i need about 2 Units',
                time_stamp: '12:55 am',
                date_stamp: 'today',
            },
        ],
        messageDateStamps: ['12 August 2022', 'yesterday', 'today'],
        userItem: {
            title: 'iPhone 13',
            imageUrl: '../../static/image/order1.png',
            price: 730000,
            stock: 12,
        },
    },
]

const multipliedArr = function () {
    var arr = [];
    for (let index = 0; index < 13; index++) {
        arr = [...arr, ...orderArr]
    }

    return arr;
}
export default function ContactList() {
    // full name
    const getFullName = function (fname, lname) {
        if (!fname && !lname) return "Nil";
        return fname + " " + lname;
    };
    const [active, setActive] = React.useState(true);
    const toggleChat = (element, index) => {
        setActive(index);
    };
    return <ul>
        {multipliedArr().map((element, index) => {
            return <li onClick={() => { toggleChat(element, index) }} key={index} className={`${active === index ? 'active' : ''} flex flex-row items-center justify-between gap-8`} >
                <aside className="flex flex-row items-center gap-4">
                    <div className="relative imageHolder">
                        <img src={element.imageUrl} alt={getFullName(element.first_name, element.last_name)} />
                        <div className={`status ${element.status} absolute`}></div>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                        <h6>{getFullName(element.first_name, element.last_name)}</h6>
                        <h4>{element.last_message}</h4>
                    </div>
                </aside>
                <div className="flex grow flex-col justify-between gap-4">
                    <span className={`justify-self-end message_counter ${element.message_counter > 1 ? 'higher' : ''}`}>{element.message_counter > 1 ? element.message_counter : 'new'}</span>
                    <span className="tag">{element.time_stamp}</span>
                </div>

            </li>

        })}
    </ul>
}