import { useState } from 'react';

function Carousel({ slides = [] }) {
  const [currentSlide, setCurrnetSlide] = useState(0)

  return (
    <div className="mt-16 text-4xl mx-auto text-bold text-center">
     {slides[currentSlide]}
      <button className="p-2 m-10 border-2 rounded-md border-black" onClick={() => setCurrnetSlide(currentSlide - 1)} disabled={currentSlide === 0}>
        previous slide
      </button>
  
     <button className="p-2 m-10 border-2 rounded-md border-black" onClick={() => setCurrnetSlide(currentSlide + 1)} disabled={currentSlide === slides.length - 1}> 
       next slide
     </button>

    </div>
  );
}

export default Carousel;
