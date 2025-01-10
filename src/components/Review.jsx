import React from 'react';
import ReviewCard from '../layouts/ReviewCard.jsx';
import review from '../assets/review.jpg'
import CategoriesCard from "../layouts/CategoriesCard.jsx";


const Review = () => {
    const reviews = [
        {img: review, title: "Aziz Amar"},
        {img: review, title: "Aziz Amar"},
        {img: review, title: "Aziz Amar"}
    ]
    return (
        <div className={"flex flex-col justify-center items-center lg:px-32 px-5"}>
            <h1 className={"text-4xl font-semibold text-center pt-16 pb-10"}>
                Våra Kunders Recensioner!
            </h1>
            <div className={"flex flex-row flex-wrap gap-8 justify-center mt-4 w-full"}>
                {reviews.map((review, i) => {
                    return <ReviewCard key={i} to={review.to} img={review.img} title={review.title}/>
                })}
            </div>
        </div>

    );
};

export default Review;