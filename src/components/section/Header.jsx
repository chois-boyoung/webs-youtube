import React from 'react'

import { CiHeadphones } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className="header__logo">
          <a href="#">
            <em aria-hidden='true'></em>
            <span>CHOIS<br />youtube</span>
          </a>
        </h1>
        <nav className="header__menu">
          <ul class='menu'>
            <li className='active'>
              <a href='home'><CiHeadphones />CHOIS</a>
            </li>
            <li>
              <a href='today'><CiHeart />추천영상</a>
            </li>
            <li>
              <a href='youtuber'><IoPeople />추천 유튜버</a>
            </li>
            <li>
              <a href='eating'><CiForkAndKnife />Eating</a>
            </li>
            <li>
              <a href='notalking'><CiMicrophoneOff />No Talking</a>
            </li>

            <li>
              <a href='earcleaning'><CiDark />Ear Cleaning</a>
            </li>

            <li>
              <a href='makeup'><CiFaceSmile />Make Up</a>
            </li>

            <li>
              <a href='visualtrigger'><CiRead />Visual Trigger</a>
            </li>
          </ul>

          <ul className='keyword'>
            <li>
              <a href='/search/trigger'>Trigger</a>
            </li>
            <li>
              <a href='/search/comfortable'>Comforable</a>
            </li>
            <li>
              <a href='/search/beauty'>Beauty</a>
            </li>
          </ul>
        </nav>
        <div className='header__sns'>
              <ul>
                <li>
                  <a href='https://github.com/chois-boyoung' rel='noopener noreferrer' target='_blank'>
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
        </div>
    </header>
  )
}

export default Header