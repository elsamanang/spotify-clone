import Image from 'next/image'
import {Home, Search, DistributeHorizontally, Add, Like} from '@icon-park/react';
import Link from 'next/link'

export default function Sidebar() {
    return(
        <div className="grid grid-cols-1 w-[100%] text-[#b3b3b3] font-bold p-2">
            <div className={'grid my-1 bg-[#191919] rounded rounded-md'}>
                <Link href='/home'><div className='flex m-3'>
                    <Home size='2em' className='mx-3'/>
                    <h2 className='text-[1em]'>Acceuil</h2>
                </div></Link>
                <Link href='/recherche'>
                    <div className='flex m-3'>
                        <Search size='2em' className={'m-2'}/>
                        <h2 className='text-[1em]'>Recherche</h2>
                    </div>
                </Link>
            </div>
            <div className='grid my-1 bg-[#191919] rounded rounded-md'>
                <Link href='/playlist'><div className='flex m-3'>
                    <DistributeHorizontally size='2em' className='mx-3'/>
                    <h2 className='text-[1em]'>Bibliothèque</h2>
                    <DistributeHorizontally size='2em' className='mx-3'/>
                </div></Link>
                <div className='flex m-3 mt-10'>
                    <span className={'mx-1 p-1 w-[35px] rounded rounded-full bg-[#252525]'}>Playlists</span>
                    <span className={'mx-1 p-1 w-[35px] rounded rounded-full bg-[#252525]'}>Artists</span>
                </div>
            </div>
        </div>
        
    )
}