import React from 'react';

const Devicon = ({ name, size = "text-3xl", className = "" }) => {
    return (
        <>
            <i className={`devicon-${name} ${size} ${className}`}></i>
        </>
    )
}

export default Devicon;
