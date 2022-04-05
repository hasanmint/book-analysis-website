import React from 'react';

const Blogs = () => {
    return (
        <section class='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div class='grid grid-cols-1 gap-24 md:grid-cols-2'>
                <div>
                    <h1 class='mb-6 text-3xl uppercase font-light text-gray-900 md:text-3xl'>
                        Question
                    </h1>
                    <p class='mt-10 mb-3 text-2xl font-semibold text-gray-900'>
                        Q:1- What is Context API?
                    </p>
                    <p class='text-gray-600 text-xl'>

                        The React Context API is a way to process for a React app to effectively produce global variables that can be passed any location. This is the alternative  name like as to "prop drilling" or moving props from grandparent to child to parent, and on this way. Context is also touted as an more easier, lighter approach to state management using Context API is a  new feature added in version 16.3 of React that allows one to share state across the star the app lightly.
                    </p>

                </div>
                <div>
                    <h1 class='mb-6 text-3xl uppercase font-light md:text-3xl'>
                        Question
                    </h1>
                    <p class='mt-10 mb-3 text-2xl font-semibold text-gray-900'>
                        Q:2-What is Semantic Tag ?
                    </p>
                    <p class='text-gray-600 text-xl'>
                        The Semantic tag elements are those that clearly describe their meaning in a human- and machine-readable way. Asemantic element clearly describes its meaning to both the browser and the developer. One of the most prominent examples of semantic elements tag  such as (header,footer,nav,aside,section and article ) considered semantic tag.
                    </p>

                </div>
                <div>
                    <h1 class='mb-6 text-3xl uppercase font-light md:text-3xl'>
                        Question
                    </h1>
                    <p class='mt-10 mb-3 text-2xl font-semibold text-gray-900'>
                        Q:3-What is the different inline VS Inline Blcok Elements ?
                    </p>
                    <p class='text-gray-600 text-xl'>
                        <b>Inline</b>
                        <p className='text-gray-600 text-xl'>1.Inline elements can begin within a line of the HTML element, and it never starts a new line for the HTML. <br />
                            2.Inline elements the width is defined only till the tags of inline extends.<br />
                            3.Inline elements accept only left and right margins.<br />
                            4.Inline elements can do break among the lines.<br />
                            5.Inline elements can be nested with the between the block and inline elements.<br />
                            6.Inline elements create small structures
                        </p>

                    </p>

                    <p class='text-gray-600 text-xl'>
                        <b>Block</b>
                        <p className='text-gray-600 text-xl'>1.Blocks cannot begin within a line of the HTML element, and it always starts the new line of the HTML. <br />
                            2.Block Elements the width is more than inline and is extended till the parent element extends.<br />
                            3.Block elements accept all the margins, including left, right, top and bottom margins.<br />
                            4.Block elements cannot do break among the lines.<br />
                            5.Block elements cannot be nested with the between inline and block elements.<br />
                            6.Block elements create large structures.
                        </p>

                    </p>

                </div>
            </div>
        </section>
    );
};

export default Blogs;