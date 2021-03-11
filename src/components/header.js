import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headRef = useRef(null);
  useEffect(() => {
    headRef.current.classList.add('start-show');

    const headAppear = () => {
      if (window.pageYOffset > 180) {
        headRef.current.classList.add('header-fixed');
      } else {
        headRef.current.classList.remove('header-fixed');
      }
    };
    window.addEventListener('scroll', headAppear);

    return () => {
      window.removeEventListener('scroll', headAppear);
    };
  }, []);

  return (
    <header ref={headRef} className="section-outer section-header ">
      <div className="inner-wrapper">
        <div className="main-navigation">
          <Link to="/">
            <div className="logo">
              <h1>Your Pizza</h1>
            </div>
          </Link>
          <div className="social-links">
            <a href="/" className="social-links__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 470.513 470.513"
                fill="#8d8d8d">
                <path d="M271.521,154.17v-40.541c0-6.086,0.28-10.8,0.849-14.13c0.567-3.335,1.857-6.615,3.859-9.853 c1.999-3.236,5.236-5.47,9.706-6.708c4.476-1.24,10.424-1.858,17.85-1.858h40.539V0h-64.809c-37.5,0-64.433,8.897-80.803,26.691 c-16.368,17.798-24.551,44.014-24.551,78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086H271.521z" />
              </svg>
            </a>
            <a href="/" className="social-links__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 310 310"
                fill="#8d8d8d">
                <path d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861 C204.394,157.263,202.325,160.684,199.021,162.41z" />
              </svg>
            </a>
            <a href="/" className="social-links__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 169.063 169.063"
                fill="#8d8d8d">
                <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z" />
              </svg>
            </a>
            <a href="/" className="social-links__item">
              <svg
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                fill="#8d8d8d">
                <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" />
              </svg>
            </a>
          </div>
          <Link to="/order">
            <div className="cart-block">
              <div className="cart-block__summary">0 $</div>
              <div className="cart-block__count">
                <span className="basket-icon"></span>
                <span>0</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
