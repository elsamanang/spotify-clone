import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../layouts/navbar'
import Sidebar from '../layouts/sidebar'
import {Search, Close} from '@icon-park/react'
import PlayCard from '../components/playCard'
import LikeCard from '../components/likeCard'

export default function Playlist() {
    const [navigColor, setNavigColor] = useState("");

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
                <title>Spotify-clone | Recherche</title>
                <meta name="description" content="My clone of spotify web app" />
                <link rel="icon" href="/icon-green-64.png" />
            </Head>
            <div className='flex w-[100%]'>
                <div className="w-[22%] h-screen p-0 bg-[#000000] text-[#b3b3b3] font-bold">
                    <Sidebar />
                </div>
                <div className="w-full p-2 bg-[#191919]">
                    <div className="w-[100%] h-[50px]">
                        <Navbar color={navigColor} />
                    </div>
                    <div className="text-white pt-5 pb-2 px-6">
                        <div className='grid my-3'>
                            <div className='mx-2 my-2 flex justify-between'>
                                <p className='font-bold text-[24px]'>{'Playlists'}</p>
                            </div>
                            <div className='grid grid-cols-5 grap-4'>
                                <LikeCard count='8' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}