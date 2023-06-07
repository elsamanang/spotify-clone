import React, {useState} from "react";
import {LeftC, RightC, User, DownOne, Logout} from '@icon-park/react';
import {Menu, Popover} from '@headlessui/react'
export default function Navbar(props) {
    
    return(
        <div id='mynav' className={'flex justify-between text-white pt-2 pb-2 px-6 ' + props.color}>
            <div className="col-span-4 flex">
                <LeftC size='2.5em' className="mx-1" fill={'#000000'} theme="filled"/>
                <RightC size='2.5em' className="mx-1" fill={'#000000'} theme="filled" />
                {props.element}
            </div>
            <div className="ml-40 flex justify-end">
                <div className="my-2 mx-1">
                    {props.sub}
                </div>
                <Menu>
                    <Menu.Button>
                        <div className="m-0">
                            <p className="p-2 mx-2 rounded-full font-bold bg-[#000000]"><User size='1.2em'/></p>
                        </div>
                    </Menu.Button>
                    <Menu.Items className='absolute grid bg-[#252525] text-[#c2c2c2] text-[14px] font-semibold p-1 rounded rounded-md' style={{marginTop: '55px', width: '205px', marginLeft: '-15px'}}>
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