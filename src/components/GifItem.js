import React from 'react';
import GifPlayer from "react-gif-player";
import test from "./icons/test.jpg";
import "../styles/gifplayer.scss";
const GifItem = ({gif, onGifSelect}) => {
    return (
      <div className="gif-item">
             <GifPlayer gif={gif.images.downsized.url} still={test} />
        {/* <img src={gif.images.downsized.url} /> */}
      </div>
    )
  };

export default GifItem;