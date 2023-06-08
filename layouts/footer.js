import Image from "next/image";
import {DataServer, Like, PlayOne} from "@icon-park/react";

export default function Footer(props) {

    return(
        <div className="flex h-[10vh] w-full text-white w-full bg-[#000000]">
            <div className='flex my-1 mx-4 w-[350px]'>
                <Image className='w-[50px] h-[50px] rounded' src={props.img} alt="" height={50} width={50} />
                <div className='grid mx-4'>
                    <p className='text-[14px] font-semibold'>{props.titre}</p>
                    <p className='text-[11px]'>{props.artist}</p>
                </div>
                <Like size={16} className="mx-2" style={{marginTop: '4%'}} />
                <DataServer size={16} className="mx-2 mt-8" style={{marginTop: '4%'}} />
            </div>
            <div className="">
                <p>div2</p>
            </div>
            <div>
                <p>div3</p>
            </div>
        </div>
    )
}