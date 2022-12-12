import {LeftC, RightC, User, DownOne} from '@icon-park/react';
export default function Navbar() {
    return(
        <div className="grid grid-cols-3 text-white pt-2 pb-2 px-6 fixed">
            <div className="col-span-2 flex">
                <LeftC size='2.5em' className="mx-1" fill={'#000000'} theme="filled"/>
                <RightC size='2.5em' className="mx-1" fill={'#000000'} theme="filled" />
            </div>
            <div className="flex justify-end">
                <div className="mx-4">
                    <button className="p-1 w-[100px] rounded-full border border-1 font-bold border-[#878787]">
                        S'abonner
                    </button>
                </div>
                <div className="mx-4">
                    <button className="p-0 w-[160px] rounded-full border border-2 border-[#000000] font-bold bg-[#000000] flex">
                        <p className="rounded-full w-[30px] bg-[#878787] p-1 mr-1"><User size='1em'/></p>
                        <p className="m-1">elsa manang</p>
                        <p className="m-1">
                            <DownOne size="1.2em" className="mt-[3px]" fill={'#ffffff'} theme="filled"/>
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}