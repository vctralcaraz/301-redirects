import React from 'react';
import './Preloader.css';

function Preloader() {

  React.useEffect(() => {
    preloader();
  }, [])

  const preloader = () => {
    const preload: HTMLElement = document.querySelector('.preloader')!;

    if (preload) {

      setTimeout(() => {
        preload.style.opacity = '0';
        setTimeout(() => {
          preload.style.display = 'none';
        }, 1000);

      }, 3000);
    }
  }

  return (
    <div className='preloader'>
      <div className='spinner_wrap'>
        <div className='spinner' />
      </div>
    </div>
  )
}

export default Preloader;
