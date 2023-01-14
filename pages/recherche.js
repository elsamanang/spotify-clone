import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './layouts/navbar'
import Sidebar from './layouts/sidebar'
import { useEffect, useState } from 'react'
import {Search, Close} from '@icon-park/react'
import GenreCard from './components/genreCard'
import PlayCard from './components/playCard';
import ArtitsteCard from './components/artisteCard'
import RadioCard from './components/radioCard'
import GreetCard from './components/greetCard'

export default function Recherche() {

    const [navigColor, setNavigColor] = useState("");
    const elm = <p>a</p>

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
                        <Navbar color={navigColor} element={
                            <div className='mx-5 mt-[3px] flex p-2 text-[#000000] rounded-full bg-white w-[350px]'>
                                <Search size='1.8em' className='mx-2'/>
                                <input className='w-[300px] border border-none placeholder-red focus:outline-none' placeholder='Que souhaitez-vous ecouter ?'/>
                                <Close size='1.8em' className='mx-2'/>
                            </div>
                        } />
                    </div>
                    <div className="text-white pt-5 pb-2 px-6">
                        <div className='grid my-3'>
                            <div className='mx-2 my-2 flex justify-between'>
                                <p className='font-bold text-[24px]'>{'Parcourir tout'}</p>
                            </div>
                            <div className='grid grid-cols-5 mx-1'>
                                <GenreCard img='/covers/c2.jpg' titre='Hip-Hop' color='bg-[#313a83]'/>
                                <GenreCard img='/covers/c1.jpg' titre='Pop' color='bg-[#8f454d]'/>
                                <GenreCard img='/covers/c2.jpg' titre='Latino' color='bg-[#458F87]'/>
                                <GenreCard img='/covers/c1.jpg' titre='Afro' color='bg-[#9d67a4]'/>
                                <GenreCard img='/covers/c2.jpg' titre='Rap' color='bg-[#d9321d]'/>
                                <GenreCard img='/covers/c1.jpg' titre='Rock' color='bg-[#eba953]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}