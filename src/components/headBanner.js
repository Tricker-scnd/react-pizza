import React, { useEffect, useRef } from 'react';
import Slider from './media/slider';

function HeadBanner() {

  const headBannerRef = useRef(null);

  useEffect(() => {
    headBannerRef.current.classList.add('start-show');
  }, []);

  return (
    <section ref={headBannerRef} className="section-outer section-head-banner">
      <div className="inner-wrapper inner-wrapper--wide">
        <Slider />
      </div>
    </section>
  );
}

export default HeadBanner;
