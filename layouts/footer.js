import Image from "next/image";
import {
    ClickToFold, DataServer, Like,
    ListTop, Microphone, PlayCycle, Shuffle,
    Sound, VolumeNotice
} from "@icon-park/react";
import {useEffect, useState} from "react";

export default function Footer({img, titre, artist, isPlay, handleOnPlay, handleOnPause, playTime, handlePreviewPlay, 
                                   handlePlayUp, colorPlay, handlePlayMove, setColorPlay,durationTime,
                                   gradientPlay, handleVolumeUp, handleVolumeMove, gradient, setColor, color,
                                   setPlayLength, setSoundLength, setPlayX, setVolumeX, audio, handleNextPlay
}) {
    
    useEffect(() => {
        let volume = document.getElementById('volume');
        let play = document.getElementById('play');
        setPlayLength(parseInt(play.offsetWidth));
        setSoundLength(parseInt(volume.offsetWidth));
        setPlayX(play.getBoundingClientRect().left);
        let element = document.getElementById('myVolume');
        setVolumeX(element.getBoundingClientRect().left);   
            
        }
        , [])
    
    return(
        <div className="flex h-[10vh] w-full text-white bg-[#000000]">
            <div className='flex my-1 mx-4 w-[450px]'>
                {img === ""? 
                    <span className='w-[50px] h-[50px] bg-[#b3b3b3]/50 rounded'></span>
                :
                    <Image className='w-[50px] h-[50px] rounded' src={img} alt="" height={50} width={50} />
                }
                <div className='mx-4'>
                    <p className='text-[14px] font-semibold'>{titre}</p>
                    <span style={{fontSize: '12px', color: "#b3b3b3"}}>{artist}</span>
                </div>
                <Like size={16} className="mx-2" style={{marginTop: '6%', color: "#b3b3b3"}} />
                <DataServer size={16} className="mx-2 mt-8" style={{marginTop: '6%', color: "#b3b3b3"}} />
            </div>
            <div className="mx-1 p-1 w-full grid">
                <div className="flex justify-center">
                    <Shuffle size={16} className="mx-4 mt-2 text-[#b3b3b3]" />
                    <i onClick={handlePreviewPlay} className="fa-solid fa-backward-step text-[16px] mt-2"></i>
                    {!isPlay?
                        <i id={'playButton'} onClick={() => handleOnPlay(audio)} className="fa-solid fa-circle-play text-[30px] mx-4 p-1"></i>
                    :
                        <i onClick={handleOnPause} className="fa-solid fa-circle-pause text-[30px] mx-4 p-1"></i>
                    }
                    <i onClick={handleNextPlay} className="fa-solid fa-forward-step text-[16px] mt-2"></i>
                    <i className="fa-solid fa-repeat text-[16px] mx-4 mt-2 text-[#b3b3b3]"></i>
                </div>
                <div className="flex justify-center" style={{fontSize: '12px', color: "#b3b3b3"}}>
                    <span className='mx-1'>{playTime}</span>
                    <div id="play" 
                         onMouseDown={() => handlePlayUp(true)} onMouseMove={handlePlayMove} onMouseLeave={() =>setColorPlay("#ffffff")} onMouseUp={() => handlePlayUp(false)}
                         className="m-2 group bg-[#252525] rounded-full" style={{height: '4px', width: '58%', backgroundImage: 'linear-gradient(to right, '+ colorPlay +' '+ gradientPlay + '%, #252525 '+ gradientPlay + '%)'}}>
                        <div id='myPlay' className="p-1 invisible group-hover:visible bg-[#ffffff] rounded-full" style={{marginTop: "-1%", height: '12px', width: '12px'}}></div>
                    </div>
                    <span className='mx-1'>{durationTime}</span>
                </div>
            </div>
            <div className="flex mx-2 w-[480px] text-[#b3b3b3]">
                <Microphone size={16} className="mx-2" style={{marginTop: '6%'}} />
                <ListTop size={16} className="mx-2 mt-8" style={{marginTop: '6%'}} />
                <Sound size={16} className="mx-2" style={{marginTop: '6%'}} />
                <div className="flex mx-2 w-[100px]" style={{marginTop: '6%'}} >
                    <VolumeNotice size={16} />
                    <div id="volume" 
                         onMouseDown={() => handleVolumeUp(true)} onMouseMove={handleVolumeMove} onMouseLeave={() =>setColor("#ffffff")} onMouseUp={() => handleVolumeUp(false)}
                         className="group p-0 mx-2 rounded-full self-start" style={{height: '4px', width: '150px', marginTop: '3%', backgroundImage: 'linear-gradient(to right, '+ color +' '+ gradient + '%, #252525 '+ gradient + '%)'}}>
                        <div id='myVolume' className="p-1 invisible group-hover:visible bg-[#ffffff] rounded-full" style={{marginTop: "-3%", height: '12px', width: '12px'}}></div>
                    </div>
                </div>
                <ClickToFold size={16} className="mx-2" style={{marginTop: '6%'}} />
            </div>
        </div>
    )
}