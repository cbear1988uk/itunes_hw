import React from 'react';

const SongSelector = (props) => {

  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song.author}</option>
  })

  function handleChange(event){
    props.handSelected(event.target.value);
  }

  return (
    <select id="song-selector" onChange={handleChange}>
    <option disabled value="default">Choose an album</option>
    {options}
    </select>
  )




}


export default SongSelector;
