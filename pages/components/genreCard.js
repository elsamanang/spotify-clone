import Image from 'next/image'

export default function GenreCard(props) {
    return(
        <div className={'grid my-3 pt-3 pl-3 w-[200px] h-[200px] rounded '+ props.color}>
            <p className='my-2 text-[16px] font-semibold'>{props.titre}</p>
            <Image className='place-self-end w-[100px] h-[100px] rounded-r-[50px] rotate-45' src={props.img} alt="" height={100} width={100} />
        </div>
    )
}