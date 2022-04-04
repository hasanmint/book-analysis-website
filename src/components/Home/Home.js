import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();

    const slice = reviews.slice(0, 3);


    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl  text-3xl mb-4 font-medium text-gray-900">Lost Islamic History
                            <br className="hidden lg:inline-block " />Reclaiming Muslim Civilisation.
                        </h1>
                        <p className="mb-8 leading-relaxed">Islam has been one of the most powerful religious, social and political forces in history. Over the last 1400 years, from origins in Arabia, a succession of Muslim polities and later empires expanded to control territories and peoples that ultimately stretched from southern France to East
                            Africa and South East Asia. The impact of
                            Islamic belief on scientific advancement, social structures, and cultural development is given due prominence, and the text is complemented by portraits of key personalities, inventions and little known historical nuggets. The history of Islam and of the world's Muslims brings together diverse
                            peoples, geographies and states, all interwoven into one narrative that begins with Muhammad and continues to this day.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See More</button>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://images-na.ssl-images-amazon.com/images/I/61J8OsziJKL._SX326_BO1,204,203,200_.jpg" />
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Coustomer Review ({slice.length})</h1>
                    <div class="flex flex-wrap -m-4">
                        {
                            slice.map(review =>
                                <Review
                                    key={review.id}
                                    review={review}
                                ></Review>)
                        }

                    </div>
                    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/reviews">Load More Review</Link></button>
                </div>
            </section>


        </>

    );
};

export default Home;