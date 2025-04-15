// 2. Butonu seç
const movingBtn = document.getElementById('movingBtn');

// Fare butonun üzerine geldiğinde rastgele bir pozisyona taşı
movingBtn.addEventListener('mouseenter', () => {
    // Rastgele X ve Y pozisyonları hesapla
    const randomX = Math.random() * 600 - 400; // -100 ile +100 arasında
    const randomY = Math.random() * 600 - 400;

    // Butonun pozisyonunu değiştir
    movingBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
