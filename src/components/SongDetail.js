import React from 'react';

const SongDetail = (props) => {
  if(!props.song) return null;
  return (
    <div>
      <h3>{props.song.feed.author.entry}</h3>
    </div>
  )
}

export default SongDetail;
