document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("play");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");
    const autoScrollBtn = document.getElementById("auto-scroll");

    // Play & Pause Music
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = "⏸"; // Ganti ikon ke pause
        } else {
            audio.pause();
            playBtn.innerHTML = "▶"; // Ganti ikon ke play
        }
    });

    // Update progress bar dan waktu saat lagu diputar
    audio.addEventListener("timeupdate", () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progressPercent;

        // Update waktu saat ini
        let currentMinutes = Math.floor(audio.currentTime / 60);
        let currentSeconds = Math.floor(audio.currentTime % 60);
        if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
        currentTimeEl.innerText = `${currentMinutes}:${currentSeconds}`;
    });

    // Seek lagu saat progress bar diubah
    progressBar.addEventListener("input", () => {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });

    // Atur durasi total lagu saat metadata sudah dimuat
    audio.addEventListener("loadedmetadata", () => {
        let totalMinutes = Math.floor(audio.duration / 60);
        let totalSeconds = Math.floor(audio.duration % 60);
        if (totalSeconds < 10) totalSeconds = "0" + totalSeconds;
        durationEl.innerText = `${totalMinutes}:${totalSeconds}`;
    });

    // Auto Scroll Lyrics (Dummy, bisa dikembangin lagi)
    autoScrollBtn.addEventListener("click", () => {
        window.scrollBy({ top: 200, behavior: "smooth" });
    });
});

document.querySelector(".like-btn").addEventListener("click", function() {
    this.classList.add("heartbeat");
    
    setTimeout(() => {
        this.classList.remove("heartbeat");
    }, 400); // Sesuai dengan durasi animasi
});
