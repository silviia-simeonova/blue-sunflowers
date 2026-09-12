document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel');

    if (!track) return;

    const images = track.querySelectorAll('img');
    const imageCount = images.length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageCount;

        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 4000);
});