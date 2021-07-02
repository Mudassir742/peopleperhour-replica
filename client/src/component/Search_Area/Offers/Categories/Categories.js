import React from 'react';

import './Categories.css';

function Categories() {
    return (
        <div className="cate">
            <h2>Popular offers categories</h2>

            <ul>
                <li><a href="/">Technology & Programming</a></li>
                <li><a href="/">Writing & Translation</a></li>
                <li><a href="/">Design</a></li>
                <li><a href="/">Digital Marketing</a></li>
                <li><a href="/">Video, Photo & Image</a></li>
                <li><a href="/">Business</a></li>
                <li><a href="/">Music & Audio</a></li>
                <li><a href="/">Marketing, Branding & Sales</a></li>
                <li><a href="/">Social Media</a></li>
            </ul>

        </div>
    )
}

export default Categories;