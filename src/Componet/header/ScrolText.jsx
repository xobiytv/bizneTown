// App.js

import React, { useEffect } from 'react';
import './ScrolText.css'
const Scroller = ({ speed, direction, children }) => {
    useEffect(() => {
        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            addAnimation();
        }

        function addAnimation() {
            // add data-animated="true" to every `.scroller` on the page
            const scroller = document.querySelector('.scroller');
            scroller.setAttribute('data-animated', true);

            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = document.querySelector('.scroller__inner');
            const scrollerContent = Array.from(scrollerInner.children);

            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    }, []);



    return (
        <div className={`scroller ${direction}`} data-speed={speed}>
            {children}
        </div>
    );
};
const sText = [
    {
        id: 1,
        name: "FRONTEND DEVELOPER"
    },
    {
        id: 2,
        name: "MOBILE DEVELOPER"
    },
]
const TagList = () => (
    <ul className="tag-list scroller__inner relative text-3xl">
        {
            sText.map(item => (
                <li  key={item.id}>{item.name} *</li>
            ))
        }



    </ul>
);


const App = () => (
    <div>
        <Scroller  speed="fast">
            <TagList />
        </Scroller>

    </div>
);

export default App;
