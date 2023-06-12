import Image from "next/image";
import {
    ClickToFold, DataServer, Like,
    ListTop, Microphone, PlayCycle, Shuffle,
    Sound, VolumeNotice
} from "@icon-park/react";
import {useEffect, useState} from "react";

export default function Footer(props) {
    
    const [soundX, setSoundX] = useState(0);
    const [volumeX, setVolumeX] = useState(0);
    const [isVolumeChange, setIsVolumeChange] = useState(false);
    const [gradient, setGradient] = useState(0);
    const [color, setColor] = useState("#ffffff");
    const [playX, setPlayX] = useState(0);
    const [isPlayChange, setIsPlayChange] = useState(false);
    const [gradientPlay, setGradientPlay] = useState(0);
    const [colorPlay, setColorPlay] = useState("#ffffff");

    useEffect(() => {
        let volume = document.getElementById('volume');
        let play = document.getElementById('play');
        setSoundX(volume.getBoundingClientRect().left);
        setPlayX(play.getBoundingClientRect().left);
        let element = document.getElementById('myVolume');
        setVolumeX(element.getBoundingClientRect().left);
        //handleTrackStyle(volume.getBoundingClientRect().left-element.getBoundingClientRect().left-6);
    }, [])
    
    const handleVolumeMove = () => {
        setColor("#1ed760");
        if(isVolumeChange) {
            let element = document.getElementById('myVolume');
            let e = window.event;
            let diff = parseInt(e.clientX) - parseInt(volumeX);
            if (diff > -1 && diff < 62) {
                element.style.position = "relative"
                element.style.left = diff+"px";
                handleTrackStyle(diff);
            }
        }
    }

    const handlePlayMove = () => {
        setColorPlay("#1ed760");
        if(isPlayChange) {
            let element = document.getElementById('myPlay');
            let e = window.event;
            let diff = parseInt(e.clientX) - parseInt(playX);
            if (diff > -1 && diff < 318) {
                element.style.position = "relative"
                element.style.left = diff+"px";
                handleTrackPlayStyle(diff);
            }
        }
    }
    
    const handleTrackStyle = (button) => {
        let pourcent = parseInt((button*100)/61);
        setGradient(pourcent);
    }

    const handleTrackPlayStyle = (button) => {
        let pourcent = parseInt((button*100)/318);
        setGradientPlay(pourcent);
    }
    
    const handleVolumeUp = (value) => {
        setIsVolumeChange(value);
        //console.log(value)
    }

    const handlePlayUp = (value) => {
        setIsPlayChange(value);
    }
    
    return(
        <div className="flex h-[10vh] w-full text-white bg-[#000000]">
            <div className='flex my-1 mx-4 w-[450px]'>
                <Image className='w-[50px] h-[50px] rounded' src={props.img} alt="" height={50} width={50} />
                <div className='mx-4'>
                    <p className='text-[14px] font-semibold'>{props.titre}</p>
                    <span style={{fontSize: '12px', color: "#b3b3b3"}}>{props.artist}</span>
                </div>
                <Like size={16} className="mx-2" style={{marginTop: '6%', color: "#b3b3b3"}} />
                <DataServer size={16} className="mx-2 mt-8" style={{marginTop: '6%', color: "#b3b3b3"}} />
            </div>
            <div className="mx-1 p-1 w-full grid">
                <div className="flex justify-center">
                    <Shuffle size={16} className="mx-2 mt-2 text-[#b3b3b3]" />
                    <Like size={16} className="mx-2 mt-2" />
                    <span className="text-center mx-4 w-[28px] h-[28px] bg-[#ffffff] rounded-full" style={{paddingTop: '5px'}}>
                        <Like theme='filled' fill='black' size={16} className="mx-2" />
                    </span>
                    <Like size={16} className="mx-2 mt-2" />
                    <PlayCycle size={16} className="mx-2 mt-2 text-[#b3b3b3]" />
                </div>
                <div className="flex justify-center" style={{fontSize: '12px', color: "#b3b3b3"}}>
                    <span className='mx-1'>1:05</span>
                    <div id="play" 
                         onMouseDown={() => handlePlayUp(true)} onMouseMove={handlePlayMove} onMouseLeave={() =>setColorPlay("#ffffff")} onMouseUp={() => handlePlayUp(false)}
                         className="m-2 group bg-[#252525] rounded-full" style={{height: '4px', width: '58%', backgroundImage: 'linear-gradient(to right, '+ colorPlay +' '+ gradientPlay + '%, #252525 '+ gradientPlay + '%)'}}>
                        <div id='myPlay' className="p-1 invisible group-hover:visible bg-[#ffffff] rounded-full" style={{marginTop: "-1%", height: '12px', width: '12px'}}></div>
                    </div>
                    <span className='mx-1'>3:05</span>
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
                         className="group p-0 mx-2 rounded-full" style={{height: '4px', width: '150px', marginTop: '5%', backgroundImage: 'linear-gradient(to right, '+ color +' '+ gradient + '%, #252525 '+ gradient + '%)'}}>
                        <div id='myVolume' className="p-1 invisible group-hover:visible bg-[#ffffff] rounded-full" style={{marginTop: "-5%", height: '12px', width: '12px'}}></div>
                    </div>
                </div>
                <ClickToFold size={16} className="mx-2" style={{marginTop: '6%'}} />
            </div>
        </div>
    )
}