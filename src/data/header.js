import { CiHeadphones } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";

export const headerMenus = [
    {
        title: "CHOIS",
        icon: <CiHeadphones/>,
        src:"/"
    },
    {
        title:"추천영상",
        icon: <CiHeart/>,
        src: "/today"
    },
    {
        title: "추천 유튜버",
        icon: <IoPeople/>,
        src: "/youtuber"
    },
    {
        title: "Eating",
        icon: <CiForkAndKnife/>,
        src: "/eating"
    },
    {
        title: "No Talking",
        icon: <CiMicrophoneOff/>,
        src: "/notalking"
    },
    {
        title: "Ear Cleaning",
        icon: <CiDark/>,
        src: "/earcleaning"
    },
    {
        title: "Make Up",
        icon: <CiFaceSmile/>,
        src: "/makeup"
    },
    {
        title: "Visual Trigger",
        icon: <CiRead/>,
        src: "/visualtrigger"
    },
];

export const searchKeyword = [
    {
        title:"Visual Trigger",
        src:"/search/visual trigger"
    },
    {
        title:"Ear Cleaning",
        src:"/search/ear cleaning asmr"
    },
    {
        title:"Make Up",
        src:"/search/make up asmr"
    },
    {
        title:"Eating",
        src:"/search/eating asmr"
    },
    {
        title:"No talking",
        src:"/search/no talking asmr"
    },
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/chois-boyoung",
        icon: <AiFillGithub />
    }
];