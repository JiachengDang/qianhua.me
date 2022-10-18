import React from 'react'
import './Cards.css';

interface ICard {
    title: string;
    image: string;
    link: string;
}





const cardData: ICard[] = [
    
    {
        title: "new in",
        image: "new_in.jpg",
        link: "new-stuff",
    },
    {
        title: "women",
        image: "Women.jpg",
        link: "womens",
    },
    {
        title: "men",
        image: 'Men.jpg',
        link: "mens",
    },
    {
        title: "brands",
        image: 'Brands.jpg',
        link: "grkc",
    },
    {
        title: "accessories",
        image: 'Accessories.jpg',
        link: 'all',
    },
    {
        title: "everything else",
        image: 'everything_else.jpg',
        link: 'all',
    }

]

const Cards = () => {



    const renderCards = () => {
        const cards = cardData.map((data, i) => {
            return (
                <div className='card-container' key={'card-' + i} >

                    <img className='card-image' src={data.image} alt='card image' />
                    <div className="card-overlay">
                        <div className='card-title'>{data.title}</div>
                    </div>


                </div>

            )
        });
        return <div className='cards-container'>{cards}</div>
    }


    return (
        <div>
            {renderCards()}
        </div>

    )

}

export default Cards