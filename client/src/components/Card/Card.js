import React from 'react';
import Tilt from 'react-tilt';

const Card = ({id, name}) => {
    return (
        <div className='pl5 pt4 mt2 dib' >
        <Tilt className="Tilt br2 " options={{ max : 25 }} style={{ height: 300, width: 225 }} >
        {/* <div className="bg-gray dib br3 pa3 ma2 grow"> */}
        {/* <img classname="Tilt-inner pa3" src="https://orion-uploads.openroadmedia.com/md_cd3e01731957-lord-of-the-flies.jpg" alt="logo" class ="center"style={{ height: 300, width: 225 }}/> */}
        <img alt='books' src={`img/${name}`} classname="Tilt-inner pa3" class ="center"style={{ height: 300, width: 225 }} />
        {/* </div> */}
        </Tilt>
        
        <text class="black times">{name}</text>
        <text class="black times">{id}</text>
        </div>
    );
}

export default Card;