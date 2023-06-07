document.getElementById('user-button').addEventListener('click', login);

function login() {
    var loginPopup = document.getElementById('login-popup');
    if (loginPopup.classList.contains('hidden')) {
        loginPopup.classList.remove('hidden');
    } else {
        loginPopup.classList.add('hidden');
    }
}
let mediaStream = null;

// start the video stream
document.getElementById('camera-icon').addEventListener('click', function() {
    var video = document.getElementById('video');
    var videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'block';
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
            video.play();
            mediaStream = stream; // set the global mediaStream variable
        });
    }
});

var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var captureIcon = document.getElementById('capture-icon');
var closeIcon = document.getElementById('close-icon');
var videoContainer = document.getElementById('video-container');

document.getElementById('camera-icon').addEventListener('click', function() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
            video.play();
            videoContainer.classList.remove('hidden');
        });
    }
});

captureIcon.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    // var photoData = canvas.toDataURL('image/png');
    // You can process the `photoData` here as required.

    // For now, just print it to the console:
    console.log(photoData);
});

closeIcon.addEventListener('click', function() {
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        mediaStream = null;
    }
    video.srcObject = null;
    videoContainer.style.display = 'none'; 
});










