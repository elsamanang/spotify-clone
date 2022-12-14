import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './layouts/navbar'
import Sidebar from './layouts/sidebar'
import { useEffect, useState } from 'react'

export default function Home() {

    const [navigColor, setNavigColor] = useState("")

    useEffect(() => {
        window.onscroll = function () { 
            document.body.style.scrollbarColor = '#000000 yellow';
            if (document.body.scrollTop >= 3 || document.documentElement.scrollTop >= 3) {
                setNavigColor("bg-[#000000]");
            } 
            else {
                setNavigColor("");
            }
        };
    }, [])

    return(
        <div className={styles.container}>
            <Head>
                <title>Spotify-clone | Home</title>
                <meta name="description" content="My clone of spotify web app" />
                <link rel="icon" href="/icon-green-64.png" />
            </Head>
            <div className='flex w-[100%]'>
                <div className="w-[38%] h-screen p-0 bg-[#000000] text-[#b3b3b3] font-bold">
                    <Sidebar />
                </div>
                <div className="w-full p-2 bg-[#191919]">
                    <div className="w-[100%] h-[50px]">
                        <Navbar color={navigColor} />
                    </div>
                    <div className="text-white">
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>ttt<br/>
                        tttt<br/>ttt<br/>ttt<br/>ttt
                    </div>
                </div>
            </div>
        </div>
    )
}