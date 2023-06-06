import Image from 'next/image'

export default function PlayCard(props) {

    return(
        <div className='grid m-3 p-3 w-[190px] h-[280px] rounded bg-[#252525]'>
            <Image className='w-[170px] h-[180px] rounded' src={props.img} alt="" height={170} width={170}/>
            <p className='my-2 text-[16px] font-semibold'>{props.titre}</p>
            <p className='text-[14px] text-[#b3b3b3]'>{props.detail}</p>
        </div>

    )
}