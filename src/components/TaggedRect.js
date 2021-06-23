import React, {useState} from 'react'

function TaggedRect({ name, x, y }) {
    const [show, setShow] = useState(false);

    return (
        <div className="tagged_rect" style={{left:x, top: y}} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            {show ? name : ""}
        </div>
    )
}

export default TaggedRect
