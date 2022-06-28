import React from 'react';

const MenuCard = ({menuData}) => {
   
    // console.log(menuData);
  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem)=>{
        const {id,name,image,category,description,price}=curElem;
        return(
            <>
            <div className='Card-Container' key={id}>
        <div className='card'>
            <div className='card-body' >
                <span className='card-number card-circle subtle' > {id}

                </span>
                <span className='card-author subtle' ><h3>{name}</h3></span>
                <h1 className='card-title'>{category}</h1>
                <span className='card-description'>{description}</span>
                <div className='card-price subtle' >{price}</div>
                     <div className='card-read' >read</div>
                     <img src={image} alt="images" className='card-images' />
                     <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>
    </div>
    
    </>
        );
        
    })}
       </section>
    </>
  );
};

export default MenuCard