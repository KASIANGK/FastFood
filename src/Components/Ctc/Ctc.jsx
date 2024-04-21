import React from 'react'
import VideoB from '../Video/Video'
import './Ctc.css'
import Navbar from '../Navbar/Navbar'


const Ctc = () => {
  return (
    <div className='ctc-og'>
      <Navbar></Navbar>
      <div className='ctc'>
          <VideoB></VideoB>
          <div className='ctc-data'>
            <div>
              <img src='/design/fb_square.png'></img>
            </div>
            <div>
              <img src='/design/ig.svg.png'></img>
            </div>
            <div>
              <img src='/design/mc.png'></img>
            </div>
            <div>
              <img src='/design/del.png'></img>
            </div>
            <div>
              <img src='/design/ubereats.png'></img>
            </div>
            <div>
              <img src='/design/ta.png'></img>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Ctc