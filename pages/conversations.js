import Head from "next/head";
import IconButton from '@mui/material/IconButton';
import ContactList from "@/src/content/contact";

// icons 
import SearchIcon from "@/static/svg/search";

export default function Home() {
    return (
        <>
            <Head>
                <title>Conversations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="content">
                {/* header  */}
                <header className="page_header flex items-center justify-between flex-row gap-8">
                    <h4>Conversations with Customers</h4>
                    <IconButton className='Btn drowpDownbtn' color="var(--black2)">
                        <span>New Message</span>
                    </IconButton>
                </header>
                {/* content  */}
                <div className="mt-8 content_wrapper flex flex-row gap-8">
                    {/* contacts */}
                    <div className="content_cards grow variant__contact">
                        <div className="flex gap-14 flex-col">
                            <div className="topHeader">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3>Contacts</h3>
                                    </div>
                                    <span className="tag">34</span>
                                </div>
                                <div className="relative searchArea">
                                    <input placeholder="Search" type="text" />
                                    <button className="absolute searchIcon">
                                        <SearchIcon />
                                    </button>
                                </div>
                            </div>
                            <ContactList />
                        </div>
                    </div>
                    {/* chat  */}
                    <div style={{ width: 'calc(63.5% - 20px)' }} className="content_cards">
                        
                    </div>
                </div>
            </section>
        </>
    );
}
