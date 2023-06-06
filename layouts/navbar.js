import {LeftC, RightC, User, DownOne} from '@icon-park/react';
export default function Navbar(props) {
    return(
        <div id='mynav' className={'flex justify-between text-white pt-2 pb-2 px-6 ' + props.color}>
            <div className="col-span-4 flex">
                <LeftC size='2.5em' className="mx-1" fill={'#000000'} theme="filled"/>
                <RightC size='2.5em' className="mx-1" fill={'#000000'} theme="filled" />
                {props.element}
            </div>
            <div className="ml-40 flex justify-end">
                <div className="m-2">
                    {props.sub}
                </div>
                <div className="m-2">
                    <p className="p-2 mx-2 rounded-full font-bold bg-[#000000]"><User size='1.4em'/></p>
                </div>
            </div>
        </div>
    )
}