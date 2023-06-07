import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Facebook, Apple, Google} from '@icon-park/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify-clone</title>
        <meta name="description" content="My clone of spotify web app" />
        <link rel="icon" href="/icon-black-64.png" />
      </Head>
      
      <div className="content p-2">
        <div className="flex justify-center p-3 my-2">
            <Image src={'/spotify-icon.png'} width={180} height={55} />
        </div>
        <hr />
        <div className='flex justify-center pt-8'>
            <h3 className='font-bold m-[5px]'>To continue, log in to Spotify.</h3>
        </div>
        <div className='grid grid-cols-1'>
          <div className='flex justify-center'>
              <button className='bg-[#3B5998] w-[450px] p-3 m-[5px] text-white font-bold rounded-full border border-1 border-[#3B5998]'>
                <Facebook size='0.9em' fill='#3B5998' className='w-[1em] bg-[#ffffff] mx-2 pl-[2px] text-thin' theme="filled" />
                CONTINUE WITH FACEBOOK
              </button>
          </div>
          <div className='flex justify-center'>
              <button className='bg-[#000000] w-[450px] p-3 m-[5px] text-white font-bold rounded-full border border-1 border-[#000000]'>
                <Apple size='1.2em' fill='#ffffff' className='mx-2 pl-[2px] text-thin' theme="filled" />
                CONTINUE WITH APPLE
              </button>
          </div>
          <div className='flex justify-center'>
              <button className='bg-[#ffffff] w-[450px] p-3 m-[5px] text-[#878787] font-bold rounded-full border border-1 border-[#878787]'>
                <Google size='1.1em' fill='#fd1717' className='mx-2 pl-[2px] text-thin' theme="filled" />
                CONTINUE WITH GOOGLE
              </button>
          </div>
          <div className='grid grid-cols-1'>
              <div className='flex justify-center'>
                <hr className='w-[450px] m-[20px] border border-1'/>
              </div>
              <div className='place-self-center mx-[-275px]'>
                <h3 className='absolute my-[-45px] mx-[-30px] bg-[#ffffff] p-[20px] font-bold rounded-full'>OR</h3>
              </div>
          </div>
          <div className='flex justify-center'>
          <div className='w-[450px] grid grid-cols-1 p-0'>
            <div className='place-self-start m-[5px]'>
              <h3 className='font-bold'>Email address or username</h3>
              <input className='w-[450px] border border-1 border-[#878787] my-1 p-3' placeholder='Email address or username'/>
            </div>
            <div className='place-self-start m-[5px]'>
              <h3 className='font-bold'>Password</h3>
              <input className='w-[450px] border border-1 border-[#878787] my-1 p-3' placeholder='Password'/>
            </div>
            <div className='place-self-start m-[5px]'>
              <h3 className='font-medium'>Forgot your password?</h3>
            </div>
            <div className='grid grid-cols-2'>
              <div className='place-self-start flex m-[5px]'>
                <input type="checkbox" className='w-[16px] border-1 border-[#878787]'/>
                <h3 className='font-medium mx-2'>Remember me</h3>
              </div>
              <div className='place-self-end'>
                <a href="/home"><button className='bg-[#1ed760] w-[120px] relative top-0 right-0 p-3 text-black font-bold rounded-full border border-1 border-[#1ed760]'>
                  LOG IN
                </button></a>
              </div>
              <hr className='w-[450px] my-[20px] border border-1'/>
            </div>
          </div>
          </div>
          <div className='flex justify-center'>
            <h2 className='font-bold m-[5px] text-lg'>Don't have an account?</h2>
          </div>
          <div className='flex justify-center'>
              <button className='bg-[#ffffff] w-[450px] p-3 m-[5px] text-[#878787] font-bold rounded-full border border-1 border-[#878787]'>
                SIGN UP FOR SPOTIFY
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}
