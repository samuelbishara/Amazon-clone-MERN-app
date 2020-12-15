import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

export default function Header() {
  return (
    <div className="header">

      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      ></img>

      <div className='header-search'>
        <input type="text" className='header-input'></input>
        <SearchIcon className='header-searchIcon'/>
      </div>

      <div className='header-option'>
        <span className='header-topLine'>Hello</span>
        <span className='header-bottomLine'>Sign in</span>
      </div>

      <div className='header-option'>
        <span className='header-topLine'>Returns</span>
        <span className='header-bottomLine'>& Orders</span>
      </div>

      <div className='header-option'>
        <span className='header-topLine'>Your</span>
        <span className='header-bottomLine'>Prime</span>
      </div>

      <div className='header-optionBasket'>
        <ShoppingBasket/>
        <span className='header-bottomLine basketCount'>0</span>

      </div>




    </div>
  );
}
