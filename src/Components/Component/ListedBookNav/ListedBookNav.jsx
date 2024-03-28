import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ListedBookNav = () => {
    return (
        <div>
            <div>
                <ul className="menu menu-horizontal ">
                    <Link to={"/readBooks"}><li><a>Read Books</a></li></Link>
                    <li><a>Wishlist Books</a></li>
                    
                </ul>
                <hr />
                
            </div>
        </div>
    );
};

export default ListedBookNav;