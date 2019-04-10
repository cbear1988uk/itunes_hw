import React from 'react';

const SongSelector = (props) => {
  console.log(props.songs);

  if(props.songs.length === 0) return null;

  const options = props.songs.map((song) => {
    return <h4>{song['im:artist'].label}</h4>
  })

  function handleChange(event){
    props.handSelected(event.target.value);
  }

  return(
    <div>
      <ol>
        {options}
      </ol>
    </div>
  );

}

export default SongSelector;
