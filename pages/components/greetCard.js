import Image from 'next/image'

export default function GreetCard(props) {

    return(
        <div className='flex m-3 w-[300px] h-[80px] rounded bg-[#353535]'>
            <Image className='w-[80px] h-[80px] rounded' src={props.img} alt="" height={80} width={80} />
            <p className='mx-4 mt-[30px] text-[16px] font-semibold'>{props.titre}</p>
        </div>
    )
}