import React from 'react';
import "./navbar.css"
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                        <Link to="/">
                            <img src="./amazon_PNG25.png" alt="logo" />
                        </Link>
                    </div>
                    <div className='nav_searchbaar'>
                        <input type="text" name="" id="" />
                        <div className='search_icon'>
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <Link to="/signin">Sign In</Link>
                    </div>
                    <div className='cart_btn'>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <div className='rno'>
                        <p>Return</p>
                        <p>&Order</p>
                    </div>
                    <Avatar className="avtar" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar