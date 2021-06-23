import React, { createRef, useState } from "react";
import TaggedRect from "./TaggedRect";
import TagInput from "./TagInput";


function Box() {
  const tagBox = createRef(null);
    const [currentCoords, setCurrentCoords] = useState({ x: 0, y: 0});
  const [tags, setTags] = useState([]);

//   const [isTagging, setIsTagging] = useState(false);

  const getClickCoords = (ref, clickEvent) => {
    const box = tagBox.current;
    const rect = box.getBoundingClientRect();
    let x = clickEvent.clientX - rect.left;
    let y = clickEvent.clientY - rect.top;
    return { x, y };
  };

  const getTaggedName = (name) => {
    setTags([...tags, {name, coords: currentCoords}]);
    //reset input to bottom
    const input =  document.querySelector('#tagInput');
    input.style.left = `${0}px`
    input.style.top = `${420}px`
  };

  const handleClick = (e) => {
    // if (isTagging) return;
    const coords = getClickCoords(tagBox, e);
    const input =  document.querySelector('#tagInput');
    input.style.left = `${coords.x}px`
    input.style.top = `${coords.y}px`
    setCurrentCoords(coords)
    
  };

  return (
    <div className="tag_container">
      <div
        className="tag_box"
        id="tag-container"
        ref={tagBox}
        onClick={handleClick}
      ></div>
      {tags.map((tag, idx) => <TaggedRect key={idx} name={tag.name} x={tag.coords.x} y={tag.coords.y} />)}
      <TagInput getTaggedName={getTaggedName} />
    </div>
  );
}

export default Box;
