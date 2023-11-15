
const ImageList = ({image, handleClick, CoverImage, index, cardIsActive}) => {
  return (
    <div className={image.active ? "grid-item flip" : "grid-item coveredCard"} 
       style={{pointerEvents:cardIsActive ? "none" :"" }}
    disabled={true} onClick={()=>handleClick(index)}>
    <div  className="img-container">
    <img src={image.src }       />
    </div>
    <div className="cover">
         <img src={CoverImage}  />
    </div>
</div>

  )
}

export default ImageList
