import { useState, useEffect } from 'react';

function Carousel({ slides = [], autoProgress }) {
  const [currentSlide, setCurrnetSlide] = useState(0)
  const slideCounter = `${currentSlide + 1}/${slides.length}`

useEffect(() => {
  if (autoProgress) {
    setInterval(
      () => {
        setCurrnetSlide((val) => {
          if (val === slides.length - 1) {
            return 0
          }
          return val + 1
        }
        )
      }
    , 1000)
  }
}, [])



  return (
    <div className="mt-16 text-4xl mx-auto text-bold text-center">
     {slides[currentSlide]}
     <p className="mt-4">{slideCounter}</p>
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
