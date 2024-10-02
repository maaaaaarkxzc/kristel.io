// script.js

const playVideoButton = document.getElementById('play-video');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');

playVideoButton.addEventListener('click', () => {
    videoContainer.style.display = 'block';
    video.play();
});

video.addEventListener('ended', () => {
    videoContainer.style.display = 'none';
});
