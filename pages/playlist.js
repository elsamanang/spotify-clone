import React, { useEffect, useState } from 'react'
import Image from "next/image";
import {Logout, PlayOne} from "@icon-park/react";
import {Menu} from '@headlessui/react'

export default function Playlist({ setNavigColor, currentPlayList }) {

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
    //console.log(currentPlayList)
    return(
       <div className="text-white pt-2 pb-2 px-6 h-full bg-gradient-to-b from-indigo-500 from-30% to-bg-transparent to-70%">
           <div className='flex mt-12 my-5 mb-8 p-2'>
               <div className='m-1 mt-4 grid grid-cols-2 shadow-lg'>
                   <Image className={'w-[120px] h-[120px]'} src={'/covers/cover6.jfif'} width={115} height={70} alt={'img'} />
                   <Image className={'w-[120px] h-[120px]'} src={'/covers/cover3.jpg'} width={115} height={70} alt={'img'} />
                   <Image className={'w-[120px] h-[120px]'} src={'/covers/cover2.jfif'} width={115} height={70} alt={'img'} />
                   <Image className={'w-[120px] h-[120px]'} src={'/covers/cover4.jpg'} width={115} height={70} alt={'img'} />
               </div>
               <div className='mt-12 mx-4 grid text-white'>
                    <p>Playlist</p>
               </div>
           </div>
           <div className='my-5 p-2 flex'>
               <span className='shadow-lg m-1 pt-[11px] pl-[2px] w-[56px] h-[56px] hover:w-[58px] hover:h-[58px] bg-[#1ed760] text-center rounded-full'>
                    <PlayOne theme={'filled'} fill={'#000000'} size={32} />
               </span>
               <Menu>
                   <Menu.Button>
                       <div className="m-0">
                           <p className="p-2 mx-4 rounded-full font-bold"><i
                               className="fa-regular fa-user text-[1.2em] mx-1"></i></p>
                       </div>
                   </Menu.Button>
                   <Menu.Items className='absolute grid bg-[#252525] text-[#c2c2c2] text-[14px] font-semibold p-1 rounded-md' style={{marginTop: '55px', width: '205px', marginLeft: '-15px'}}>
                       <div className='mx-1 w-[95%] p-2 flex justify-between hover:bg-[#3a3a3a]'>
                           <p>Compte</p>
                           <Logout className='font-bold' size={20} style={{marginTop: '3px'}} />
                       </div>
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]'>
                           <p>Profil</p>
                       </div>
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]'>
                           <p>Préférence</p>
                       </div>
                       <div className='mx-1 w-[95%] p-2 hover:bg-[#3a3a3a]' style={{borderTop: 'solid 1px #3a3a3a'}}>
                           <p>Déconnexion</p>
                       </div>
                   </Menu.Items>
               </Menu>
           </div>
       </div>
    )
}