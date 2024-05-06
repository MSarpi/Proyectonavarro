import { useState, useEffect } from 'react';

function ScrollUp() {
  
  const [scrollUp, setScrollUp] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      {scrollUp && (
        <button style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          height: "50px",
          width: "50px",
          fontSize: "20px", // Reduje el tamaño de fuente para que se ajuste mejor
          borderRadius: "50%", // Esto hace que el botón sea redondo
          backgroundColor: "#770606",
          color: "white",
        }} onClick={scrollToTop}>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
        </button>
      )}
    </>

  
  );
}

export default ScrollUp;
