import React from 'react'

function CricbuzzComponent({imgSrc,headingText,para,anchorLink,anchorText}) {
  return (
    <div
    style={{
        border: "2px solid blue",
        marginBottom: "20px",
        maxWidth:"800px",
        padding: "16px",
        display: "flex",
        flexDirection:"column",
        alignItems:"center"
    }}
    >
        <img src = {imgSrc} alt="newsImage" width="100%"/>
        <h1> {headingText} </h1>
        <p> {para} </p>
        <a href= "{anchorLink}">{anchorText}</a>        
    </div>
  )
}

export default CricbuzzComponent
