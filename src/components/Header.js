import React from 'react';

export default function Header(props) {
  return (
    <header className='top-h'>
      <div className="top-n">
        <a href="#/">
          <h1>Tanveer Stationers & Book Shop</h1>
        </a>
      </div>
      <div className='top-c'>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> </a>
      </div>
    </header>
  );
}
