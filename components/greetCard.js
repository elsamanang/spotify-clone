import Image from 'next/image'
import {PlayOne} from "@icon-park/react";

export default function GreetCard(props) {

    return(
        <div className='group flex justify-between m-3 w-[300px] h-[100px] rounded bg-[#353535]/50 hover:bg-[#3a3a3a]'>
            <div className={'flex'}>
                <Image className='w-[100px] h-[100px] rounded' src={props.img} alt="" height={80} width={80} />
                <p className='mx-4 mt-[30px] text-[16px] font-semibold'>{props.titre}</p>
            </div>
            <span className='relative invisible group-hover:visible shadow-lg mt-[28px] mr-[15px] pt-[10px] w-[50px] h-[50px] hover:w-[52px] hover:h-[52px] bg-[#1ed760] text-center rounded-full'>
                <PlayOne theme={'filled'} fill={'#000000'} size={28} />
            </span>
        </div>
    )
}