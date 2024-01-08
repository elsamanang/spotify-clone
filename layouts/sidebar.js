import Image from 'next/image'
import {
    Home,
    Search,
    DistributeHorizontally,
    Add,
    Like,
    Plus,
    User,
    Logout,
    FolderClose,
    Music
} from '@icon-park/react';
import Link from 'next/link'
import {Menu} from "@headlessui/react";

export default function Sidebar() {
    return(
        <div className="grid grid-cols-1 w-[100%] p-1">
            <div className={'grid my-1 bg-[#191919] text-[#b3b3b3] font-bold rounded-md'}>
                <Link href='/'><div className='flex m-3'>
                    <i className="fa-solid fa-house text-[24px] mx-2"></i>
                    <h2 className='mx-2 py-1 text-[1em]'>Acceuil</h2>
                </div></Link>
                <Link href='#'>
                    <div className='flex m-3'>
                        <i className="fa-solid fa-magnifying-glass text-[24px] mx-2"></i>
                        <h2 className='mx-2 py-1 text-[1em]'>Recherche</h2>
                    </div>
                </Link>
            </div>
            <div className='grid my-1 bg-[#191919] rounded-md'>
                <div className="flex justify-between">
                    <Link href='/playlist'><div className='flex m-3 text-[#b3b3b3] font-bold'>
                        <DistributeHorizontally size='2em' className='mx-2'/>
                        <h2 className='mx-2 my-1 text-[1em]'>Bibliothèque</h2>
                    </div></Link>
                    <Menu>
                        <Menu.Button>
                            <div className='m-2 font-bold'>
                                <Plus size='1.5em' fill="#b3b3b3" className='m-2'/>
                            </div>
                        </Menu.Button>
                        <Menu.Items className='absolute grid bg-[#252525] p-1 rounded-md' style={{marginTop: '45px', width: '230px', marginLeft: '21%', color: '#ffffff', fontWeight: '500'}}>
                            <div className='w-[95%] p-2 flex hover:bg-[#3a3a3a]'>
                                <Music className='font-bold' size={16} style={{marginTop: '3px', marginRight: '8px'}} />
                                <p className='text-[14px]'>Créer une playlist</p>
                            </div>
                            <div className='w-[95%] flex p-2 hover:bg-[#3a3a3a]'>
                                <FolderClose className='font-bold' size={16} style={{marginTop: '3px', marginRight: '8px'}} />
                                <p className='text-[14px]'>Créer un dossier de playlists</p>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
                <div className='flex m-3 mt-10 text-white text-[14px] font-medium'>
                    <span className={'p-2 mx-1 rounded-full bg-[#252525]'}>Playlists</span>
                    <span className={'p-2 mx-1 rounded-full bg-[#252525]'}>Artistes</span>
                </div>
            </div>
        </div>
        
    )
}