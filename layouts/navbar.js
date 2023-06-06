import React, {useState} from "react";
import {LeftC, RightC, User, DownOne} from '@icon-park/react';
import {Classes, Popover, Position} from "@blueprintjs/core";
export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleSetOpen = () => {
        setIsOpen(!isOpen);
    }
    
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
                <Popover position={Position.BOTTOM_LEFT} canEscapeKeyClose={false} minimal={true} className={'bg-[#191919]'}
                    focus={false} isOpen={isOpen} enforceFocus={false} popoverClassName={Classes.POPOVER_CONTENT_SIZING}
                    content={
                        <div className='p-0 grid w-[300px] bg-[#191919] text-white'>
                            <p>hgf</p>
                        </div>
                    } 
                >
                    <div className="m-0" onClick={handleSetOpen}>
                        <p className="p-2 mx-2 rounded-full font-bold bg-[#000000]"><User size='1.4em'/></p>
                    </div>
                </Popover>
            </div>
        </div>
    )
}