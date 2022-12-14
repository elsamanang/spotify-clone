import Image from 'next/image'

export default function ArtitsteCard(props) {

    return(
        <div className='grid m-3 p-3 w-[200px] h-[280px] rounded bg-[#252525]'>
            <Image className='w-[180px] h-[180px] rounded-full' src={props.img} alt="" height={170} width={180} />
            <p className='my-2 text-[16px] font-semibold'>{props.titre}</p>
            <p className='text-[14px] text-[#b3b3b3]'>{props.detail}</p>
        </div>
    )
}