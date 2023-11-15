
import { useEffect, useState } from "react"
import  {CoverImage, Helmet_1, Potion_1,Ring_1,Scroll_1,Shield_1, Sword_1}  from "./Components/Images"
import ImageList from "./Components/ImagesList/ImageList"
import "./assets/styles/global.css"
const App = () => {
  const [turns, setTurns] = useState(0);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2]  = useState(null)
  const [cardIsActive, setCardIsActive] = useState(false)
  const [cards, setCards] = useState([]);
 
  const images = [
    {
      src:Helmet_1,
      active:false,
      
    },
    {
      src:Potion_1,
      active:false
      
    },
    {
      src:Ring_1,
      active:false
    },
    {
      src:Scroll_1,
      active:false     
    },
    {
      src:Shield_1,
      active:false
    },
    {
      src:Sword_1,
      active:false
    }
  ]






  const [splitedImages, setSplitedImages] = useState([...images,...images])
  
  const handleClick = (id)=>{
    let activeImage;
       let editedImage = cards.map((image,index)=>{
             if(index ===id && !image.active){
              activeImage = image;
              return  {...image, active:true} 
             }
            
             return  image
        });
       if(image1) {     
         setImage2(activeImage) 
         console.log("image 2 is set")
         setTurns(turns+ 1)
        
       setCardIsActive(true)
       }

        else{ 
       
         setImage1(activeImage);
         console.log(activeImage)
          
         console.log(image1)
        }
        
       setCards(editedImage)

    
  }



  useEffect(()=>{
      
    let timeout =   setTimeout(()=>{
        if(image1 && image2){
               
          if( image1.src !== image2.src){      
              let newCards =  cards.map((card)=>{
                               if(image1.id == card.id ){
                                 return  {...card, active:false}
                               }
                               if(image2.id == card.id){
                                return  {...card, active:false}
                               }

                       return  {...card}          
                
                  }) 

                  setCards(newCards)
              
          }
   
  }
         
  setImage1(null);
  setImage2(null);
  setCardIsActive(false)

  return function(){
    clearTimeout(timeout)
  }
       }, 2000)

  },[ turns])


  

  const shuffleCards = ()=>{
    console.log("card shuffled !")
      const shuffledCards = [...images,...images]
      .sort(()=>( Math.random() - 0.5))
      .map((card)=>(({...card,id:Math.random()})));

      setCards(shuffledCards);
      setTurns(0)
      setImage1(null);
      setImage2(null);
      setCardIsActive(false)

  }


  return (
      <main>
              <div>
                    <button  className="shuffle-btn d-inline-block " id="shuffle-btn"   onClick={shuffleCards}>
                                shuffle
                    </button>
                  </div>  
    <div   className="grid-container">
               {      
                cards.map((image,index)=>(//cardIsActive
                      <ImageList  image={image}    CoverImage={CoverImage} handleClick={handleClick}  index={index} cardIsActive={cardIsActive}/>
                ))
               }
    </div>
         <h3  className="text-center fw-bold  ">
             {turns}
         </h3>
      </main>
  )
}

export default App
