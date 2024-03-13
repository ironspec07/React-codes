import React from "react";
import memesData from "../memesData";

export default function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="form">
                <label htmlFor="top-text"> Top Text
                    <input
                        id="top-text"
                        type="text" 
                        className="form--input" 
                        placeholder="Shut up"
                    />
                </label>
                <label htmlFor="buttom-text"> Bottom Text
                    <input
                        id="buttom-text"
                        type="text" 
                        className="form--input" 
                        placeholder="and take my money"
                    />
                </label>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
        </main>
    )
}