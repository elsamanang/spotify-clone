import Image from 'next/image'
import {PlayOne} from "@icon-park/react";
import Link from "next/link";

export default function ArtitsteCard(props) {

    return(
        <div className='group grid m-3 p-3 w-[210px] h-[280px] rounded bg-[#252525] hover:bg-[#3a3a3a]'>
            <Link href="/playlist"><Image className='w-[190px] h-[180px] rounded-full' src={props.img} alt="" height={200} width={200} /></Link>
            <Link href="/playlist"><p className='my-2 text-[16px] font-semibold'>{props.titre}</p></Link>
            <Link href="/playlist"><p className='text-[14px] text-[#b3b3b3]'>{props.detail}</p></Link>
            <span className='relative invisible group-hover:visible shadow-lg mt-[-125px] ml-[120px] pt-[10px] w-[50px] h-[50px] hover:w-[52px] hover:h-[52px] bg-[#1ed760] text-center rounded-full'>
                <PlayOne theme={'filled'} fill={'#000000'} size={28} />
            </span>
        </div>
    )
}