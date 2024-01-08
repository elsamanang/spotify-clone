import styles from '../styles/Home.module.css'
import Navbar from '../layouts/navbar'
import Sidebar from '../layouts/sidebar'
import { useEffect, useState } from 'react'
import PlayCard from '../components/playCard'
import ArtitsteCard from '../components/artisteCard'
import GreetCard from '../components/greetCard'
import {playlist, preferlist, dailylist} from "../data/music";

export default function Index({
        greatPlay, singer, setNavigColor, handleFindPlayListCover, handleCurrentPlayList
    }) {
    useEffect(() => {
        document.getElementById("scrolling").addEventListener("scroll", event => {
            if(document.getElementById("scrolling").scrollTop >3 ) {
                setNavigColor("bg-[#191919]");
            }
            else {
                setNavigColor("");
            }
        });
    }, []);
    
    return(
        
        <div className="text-white pt-2 pb-2 px-6 h-full">
                            <div className='grid my-5 mb-8'>
                                <h3 className='font-bold mx-2 my-2 text-[28px]'>{'Bonjour'}</h3>
                                <div className='grid grid-cols-3'>
                                    {greatPlay.map(item =>
                                        <GreetCard key={item.id} img={item.musics? handleFindPlayListCover(item.musics[0]): item.cover} 
                                                   titre={item.title} activePlay={handleCurrentPlayList} list={item}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className='grid my-3'>
                                <h3 className='font-bold mx-2 my-2 text-[24px]'>{'Conçu pour elsa manang'}</h3>
                                <div className='grid grid-cols-4'>
                                    {dailylist.slice(0,4).map( item =>
                                        <PlayCard key={item.id} img={handleFindPlayListCover(item.musics[0])} titre={item.title} detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                    )}
                                </div>
                            </div>
                            <div className='grid my-3'>
                                <div className='mx-2 my-2 flex justify-between'>
                                    <p className='font-bold text-[24px]'>{'Vos Mix Préférés'}</p>
                                    <p className='font-bold text-[12px] text-[#b3b3b3] mt-[12px]'>{'TOUT AFFICHER'}</p>
                                </div>
                                <div className='grid grid-cols-4'>
                                    {preferlist.slice(0,4).map( item =>
                                        <PlayCard key={item.id} img={handleFindPlayListCover(item.musics[0])} titre={item.title} detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                    )}
                                </div>
                            </div>
                            <div className='grid my-3'>
                                <div className='mx-2 my-2 flex justify-between'>
                                    <p className='font-bold text-[24px]'>{'Spotify playlists'}</p>
                                    <p className='font-bold text-[12px] text-[#b3b3b3] mt-[12px]'>{'TOUT AFFICHER'}</p>
                                </div>
                                <div className='grid grid-cols-4'>
                                    {playlist.slice(0,4).map( item =>
                                        <PlayCard key={item.id} img={handleFindPlayListCover(item.musics[0])} titre={item.title} detail='Maluma, Sia, Dua lipa, Osuna, plus'/>
                                    )}
                                </div>
                            </div>
                            <div className='grid my-3'>
                                <div className='mx-2 my-2 flex justify-between'>
                                    <p className='font-bold text-[24px]'>{'Vos artistes préferés'}</p>
                                </div>
                                <div className='grid grid-cols-4'>
                                    {singer.slice(0,4).map(item => 
                                        <ArtitsteCard key={item.id} img={item.img} titre={item.name} detail='Artiste'/>
                                    )}
                                </div>
                            </div>
                        </div>
    )
}