import React, { useState } from 'react'

function TagInput({ getTaggedName }) {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        getTaggedName(name);
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div className="tag_input" id="tagInput">
            <form onSubmit={handleSubmit}>
                <input placeholder="Name..."  onChange={handleChange} />
                <button type="submit">Tag</button>
            </form>
        </div>
    )
}

export default TagInput
