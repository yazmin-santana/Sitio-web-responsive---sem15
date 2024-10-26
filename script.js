document.addEventListener('DOMContentLoaded', () => {
    
    // Array con líneas de texto aleatorias
    const textLines = [
        "...vestibulum mollis, tortor ac congue commodo",
        "...mauris in vehicula justo, non tincidunt lorem",
        "...phasellus ut ante euismod, congue elit id, tempor ex"
      ];
  
      let currentIndex = 0;
  
      // Función para actualizar el texto cada 2 segundos
      function updateText() {
        const carouselLine = document.getElementById("carousel-line");
        currentIndex = (currentIndex + 1) % textLines.length; // Alterna entre 0, 1 y 2
        carouselLine.textContent = textLines[currentIndex];
      }
  
      // Cambia el texto cada 2 segundos
      setInterval(updateText, 2000);
    
    //Función para hacer dinámico el acordion

      const accordion = document.getElementById('accordionExample');
      const accordionContainer = document.getElementById('accordion-container');
      const accordionInNavbar = document.getElementById('accordion-in-navbar');

      function moveAccordion() {
        if (!accordion || !accordionContainer || !accordionInNavbar) return; // Verificación de elementos

        if (window.innerWidth <= 992) {
          // Mover acordeón a la barra de navegación
          if (!accordionInNavbar.contains(accordion)) {
            accordionInNavbar.appendChild(accordion);
          }
        } else {
          // Devolver acordeón al contenedor principal
          if (!accordionContainer.contains(accordion)) {
            accordionContainer.appendChild(accordion);
          }
        }
      }

      // Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
      moveAccordion();
      window.addEventListener('resize', moveAccordion);
});
    
    
