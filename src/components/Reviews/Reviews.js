import React, { useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReview] = useReviews();
    return (
      
         <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Coustomer Review ({reviews.length})</h1>
                    <div class="flex flex-wrap -m-4">
                        {
                             reviews.map(review =>
                    <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                        }

                    </div>
                   
                </div>
            </section>
    );
};

export default Reviews;