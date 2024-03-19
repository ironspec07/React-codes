// import React from "react";
// import memesData from "../memesData";

// export default function Meme() {
//     const [memeImage , setMemeImage] = React.useState("")

//     function getMemeImage() {
//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         setMemeImage(memesArray[randomNumber].url)
//     }

//     return (
//         <main>
//             <div className="form">
//                 <label htmlFor="top-text"> Top Text
//                     <input
//                         id="top-text"
//                         type="text" 
//                         className="form--input" 
//                         placeholder="Shut up"
//                     />
//                 </label>
//                 <label htmlFor="buttom-text"> Bottom Text
//                     <input
//                         id="buttom-text"
//                         type="text" 
//                         className="form--input" 
//                         placeholder="and take my money"
//                     />
//                 </label>
//                 <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
//                 <img src={memeImage}  />
//             </div>
//         </main>
//     )
// }