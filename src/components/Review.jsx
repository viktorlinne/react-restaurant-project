import React from 'react';
import ReviewCard from '../layouts/ReviewCard.jsx';
import review from '../assets/review.jpg'


const Review = () => {
    const reviews = [

    ]
    return (
        <div className={"flex flex-col items-center justify-center lg:px-32 px-5"}>
            <h1 className={"text-4xl font-semibold text-center pt-16 pb-10"}>
                Våra Kunders Recensioner!
            </h1>
            <div className={"flex flex-col md:flex-row gap-8 mt-4"}>
                <ReviewCard img={review}
                            name={"Aziz Amar"}/>
                <ReviewCard img={review}
                            name={"Aziz Amar"}/>
                <ReviewCard img={review}
                            name={"Aziz Amar"}/>
            </div>
        </div>

    );
};

export default Review;