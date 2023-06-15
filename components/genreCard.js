import Image from 'next/image'
import {PlayOne} from "@icon-park/react";

export default function GenreCard(props) {
    return(
        <div className={'grid my-3 pt-3 pl-3 w-[190px] h-[190px] overflow-hidden rounded '+ props.color}>
            <p className='my-2 text-[24px] mx-1 font-bold'>{props.titre}</p>
            <Image className='place-self-end w-[120px] mx-[-25px] h-[100px] rotate-45' src={props.img} alt="" height={100} width={100} />
            <span className='relative shadow-lg mt-[-112px] ml-[92px] pt-[10px] w-[50px] h-[50px] bg-[#1ed760] text-center rounded-full'>
                <PlayOne theme={'filled'} fill={'#000000'} size={28} />
            </span>
        </div>
    )
}