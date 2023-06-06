import {LeftC, RightC, User, DownOne} from '@icon-park/react';
export default function Navbar(props) {
    return(
        <div id='mynav' className={'grid grid-cols-5 mt-[-5px] text-white pt-2 pb-2 px-6' + props.color}>
            <div className="col-span-4 flex">
                <LeftC size='2.5em' className="mx-1" fill={'#000000'} theme="filled"/>
                <RightC size='2.5em' className="mx-1" fill={'#000000'} theme="filled" />
                {props.element}
            </div>
            <div className="flex justify-end">
                <div className="ml-4">
                    {props.sub}
                </div>
                <div className="ml-8">
                    <button className="p-0 w-[160px] rounded-full border border-2 border-[#000000] font-bold bg-[#000000] flex">
                        <p className="rounded-full w-[30px] bg-[#878787] p-1 mr-1"><User size='1em'/></p>
                        <p className="m-1 mb-0">elsa manang</p>
                        <p className="m-1 mb-0">
                            <DownOne size="1.2em" className="mt-[3px]" fill={'#ffffff'} theme="filled"/>
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}