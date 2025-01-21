// snow.js
(function () {
    const snowflakes = document.getElementById('snowflakes');
    const flakeCount = 500;
    const minSize = 5;
    const maxSize = 20;
    const minSpeed = 1;
    const maxSpeed = 8;

    for (let i = 0; i < flakeCount; i++) {
        const flake = document.createElement('div');
        flake.className ='snowflake';
        flake.style.left = Math.random() * window.innerWidth + 'px';
        flake.style.animationDuration = minSpeed + Math.random() * (maxSpeed - minSpeed) +'s';
        flake.style.width = minSize + Math.random() * (maxSize - minSize) + 'px';
        flake.style.height = flake.style.width;
        flake.style.opacity = Math.random();
        snowflakes.appendChild(flake);
    }
})();// JavaScript Document