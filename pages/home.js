import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './layouts/navbar'
import Sidebar from './layouts/sidebar'
import { useEffect, useState } from 'react'
import PlayCard from './components/playCard';
import ArtitsteCard from './components/artisteCard'
import RadioCard from './components/radioCard'
import GreetCard from './components/greetCard'


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
                <div className="w-[22%] h-screen p-0 bg-[#000000] text-[#b3b3b3] font-bold">
                    <Sidebar />
                </div>
                <div className="w-full p-2 bg-[#191919]">
                    <div className="w-[100%] h-[50px]">
                        <Navbar color={navigColor} />
                    </div>
                    <div className="text-white pt-2 pb-2 px-6">
                        <div className='grid my-3 mb-8'>
                            <h3 className='font-bold mx-2 my-2 text-[28px]'>{'Bonjour'}</h3>
                            <div className='flex'>
                                <GreetCard img='/artiste/a1.jpg' titre='Maluma' />
                                <GreetCard img='/artiste/a2.jpg' titre='Sia'/>
                            </div>
                        </div>
                        <div className='grid my-3'>
                            <h3 className='font-bold mx-2 my-2 text-[24px]'>{'Conçu pour elsa manang'}</h3>
                            <div className='flex'>
                                <PlayCard img='/covers/c1.jpg' titre='Daily Mix' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Daily Mix' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Daily Mix' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                            </div>
                        </div>
                        <div className='grid my-3'>
                            <div className='mx-2 my-2 flex justify-between'>
                                <p className='font-bold text-[24px]'>{'Les meilleurs auto-compositeurs'}</p>
                                <p className='font-bold text-[12px] text-[#b3b3b3] mt-[12px]'>{'TOUT AFFICHER'}</p>
                            </div>
                            <div className='flex'>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                            </div>
                        </div>
                        <div className='grid my-3'>
                            <div className='mx-2 my-2 flex justify-between'>
                                <p className='font-bold text-[24px]'>{'Écoutés récemment'}</p>
                            </div>
                            <div className='flex'>
                                <ArtitsteCard img='/covers/c2.jpg' titre='Sia' detail='Artiste'/>
                                <PlayCard img='/covers/c1.jpg' titre='Mixe Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <ArtitsteCard img='/covers/c2.jpg' titre='Sia' detail='Artiste'/>
                            </div>
                        </div>
                        <div className='grid my-3'>
                            <div className='mx-2 my-2 flex justify-between'>
                                <p className='font-bold text-[24px]'>{'Les classiques'}</p>
                                <p className='font-bold text-[12px] text-[#b3b3b3] mt-[12px]'>{'TOUT AFFICHER'}</p>
                            </div>
                            <div className='flex'>
                                <PlayCard img='/covers/c1.jpg' titre='All Out 80s' detail='The bigest song of 80s'/>
                                <PlayCard img='/covers/c1.jpg' titre='All Out 90s' detail='The bigest song of 90s'/>
                                <PlayCard img='/covers/c1.jpg' titre='All Out 70s' detail='The bigest song of 70s'/>
                                <PlayCard img='/covers/c1.jpg' titre='All Out 2000s' detail='The bigest song of 2000s'/>
                            </div>
                        </div>
                        <div className='grid my-3'>
                            <div className='mx-2 my-2 flex justify-between'>
                                <p className='font-bold text-[24px]'>{'Radios populaires'}</p>
                                <p className='font-bold text-[12px] text-[#b3b3b3] mt-[12px]'>{'TOUT AFFICHER'}</p>
                            </div>
                            <div className='flex'>
                                <RadioCard img='/covers/c3.jpg' titre='Maluma' detail='Par Spotify' />
                                <RadioCard img='/covers/c3.jpg' titre='Maluma' detail='Par Spotify' />
                                <RadioCard img='/covers/c3.jpg' titre='Maluma' detail='Par Spotify' />
                                <RadioCard img='/covers/c3.jpg' titre='Maluma' detail='Par Spotify' />
                            </div>
                        </div>
                        <div className='grid my-3'>
                            <div className='mx-2 my-2 flex justify-between'>
                                <p className='font-bold text-[24px]'>{'Radios recommandées'}</p>
                            </div>
                            <div className='flex'>
                                <RadioCard img='/covers/c3.jpg' titre='Maluma' detail='Par Spotify' />
                                <RadioCard img='/covers/c3.jpg' titre='Maluma' detail='Par Spotify' />
                                <RadioCard img='/covers/c3.jpg' titre='Maluma' detail='Par Spotify' />
                            </div>
                        </div>
                        <div className='grid my-3'>
                            <div className='mx-2 my-2 flex justify-between'>
                                <p className='font-bold text-[24px]'>{'Spotify playlists'}</p>
                                <p className='font-bold text-[12px] text-[#b3b3b3] mt-[12px]'>{'TOUT AFFICHER'}</p>
                            </div>
                            <div className='flex'>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                <PlayCard img='/covers/c1.jpg' titre='Writing by Maluma' detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                            </div>
                        </div>
                        <div className='grid my-3'>
                            <div className='mx-2 my-2 flex justify-between'>
                                <p className='font-bold text-[24px]'>{'Vos artistes préferés'}</p>
                            </div>
                            <div className='flex'>
                                <ArtitsteCard img='/covers/c2.jpg' titre='Sia' detail='Artiste'/>
                                <ArtitsteCard img='/covers/c2.jpg' titre='Sia' detail='Artiste'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}