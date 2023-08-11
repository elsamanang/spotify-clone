import React, { useEffect, useState } from 'react'
import Image from "next/image";
import {Logout, PlayOne} from "@icon-park/react";
import {Menu} from '@headlessui/react'
import {playlist, musics, artists} from "../data/music";

export default function Playlist({currentPlayList }) {
    currentPlayList = playlist[1];
    const [covers, setCovers] = useState([]);
        
    useEffect(() => {
        const covers = [];
        let i = 0;
        currentPlayList.musics.map(sound => {
            if(i > 3) {
                return;
            }
            const findSound = musics.find(item => item.id === sound);
            covers.push(findSound.cover);
            i ++;
            
        })
        
        setCovers(covers);
    }, [])
    //console.log(currentPlayList)
    return(
       <div className="text-white pt-2 pb-2 px-6 h-full bg-gradient-to-b from-indigo-500 from-10% to-bg-transparent to-90%">
           <div className='flex mt-12 my-5 mb-8 p-2'>
               <div className='m-1 mt-4 grid grid-cols-2 shadow-lg'>
                   {covers.map(cover =>
                        <Image key={cover} className={'w-[120px] h-[120px]'} src={cover} width={115} height={70} alt={'img'} />
                   )}
               </div>
               <div className='mt-12 mx-4 gird text-white'>
                   <p className='text-[14px]'>Playlist</p>
                   <p className='font-bold text-[64px] mt-2'>{currentPlayList.title}</p>
                   <p className='mt-12 text-[15px]'>
                       <span className='font-medium'>Elsa.M .{currentPlayList.musics.length} items</span><span>, environ 2h</span>
                   </p>
               </div>
           </div>
           <div className='my-5 p-2 flex'>
               <span className='shadow-lg m-1 pt-[11px] pl-[2px] w-[56px] h-[56px] hover:w-[58px] hover:h-[58px] bg-[#1ed760] text-center rounded-full'>
                    <PlayOne theme={'filled'} fill={'#000000'} size={32} />
               </span>
               <Menu>
                   <Menu.Button>
                       <div className="m-0">
                           <p className="p-2 mx-4 rounded-full text-[1.8em] text-[#b3b3b3] hover:text-[2em] hover:text-[#ffffff]" title={"Plus d'option pour "+currentPlayList.title}>
                               <i className="fa-solid fa-ellipsis mx-1"></i>
                           </p>
                       </div>
                   </Menu.Button>
                   <Menu.Items className='absolute grid bg-[#252525] text-[#c2c2c2] text-[14px] font-semibold p-1 rounded-md' style={{marginTop: '55px', width: '205px', marginLeft: '-15px'}}>
                       <div className='mx-1 w-[95%] p-2 flex justify-between hover:bg-[#3a3a3a]'>
                           <p>Ajouter a la fil d'attente</p>
                       </div>
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]'>
                           <p>Ajouter au profil</p>
                       </div>
                       <hr />
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]'>
                           <p>Modifier les information</p>
                       </div>
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]'>
                           <p>Creer une playlist similaire</p>
                       </div>
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]'>
                           <p>Supprimer</p>
                       </div>
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]' style={{borderTop: 'solid 1px #3a3a3a'}}>
                           <p>Exclure de votre de gout</p>
                       </div>
                       <hr />
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]' style={{borderTop: 'solid 1px #3a3a3a'}}>
                           <p>Partager</p>
                       </div>
                       <hr />
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]' style={{borderTop: 'solid 1px #3a3a3a'}}>
                           <p>A propos</p>
                       </div>
                   </Menu.Items>
               </Menu>
           </div>
           <div className='my-5 p-2'>
               <div className='flex p-1 text-[#b3b3b3] text-[14px]'>
                   <p className='w-[34%]'><span className='mx-4'>#</span>Titre</p>
                   <p className='w-[25%]'>Album</p>
                   <p className='w-[25%]'>Date d'ajout</p>
                   <p className='ml-[8%]'>
                       <i className="fa-regular fa-clock justify-self-end"></i>
                   </p>
               </div>
               <div className='bg-[#b3b3b3] w-[100%] h-[1px] m-1'></div>
               <div className='flex group p-1 mx-1 text-[#b3b3b3] text-[14px] rounded hover:bg-[#3a3a3a]'>
                   <div className='flex py-1 w-[34%] group-hover:text-[#ffffff]'>
                       <p className='mx-4'>
                           <span className='visible group-hover:invisible'>1</span>
                           <span><i className="fa-solid invisible group-hover:visible fa-play"></i></span>
                       </p>
                       <Image className='w-[44px] h-[44px] shadow-full' src={'/covers/cover3.jpg'} alt="" height={44} width={44} />
                       <div className='mx-4 text-[16px]'>
                           <p className='text-[#ffffff] font-medium'>titre</p>
                           <p>Artiste</p>
                       </div>
                   </div>
                   <p className='w-[25%] group-hover:text-[#ffffff] mt-4'>Album</p>
                   <p className='w-[25%] mt-4'>16 oct, 2023</p>
                   <div className='flex mt-4'>
                       <i className="fa-regular fa-heart mx-4 invisible group-hover:visible"></i>
                       <p className='mx-4'>4:00</p>
                       <i className="fa-solid fa-ellipsis text-[#ffffff] mx-2 invisible group-hover:visible"></i>
                   </div>
               </div>
           </div>
       </div>
    )
}