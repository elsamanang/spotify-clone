import Image from "next/image";
import {
    ClickToFold, DataServer, Like,
    ListTop, Microphone, PlayCycle, Shuffle,
    Sound, VolumeNotice
} from "@icon-park/react";

export default function Footer(props) {

    return(
        <div className="flex h-[10vh] w-full text-white bg-[#000000]">
            <div className='flex my-1 mx-4 w-[450px]'>
                <Image className='w-[50px] h-[50px] rounded' src={props.img} alt="" height={50} width={50} />
                <div className='mx-4'>
                    <p className='text-[14px] font-semibold'>{props.titre}</p>
                    <span style={{fontSize: '12px', color: "#b3b3b3"}}>{props.artist}</span>
                </div>
                <Like size={16} className="mx-2" style={{marginTop: '6%', color: "#b3b3b3"}} />
                <DataServer size={16} className="mx-2 mt-8" style={{marginTop: '6%', color: "#b3b3b3"}} />
            </div>
            <div className="mx-1 p-1 w-full grid">
                <div className="flex justify-center">
                    <Shuffle size={16} className="mx-2 mt-2 text-[#b3b3b3]" />
                    <Like size={16} className="mx-2 mt-2" />
                    <span className="text-center mx-4 w-[28px] h-[28px] bg-[#ffffff] rounded-full" style={{paddingTop: '5px'}}>
                        <Like theme='filled' fill='black' size={16} className="mx-2" />
                    </span>
                    <Like size={16} className="mx-2 mt-2" />
                    <PlayCycle size={16} className="mx-2 mt-2 text-[#b3b3b3]" />
                </div>
                <div className="flex justify-center" style={{fontSize: '12px', color: "#b3b3b3"}}>
                    <span className='mx-1'>1:05</span>
                    <div className="m-2 bg-[#252525] rounded-full" style={{height: '4px', width: '58%'}}>
                    </div>
                    <span className='mx-1'>3:05</span>
                </div>
            </div>
            <div className="flex mx-2 w-[480px] text-[#b3b3b3]">
                <Microphone size={16} className="mx-2" style={{marginTop: '6%'}} />
                <ListTop size={16} className="mx-2 mt-8" style={{marginTop: '6%'}} />
                <Sound size={16} className="mx-2" style={{marginTop: '6%'}} />
                <div className="flex mx-2 group w-[100px]" style={{marginTop: '6%'}} >
                    <VolumeNotice size={16} />
                    <div className="mx-2 bg-[#252525] rounded-full" style={{height: '4px', width: '150px', marginTop: '5%'}}>
                    </div>
                </div>
                <ClickToFold size={16} className="mx-2" style={{marginTop: '6%'}} />
            </div>
        </div>
    )
}