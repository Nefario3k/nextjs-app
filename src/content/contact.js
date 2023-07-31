
const orderArr = [
    {
        first_name: 'Jane',
        last_name: 'Doe',
        imageUrl: '../../static/image/user1.png',
        status: 'new',
        last_message: 'I want to know if the price is negotiable, i need about 2 Units',
        quantity: 1,
        message_status: 'pending',
        status: 'online',
        time_stamp: '12:55 am',
        message: [
            {
                user: false,
                content: ''
            }
        ]
    },

]
export default function OrderList() {
    const formatNaira = function (num) {
        if (num === null) return "Nil";
        const formatter = new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
        });
        return formatter.format(num);
    }
    return <ul>
        {orderArr.map((element, index) => {
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