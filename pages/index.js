import Head from "next/head";
import IconButton from '@mui/material/IconButton';
// figma icons 
import Cart from "@/static/svg/dashboard/cart";
import Sale from "@/static/svg/dashboard/sale";
import Customer from "@/static/svg/customer";
import Folder from "@/static/svg/dashboard/folder";
import Order from "@/static/svg/order";
import ArrowDown from '@/static/svg/arrowDown';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="content">
                <div className="content_wrapper flex flex-row">
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
                                    <div className="flex items-center g-2">
                                        <h3>450</h3>
                                        <span className="value">+20.00%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content_cards basis-1/3">swsws</div>
                    <div className="content_cards basis-1/2">swsws</div>
                </div>
            </section>
        </>
    );
}
