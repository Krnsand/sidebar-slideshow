window.addEventListener("DOMContentLoaded", main);


function main() {

}

document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0; // Startindex
    const slides = document.querySelectorAll('.slide'); // Hämta alla slides
    const intervalTime = 3000; // Tid för varje bild i millisekunder

    function showNextSlide() {
        // Ta bort active-klassen från aktuell bild
        slides[currentIndex].classList.remove('active');

        // Öka index för att gå till nästa bild
        currentIndex = (currentIndex + 1) % slides.length; // Loopar tillbaka till första bilden

        // Lägg till active-klassen på nästa bild
        slides[currentIndex].classList.add('active');
    }

    // Kontrollera om det finns några slides innan vi kör slidern
    if (slides.length > 0) {
        slides[currentIndex].classList.add('active'); // Starta med första bilden synlig
        setInterval(showNextSlide, intervalTime);
    }
});
