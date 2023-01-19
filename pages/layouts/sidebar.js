import Image from 'next/image'
import {Home, Search, DistributeHorizontally, Add, Like} from '@icon-park/react';
import Link from 'next/link'

export default function Sidebar() {
    return(
        <div className="fixed w-[18%] h-full bg-[#000000] p-5">
            <div className="mx-3">
                <Image src={'/spotify-icon-white.png'} alt="" width={130} height={6} />
            </div>
            <div className='place-self-start'>
                <Link href='/home'><div className='flex my-4'>
                    <Home size='2em' className='mx-3'/>
                    <h2 className='text-[1em]'>Acceuil</h2>
                </div></Link>
                <Link href='/recherche'><div className='flex my-4'>
                    <Search size='2em' className='mx-3'/>
                    <h2 className='text-[1em]'>Recherche</h2>
                </div></Link>
                <Link href='/playlist'><div className='flex my-4'>
                    <DistributeHorizontally size='2em' className='mx-3'/>
                    <h2 className='text-[1em]'>Bibliothèque</h2>
                </div></Link>
                <div className='flex my-4 mt-10'>
                    <Add size='2em' fill={'#b3b3b3'} style={{color: 'black'}} className='mx-3' theme={'filled'} />
                    <h2 className='text-[1em]'>Créer une playlist</h2>
                </div>
                <div className='flex my-4'>
                    <Like size='2em' className='mx-3'/>
                    <h2 className='text-[1em]'>Titre likés</h2>
                </div>
            </div>
        </div>
        
    )
}