

import helper from '@/plugins/helper';
const { formatNaira } = helper
const orderArr = [
    {
        title: 'iPhone 13',
        imageUrl: '/image/order1.png',
        price: 730000,
        quantity: 1,
        status: 'pending',
        created_at: '12 Sept 2022',
    },
    {
        title: 'iPhone 14',
        imageUrl: '/image/order2.png',
        price: 730000,
        quantity: 1,
        status: 'completed',
        created_at: '12 Sept 2022',
    },
]
const multipliedArr = function () {
    var arr = [];
    for (let index = 0; index < 13; index++) {
        arr = [...arr, ...orderArr]
    }

    return arr;
}
export default function OrderList() {
    return <ul>
        {multipliedArr().map((element, index) => {
            return <li key={index + 22323} className="flex flex-row items-center justify-between gap-8">
                <aside className="flex flex-row items-center gap-4">
                    <div className="imageHolder"><img src={element.imageUrl} alt={element.title} /></div>
                    <div className="flex flex-col justify-between gap-4">
                        <h6>{element.title}</h6>
                        <h4>{formatNaira(element.price)} x {element.quantity}</h4>
                    </div>
                </aside>
                <div className="flex flex-col justify-between gap-4">
                    <span className="date">{element.created_at}</span>
                    <span className={`status ${element.status}`}>{element.status}</span>
                </div>

            </li>

        })}
    </ul>
}