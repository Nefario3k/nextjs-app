import Head from "next/head";
import IconButton from '@mui/material/IconButton';
// figma icons 
import Cart from "@/static/svg/dashboard/cart";
import Sale from "@/static/svg/dashboard/sale";
import Customer from "@/static/svg/dashboard/customer";
import Folder from "@/static/svg/dashboard/folder";
import Order from "@/static/svg/dashboard/order";
import ArrowDown from '@/static/svg/arrowDown';
import OrderList from "@/src/content/order";

export default function Home() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="content">
                {/* top cards  */}
                <div className="content_wrapper flex flex-row gap-8">
                    {/* sale  */}
                    <div className="content_cards basis-1/3">
                        <div className="flex gap-14 flex-col">
                            <div className="topHeader flex justify-between items-center">
                                <div>
                                    <Sale />
                                </div>
                                <IconButton className='Btn drowpDownbtn' color="var(--black2)">
                                    <span>This Week</span>
                                    <ArrowDown />
                                </IconButton>
                            </div>
                            <div className="flex flex-row">
                                <div className="basis-1/2">
                                    <span className="tag">Sales</span>
                                    <h3>₦4,000,000.00</h3>
                                </div>
                                <div className="basis-1/2">
                                    <span className="tag">Volume</span>
                                    <div className="flex items-center gap-4">
                                        <h3>450</h3>
                                        <span className="value">+20.00%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Customer */}
                    <div className="content_cards basis-1/3">
                        <div className="flex gap-14 flex-col">
                            <div className="topHeader flex justify-between items-center">
                                <div>
                                    <Customer />
                                </div>
                                <IconButton className='Btn drowpDownbtn' color="var(--black2)">
                                    <span>This Week</span>
                                    <ArrowDown />
                                </IconButton>
                            </div>
                            <div className="flex flex-row">
                                <div className="basis-1/2">
                                    <span className="tag">Customers</span>
                                    <div className="flex items-center gap-4">
                                        <h3>1,250</h3>
                                        <span className="value">+15.80%</span>
                                    </div>
                                </div>
                                <div className="basis-1/2">
                                    <span className="tag">Volume</span>
                                    <div className="flex items-center gap-4">
                                        <h3>1,180</h3>
                                        <span className="value">85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Order */}
                    <div className="content_cards basis-1/2">
                        <div className="flex gap-14 flex-col">
                            <div className="topHeader flex justify-between items-center">
                                <div>
                                    <Order />
                                </div>
                                <IconButton className='Btn drowpDownbtn' color="var(--black2)">
                                    <span>This Week</span>
                                    <ArrowDown />
                                </IconButton>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="basis-1/3">
                                    <span className="tag">All Orders</span>
                                    <h3>450</h3>
                                </div>
                                <div className="basis-1/3">
                                    <span className="tag">Pending</span>
                                    <h3>5</h3>
                                </div>
                                <div className="basis-1/3">
                                    <span className="tag">Completed</span>
                                    <h3>445</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* middle and half section  */}
                <div className="mt-8 content_wrapper flex flex-row gap-8">
                    {/* sale  */}
                    <div style={{ width: 'calc(58.5% - 20px)' }} className="flex flex-col gap-8">
                        <div className="flex flex-row gap-8">
                            {/* Marketing */}
                            <div className="content_cards basis-1/2">
                                <div className="flex gap-14 flex-col">
                                    <div className="topHeader flex justify-between items-center">
                                        <h3>
                                            Marketing
                                        </h3>
                                        <IconButton className='Btn drowpDownbtn' color="var(--black2)">
                                            <span>This Week</span>
                                            <ArrowDown />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 basis-1/2">
                                {/* folder  */}
                                <div className="content_cards variant_primary">
                                    <div className="flex gap-14 flex-col">
                                        <div className="topHeader flex justify-between items-center">
                                            <div>
                                                <Folder />
                                            </div>
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="basis-1/2">
                                                <span className="tag">All Products</span>
                                                <h3>45</h3>
                                            </div>
                                            <div className="basis-1/2">
                                                <span className="tag">Active</span>
                                                <div className="flex items-center gap-4">
                                                    <h3>32</h3>
                                                    <span className="value">+24%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* cart  */}
                                <div className="content_cards">
                                    <div className="flex gap-14 flex-col">
                                        <div className="topHeader flex justify-between items-center">
                                            <div>
                                                <Cart />
                                            </div>
                                            <IconButton className='Btn drowpDownbtn' color="var(--black2)">
                                                <span>This Week</span>
                                                <ArrowDown />
                                            </IconButton>
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="basis-1/2">
                                                <span className=" variant_danger">Abandoned Cart</span>
                                                <div className="flex items-center gap-4">
                                                    <h3>20%</h3>
                                                    <span className="value">+0.00%</span>
                                                </div>
                                            </div>
                                            <div className="basis-1/2">
                                                <span className="tag">Customers</span>
                                                <h3>30</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* summary  */}
                        <div className="content_cards ">
                            <div className="flex gap-14 flex-col">
                                <div className="topHeader flex justify-between items-center">
                                    <div className="flex items-center gap-9">
                                        <h3>Summary</h3>
                                        <IconButton className='Btn drowpDownbtn variant_primary' color="var(--black2)">
                                            <span>Sales</span>
                                            <ArrowDown />
                                        </IconButton>
                                    </div>
                                    <IconButton className='Btn drowpDownbtn variant_dark' color="var(--black2)">
                                        <span>Last 7 Days</span>
                                        <ArrowDown />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Recent Orders */}
                    <div className="content_cards grow variant_order">
                        <div className="flex gap-8 flex-col">
                            <div className="topHeader flex justify-between items-center">
                                <h3>Recent Orders</h3>
                            </div>
                            <OrderList />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
