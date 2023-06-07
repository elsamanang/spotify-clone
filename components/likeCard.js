export default function LikeCard(props) {

    return(
        <div className='col-span-2 grid m-3 p-4 w-[400px] h-[280px] rounded bg-gradient-to-r from-blue-500 to-indigo-500'>
            <p className='mx-1 mt-16 text-[18px] font-semibold'>{props.detail}</p>
            <div className='self-end'>
                <p className='mx-1 text-[30px] font-bold'>Titres likés</p>
                <p className='mx-1 mt-2 text-[16px] font-semibold'>{props.count+ ' titres likés'}</p>
            </div>
        </div>

    )
}