import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../layouts/navbar'
import Sidebar from '../layouts/sidebar'
import PlayCard from '../components/playCard'
import GreetCard from "../components/greetCard";
import {dailylist, playlist, preferlist} from "../data/music";
import ArtitsteCard from "../components/artisteCard";
import Footer from "../layouts/footer";

export default function Playlist({ setNavigColor }) {

    useEffect(() => {
        window.onscroll = function () { 
            document.body.style.scrollbarColor = '#000000 yellow';
            if (document.body.scrollTop >= 3 || document.documentElement.scrollTop >= 3) {
                setNavigColor("bg-[#000000]");
            } 
            else {
                setNavigColor("");
            }
        };
    }, [])

    return(
       <div className="text-white pt-2 pb-2 px-6 h-full">
           <p>Ici page</p>
       </div>
    )
}