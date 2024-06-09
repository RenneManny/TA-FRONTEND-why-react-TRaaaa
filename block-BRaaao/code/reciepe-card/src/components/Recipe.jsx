function Recipe({image,title,ingredients,description}){
return(
    <>
    <div  className="reciepe-main mx-auto w-96 border-2 rounded-md mt-5  border-black p-4 text-center">
        <h1>{title}</h1><br />
        <img  className=" mb-4"src={image} alt="img" />
    
        <ul >
            {ingredients.map((ingredient,index)=> (

                <li className="" key={index}> {ingredient}</li>
            ))
        }
            </ul>
        
        <p className=" mt-4">{description}</p>
    </div>
    
    </>
)

}
export default Recipe;