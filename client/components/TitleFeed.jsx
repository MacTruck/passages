import React from 'react';
import StoryTitle from "./StoryTitle.jsx";

const titleFeed = (props) => {
  return (
    <div>
      {props.titles.map(item => (
        <StoryTitle titleClickHandler={props.titleClickHandler} item={item} />          
      ))}                      
    </div>
  )
}

export default titleFeed;

