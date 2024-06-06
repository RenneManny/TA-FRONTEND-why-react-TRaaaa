let cardInfo = {
    title: 'City Lights in New York',
    comments: 67,
    subTitle: 'The city that never sleeps.',
    description:
      'New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.',
    category: 'photos',
    imageURL:
      'https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  };
function Card(){
    return(
        <>
        <header>
        <div className="mydiv">
            <div className="crcl">
                <p>{cardInfo.date}</p>
            </div>
       <img src={cardInfo.imageURL} alt="sandimage" />
       <div className="container">
       <h2>{cardInfo.title}</h2>
       <h3>{cardInfo.subTitle}</h3>
       <p>{cardInfo.description}</p>
      
        </div>
       </div>
        </header>
       
      
        </>
    )
}
export default Card;
