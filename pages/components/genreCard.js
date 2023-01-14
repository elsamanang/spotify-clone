import Image from 'next/image'

export default function GenreCard(props) {
    return(
        <div className={'grid my-3 pt-3 pl-3 w-[190px] h-[190px] overflow-hidden rounded '+ props.color}>
            <p className='my-2 text-[24px] mx-1 font-bold'>{props.titre}</p>
            <Image className='place-self-end w-[120px] mx-[-25px] h-[100px] rotate-45' src={props.img} alt="" height={100} width={100} />
        </div>
    )
}