import React from 'react';

const Devicon = ({ name, size = "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl", className = "" }) => {
    return (
        <>
            <i className={`devicon-${name} ${size} ${className}`}></i>
        </>
    )
}

export default Devicon;
