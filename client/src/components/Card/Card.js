import React from 'react';
import Tilt from 'react-tilt';
import card from './fivepointsome.jpg'

const Card = () => {
    return (
        <div className='pl5 pt4 mt2 ' >
        <Tilt className="Tilt br2 " options={{ max : 25 }} style={{ height: 300, width: 225 }} >
        {/* <div className="bg-gray dib br3 pa3 ma2 grow"> */}
        <img classname="Tilt-inner pa3" src="https://orion-uploads.openroadmedia.com/md_cd3e01731957-lord-of-the-flies.jpg" alt="logo" class ="center"style={{ height: 300, width: 225 }}/>
        {/* </div> */}
        </Tilt>
        <text class="black times">Five Point Someone</text>
        <text class="black times">20 Euros</text>
        </div>
    );
}

export default Card;