
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
    const [audio, setAudio] = useState(null);
    const [soundLength, setSoundLength] = useState(0);
    const [playLength, setPlayLength] = useState(0);
    const [volumeX, setVolumeX] = useState(0);
    const [isVolumeChange, setIsVolumeChange] = useState(false);
    const [gradient, setGradient] = useState(0);
    const [color, setColor] = useState("#ffffff");
    const [playX, setPlayX] = useState(0);
    const [isPlayChange, setIsPlayChange] = useState(false);
    const [gradientPlay, setGradientPlay] = useState(0);
    const [colorPlay, setColorPlay] = useState("#ffffff");
    const [isPlay, setIsPlay] = useState(false);
    const [playTime, setPlayTime] = useState("-:--");
    const [durationTime, setDurationTime] = useState("-:--");

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
            if(audio == null) {
                setAudio(new Audio(music.src));
            }
            else {
                audio.src = music.src;
            }
            handleOnPlay(audio);
        }
    }
    
    const handleNextPlay = () => {
        if (audio) {
            let position = currentPlayList.musics.indexOf(currentMusic.id);

            if ((currentPlayList.musics.length - 1) > position) {
                let music = sounds.find(elm => elm.id === currentPlayList.musics[position+1]);
                setCurrentMusic(music);
                audio.src = music.src;
                handleOnPlay(audio);
            }
        }
    }

    const handlePreviewPlay = () => {
        if (audio) {
            let position = currentPlayList.musics.indexOf(currentMusic.id);
            let pourcent = parseInt((audio.currentTime * 100) / audio.duration);
            if (pourcent > 5) {
                if (position > 0) {
                    let music = sounds.find(elm => elm.id === currentPlayList.musics[position-1]);
                    setCurrentMusic(music);
                    audio.src = music.src;
                    handleOnPlay(audio);
                }
            }
            else {
                audio.src = currentMusic.src;
                handleOnPlay(audio);
            }
        }
    }

    const handleOnPlay = (music) => {
        if(music == null) {
            setIsPlay(false);
            return
        }
        
        setIsPlay(true);
        music.play();
        music.volume = 0.5;
        handleVolumeProgress(50);
        music.addEventListener('timeupdate', handleProgress);
    }
    const handleOnPause = () => {
        setIsPlay(false)
        audio.pause();
    }

    const handleVolumeMove = () => {
        setColor("#1ed760");
        if(audio == null) {
            setIsVolumeChange(false);
            return
        }
        if(isVolumeChange) {
            let element = document.getElementById('myVolume');
            let e = window.event;
            let diff = parseInt(e.clientX) - parseInt(volumeX);
            if (diff > -1 && diff < soundLength) {
                element.style.position = "relative"
                element.style.left = diff+"px";
                handleTrackStyle(diff);
            }
        }
    }

    const handlePlayMove = () => {
        setColorPlay("#1ed760");
        if(audio == null) {
            setIsPlay(false);
            setIsPlayChange(false)
            return
        }
        if(isPlayChange) {
            let element = document.getElementById('myPlay');
            let e = window.event;
            let diff = parseInt(e.clientX) - parseInt(playX);
            if (diff > -1 && diff < playLength) {
                element.style.position = "relative"
                element.style.left = diff+"px";
                handleTrackPlayStyle(diff);
                audio.currentTime = parseInt((diff/playLength) * audio.duration);
                setPlayTime(timer(audio.currentTime));
            }
        }
    }

    const handleTrackStyle = (button) => {
        let pourcent = parseInt((button*100)/soundLength);
        setGradient(pourcent);
        audio.volume = pourcent/100;
    }

    const handleTrackPlayStyle = (button) => {
        let pourcent = parseInt((button*100)/playLength);
        setGradientPlay(pourcent);
    }

    const handleVolumeUp = (value) => {
        setIsVolumeChange(value);
    }

    const handlePlayUp = (value) => {
        setIsPlayChange(value);
    }

    const handleProgress = () => {
        setDurationTime(timer(parseInt(audio.duration)))
        let currentDuration = parseInt((audio.currentTime/audio.duration) *100);
        let currentPosition = (currentDuration/100) * playLength;
        setGradientPlay(currentDuration);
        setPlayTime(timer(audio.currentTime));
        let element = document.getElementById('myPlay');
        element.style.position = "relative"
        element.style.left = currentPosition+"px";
    }

    const handleVolumeProgress = (vol) => {
        let element = document.getElementById('myVolume');
        let diff = parseInt((soundLength*vol)/100);
        element.style.position = "relative"
        element.style.left = diff+"px";
        setGradient(vol);
    }

    const timer = (duration) => {
        let minute = ~~(duration/60);
        let seconde = parseInt(duration % 60);
        let response = seconde > 10 ?`${minute}:${seconde}`: `${minute}:0${seconde}`;
        return(response);
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
                    </div>
                </div>
            </div>
            <div className='bg-white h-[10vh]'>
                {currentMusic != null?
                    <Footer img={currentMusic.cover} handleOnPause={handleOnPause} handleOnPlay={handleOnPlay} 
                            audio={audio} titre={currentMusic.title} artist={currentMusic.artist} playTime={playTime}
                            handlePlayUp={handlePlayUp} handlePlayMove={handlePlayMove} setColorPlay={setColorPlay}
                            gradientPlay={gradientPlay} colorPlay={colorPlay} durationTime={durationTime} handleVolumeUp={handleVolumeUp}
                            handleVolumeMove={handleVolumeMove} setColor={setColor} gradient={gradient} color={color} isPlay={isPlay}
                            setPlayLength={setPlayLength} setSoundLength={setSoundLength} setPlayX={setPlayX} setVolumeX={setVolumeX}
                            handleNextPlay={handleNextPlay} handlePreviewPlay={handlePreviewPlay}
                    />
                :
                    <Footer img="" handleOnPause={handleOnPause} handleOnPlay={handleOnPlay} titre='-----:-----' audio={null}
                            handlePlayUp={handlePlayUp} handlePlayMove={handlePlayMove} setColorPlay={setColorPlay}
                            gradientPlay={gradientPlay} colorPlay={colorPlay} durationTime={durationTime} handleVolumeUp={handleVolumeUp}
                            handleVolumeMove={handleVolumeMove} setColor={setColor} gradient={gradient} color={color} isPlay={isPlay}
                            artist='---:---' setPlayLength={setPlayLength} setSoundLength={setSoundLength} setPlayX={setPlayX} setVolumeX={setVolumeX}
                            handleNextPlay={handleNextPlay} handlePreviewPlay={handlePreviewPlay}
                    />
                }
            </div>
        </div>
    )
}