import React, { useEffect, useRef, useState } from 'react'


export function Meme() {
     
    const [meme, setmeme] = useState({
       topText: "",
       bottomText: "",
       randomImg: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setallMeme] = useState([])

   //const [currentTopText, setCurrentTopText] = useState('');
    //const [currentBottomText, setCurrentBottomText] = useState('');

    
     //const topInputRef = useRef(null);
     //const bottomInputRef = useRef(null);


    useEffect( ()=> {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setallMeme(data.data.memes))
    
     }, [])

     console.log(allMeme)

     function getMemeImage (){
      
        const randomNumber = Math.floor(Math.random()*allMeme.length)
        const url = allMeme[randomNumber].url

        //setCurrentTopText(meme.topText);
        //setCurrentBottomText(meme.bottomText);

        setmeme(prevmeme => {
          return{
            ...prevmeme,
            randomImg:url
           // topText: "",
            //bottomText: ""
          }

})
        
      //topInputRef.current.value = "";
      //bottomInputRef.current.value = "";
          
           }
           
       
    
     const handlechange = (event) => {
             const {name, value}  = event.target
             setmeme(prevmeme => ({
              ...prevmeme,
              [name]: value

          }))
     }




    return (
      <>
        <main>
          <div className="form">
            <input 
            placeholder="Top text" 
            type="text" 
            className="form-input" 
            name='topText'
            value={meme.topText}
            //ref={topInputRef}
            onChange={handlechange}
            />
            
            <input
              placeholder="Bottom-text"
              type="text"
              className="form-input"
              name='bottomText'
              value={meme.bottomText}
               //ref={bottomInputRef}
              onChange={handlechange}
            />
            <button className="form-btn" onClick={getMemeImage}>Get a new Meme Image 📸</button>
          </div>
          <div className="meme">
            <img src= {meme.randomImg}  className='meme-img'/>
            <h2 className="meme-text  top">{meme.topText} </h2>
            <h2 className="meme-text  bottom">{meme.bottomText}</h2>
        </div>
        </main>
      </>
    )
}
