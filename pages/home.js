
import styles from '../styles/Home.module.css'
import Navbar from '../layouts/navbar'
import Sidebar from '../layouts/sidebar'
import { useEffect, useState } from 'react'
import PlayCard from '../components/playCard'
import ArtitsteCard from '../components/artisteCard'
import RadioCard from '../components/radioCard'
import GreetCard from '../components/greetCard'
import {Foot} from "@icon-park/react";
import Footer from "../layouts/footer";
import {artists, musics, playlist, preferlist, dailylist} from "../data/music";

export default function Home() {

    const [navigColor, setNavigColor] = useState("");
    const [sounds, setSounds] = useState(musics);
    const [singer, setSinger] = useState(artists);
    const [greatPlay, setGreatPlay] = useState([
        playlist[0], preferlist[1], dailylist[2], sounds[3]
    ])
    const [currentPlayList, setCurrentPlayList] = useState(null);
    const [currentMusic, setCurrentMusic] = useState(null);

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
    
    const handleFindPlayListCover = (id) => {
        let item = sounds.find(elm => elm.id === id);
        return item.cover;
    }
    
    const handleCurrentPlayList = (item) => {
        if (item.musics) {
            setCurrentPlayList(item);
            let music = sounds.find(elm => elm.id === item.musics[0]);
            setCurrentMusic(music);
        }
    }

    return(
        
        <div className='grid w-[100%] bg-[#000000] h-[100vh]'>
            <div className='flex w-[100%] h-[90vh]'>
                <div className="w-[26%] h-screen p-0">
                    <Sidebar />
                </div>
                <div className="w-[74%] h-[90vh] p-1">
                    <div id='scrolling' className='grid mt-1 p-2 max-h-[88vh] bg-[#191919] rounded-md overflow-y-scroll'>
                        <div className="w-[72%] h-[50px] my-[-8px] fixed">
                            <Navbar color={navigColor} sub={
                                <button className="p-1 text-[13px] w-[130px] rounded-full border border-1 font-bold border-[#878787]">
                                    <i className="fa-solid fa-circle-arrow-down"></i><span> Installer l'appli </span>
                                </button>
                            } />
                        </div>
                        <div className="text-white pt-2 pb-2 px-6 h-full">
                            <div className='grid my-5 mb-8'>
                                <h3 className='font-bold mx-2 my-2 text-[28px]'>{'Bonjour'}</h3>
                                <div className='grid grid-cols-3'>
                                    {greatPlay.map(item =>
                                        <GreetCard img={item.musics? handleFindPlayListCover(item.musics[0]): item.cover} 
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
                    </div>
                </div>
            </div>
            <div className='bg-white h-[10vh]'>
                {currentMusic != null?
                    <Footer img={currentMusic.cover} audio={currentMusic.src} titre='Sweet but psycho' artist='Ava Max' />
                :
                    <Footer img="" titre='-----:-----' audio={null} artist='---:---' />
                }
            </div>
        </div>
    )
}