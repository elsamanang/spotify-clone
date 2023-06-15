import Image from 'next/image'
import {PlayOne} from "@icon-park/react";

export default function RadioCard(props) {

    return(
        <div className='group grid m-2 p-3 w-[210px] h-[280px] rounded bg-[#252525] hover:bg-[#3a3a3a]'>
            <Image className='w-[190px] h-[180px] rounded' src={props.img} alt="" height={170} width={180} />
            <p className='my-2 text-[16px] font-semibold'>{props.titre}</p>
            <p className='text-[14px] text-[#b3b3b3]'>{props.detail}</p>
            <span className='relative invisible group-hover:visible shadow-lg mt-[-130px] ml-[130px] pt-[10px] w-[50px] h-[50px] hover:w-[52px] hover:h-[52px] bg-[#1ed760] text-center rounded-full'>
                <PlayOne theme={'filled'} fill={'#000000'} size={28} />
            </span>
        </div>
    )
}