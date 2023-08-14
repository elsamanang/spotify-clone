import '../styles/globals.css'
import '@icon-park/react/styles/index.css'
import Head from "next/head";
import Script from "next/script";
import {useEffect, useState} from "react";
import {artists, dailylist, musics, playlist, preferlist} from "../data/music";
import Sidebar from "../layouts/sidebar";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/footer";

function MyApp({ Component, pageProps }) {

    const [sounds, setSounds] = useState(musics);
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
    const [isRepeat, setIsRepeat] = useState(false);
    const [navigColor, setNavigColor] = useState("");
    const [singer, setSinger] = useState(artists);
    const [greatPlay, setGreatPlay] = useState([
        playlist[0], preferlist[1], dailylist[2], sounds[3]
    ])
    const handleNextPlay = () => {
        if (audio) {
            if(isRepeat) {
                handleOnPlay(audio);
                return
            }

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
        music = audio;
        if(music == null) {
            setIsPlay(false);
            return
        }
        
        setIsPlay(true);
        music.play();
        music.volume = 0.5;
        handleVolumeProgress(50);
        music.addEventListener('timeupdate', handleProgress);
        music.addEventListener('ended', handleEnd);
    }

    const handleRepeat = () => {
        setIsRepeat(!isRepeat);
    }

    const handleEnd = () => {
        handleNextPlay();
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
    
    return (
      <div className="contents">
          <Head>
              <title>Spotify-clone | Home</title>
              <meta name="description" content="My clone of spotify web app" />
              <link rel="icon" href="/icon-green-64.png" />
              <link rel="stylesheet" href="/css/all.css"/>
              <link rel="stylesheet" href="/css/all.min.css"/>
              <link rel="stylesheet" href="/css/solid.css"/>
              <link rel="stylesheet" href="/css/solid.min.css"/>
              <link rel="stylesheet" href="/css/brands.min.css"/>
              <link rel="stylesheet" href="/css/brands.css"/>
              <link rel="stylesheet" href="/css/regular.css"/>
              <link rel="stylesheet" href="/css/regular.min.css"/>
              <link rel="stylesheet" href="/css/fontawesome.min.css"/>
              <link rel="stylesheet" href="/css/fontawesome.css"/>
              <Script src="/js/all.js"></Script>
              <Script src="/js/all.min.js"></Script>
              <Script src="/js/solid.js"></Script>
              <Script src="/js/solid.min.js"></Script>
              <Script src="/js/regular.js"></Script>
              <Script src="/js/regular.min.js"></Script>
              <Script src="/js/brands.js"></Script>
              <Script src="/js/brands.min.js"></Script>
              <Script src="/js/fontawesome.min.js"></Script>
              <Script src="/js/fontawesome.js"></Script>
          </Head>
          <div className='grid w-[100%] bg-[#000000] h-[100vh]'>
              <div className='flex w-[100%] h-[90vh]'>
                  <div className="w-[26%] h-screen p-0">
                      <Sidebar />
                  </div>
                  <div className="w-[74%] h-[90vh] p-1">
                      <div id='scrolling' className='grid mt-1 p-2 max-h-[88vh] bg-[#191919] rounded-md overflow-y-scroll'>
                          <div className="w-[72%] h-[50px] my-[-8px] fixed">
                              <Navbar color={navigColor} sub={
                                  <button className="p-1 text-[13px] w-[130px] rounded-full bg-black border border-1 font-bold border-[#878787]">
                                      <i className="fa-solid fa-circle-arrow-down"></i><span> Installer l'appli </span>
                                  </button>
                              } />
                          </div>
                          <Component {...pageProps}
                                     singer={singer} greatPlay={greatPlay} handleCurrentPlayList={handleCurrentPlayList} 
                                     handleFindPlayListCover={handleFindPlayListCover} setNavigColor={setNavigColor}
                                     currentPlaylist={currentPlayList} timer={timer}
                          />
                      </div>
                  </div>
              </div>
              <div className='bg-white h-[10vh]'>
                  {currentMusic != null?
                      <Footer img={currentMusic.cover} handleOnPause={handleOnPause} handleOnPlay={handleOnPlay} isRepeat={isRepeat}
                              audio={audio} titre={currentMusic.title} artist={currentMusic.artist} playTime={playTime}
                              handlePlayUp={handlePlayUp} handlePlayMove={handlePlayMove} setColorPlay={setColorPlay}
                              gradientPlay={gradientPlay} colorPlay={colorPlay} durationTime={durationTime} handleVolumeUp={handleVolumeUp}
                              handleVolumeMove={handleVolumeMove} setColor={setColor} gradient={gradient} color={color} isPlay={isPlay}
                              setPlayLength={setPlayLength} setSoundLength={setSoundLength} setPlayX={setPlayX} setVolumeX={setVolumeX}
                              handleNextPlay={handleNextPlay} handlePreviewPlay={handlePreviewPlay} handleRepeat={handleRepeat}
                      />
                      :
                      <Footer img="" handleOnPause={handleOnPause} handleOnPlay={handleOnPlay} titre='-----:-----' audio={audio}
                              handlePlayUp={handlePlayUp} handlePlayMove={handlePlayMove} setColorPlay={setColorPlay} isRepeat={isRepeat}
                              gradientPlay={gradientPlay} colorPlay={colorPlay} durationTime={durationTime} handleVolumeUp={handleVolumeUp}
                              handleVolumeMove={handleVolumeMove} setColor={setColor} gradient={gradient} color={color} isPlay={isPlay}
                              artist='---:---' setPlayLength={setPlayLength} setSoundLength={setSoundLength} setPlayX={setPlayX} setVolumeX={setVolumeX}
                              handleNextPlay={handleNextPlay} handlePreviewPlay={handlePreviewPlay} handleRepeat={handleRepeat}
                      />
                  }
              </div>
          </div>
      </div>
    )
}

export default MyApp
