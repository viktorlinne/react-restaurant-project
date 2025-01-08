import React from 'react';
import ReviewCard from '../layouts/ReviewCard.jsx';
import review from '../assets/review.jpg'

const Review = () => {
    return (
        <div className={"min-h-screen flex flex-col items-center justify-center md:px-32 px-5"}>
            <h1 className={"text-4xl fontsemibold text-center lg:pt-16 pt-24 pb-10"}>
                Våra Kunders Recensioner!
            </h1>

            <div className={"flex flex-col md:flex-row gap-5 mt-5"}>
                <ReviewCard img={review} name={"Aziz Amar"}/>
                <ReviewCard img={review} name={"Aziz Amar"}/>
                <ReviewCard img={review} name={"Aziz Amar"}/>
            </div>
        </div>
    )
};

export default Review;