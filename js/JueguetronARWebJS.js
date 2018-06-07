// function takeScreenshot() 
// {
// 	//var canvas = scene.canvas;
// 	// here is the most important part because if you dont replace you will get a DOM 18 exception.
// 	// var scene = document.querySelector('a-scene');
// 	// //var canvas = scene.canvas;
// 	// var canvasData = scene.renderer.domElement.toDataURL('image/png');   
// 	// window.location.href=canvasData;
//     var hidden_canvas = document.querySelector('canvas'),
//     var video = document.querySelector('#camera-stream'),
//     //image = document.querySelector('img.photo'),

//     // Get the exact size of the video element.
//     width = video.videoWidth,
//     height = video.videoHeight,

//     // Context object for working with the canvas.
//     context = hidden_canvas.getContext('2d');

//     // Set the canvas to the same dimensions as the video.
//     hidden_canvas.width = width;
//     hidden_canvas.height = height;

//     // Draw a copy of the current frame from the video on the canvas.
//     context.drawImage(video, 0, 0, width, height);

//     // Get an image dataURL from the canvas.
//     var imageDataURL = hidden_canvas.toDataURL('image/png');

//     // // Set the dataURL as source of an image element, showing the captured photo.
//     // image.setAttribute('src', imageDataURL); 

//     // Set the href attribute of the download button.
//     document.querySelector('#dl-btn').href = imageDataURL;
// }
document.addEventListener('DOMContentLoaded', function () {

    // References to all the element we will need.,
    var image = document.querySelector('#snap'),
        //start_camera = document.querySelector('#start-camera'),
        controls = document.querySelector('.controls'),
        take_photo_btn = document.querySelector('#take-photo'),
        delete_photo_btn = document.querySelector('#delete-photo'),
        download_photo_btn = document.querySelector('#download-photo');
        //error_message = document.querySelector('#error-message');

    take_photo_btn.addEventListener("click", function(e){

        e.preventDefault();
        var video = document.querySelector('video')
        var snap = takeSnapshot(video);

        // Show image. 
        image.setAttribute('src', snap);
        //image.classList.add("visible");

        // Enable delete and save buttons
        delete_photo_btn.classList.remove("disabled");
        download_photo_btn.classList.remove("disabled");

        // Set the href attribute of the download button to the snap url.
        download_photo_btn.href = snap;

        // Pause video playback of stream.
        //video.pause();

    });


    delete_photo_btn.addEventListener("click", function(e){

        e.preventDefault();

        // Hide image.
        image.setAttribute('src', "");
        image.classList.remove("visible");

        // Disable delete and save buttons
        delete_photo_btn.classList.add("disabled");
        download_photo_btn.classList.add("disabled");

        // Resume playback of stream.
        //video.play();

    });

        function takeSnapshot(video){
        // Here we're using a trick that involves a hidden canvas element.  

        var hidden_canvas = document.querySelector('canvas'),
            context = hidden_canvas.getContext('2d');

        var width = video.videoWidth,
            height = video.videoHeight;

        if (width && height) {

            // Setup a canvas with the same dimensions as the video.
            hidden_canvas.width = width;
            hidden_canvas.height = height;

            // Make a copy of the current frame in the video on the canvas.
            context.drawImage(video, 0, 0, width, height);

            // Turn the canvas image into a dataURL that can be used as a src for our photo.
            return hidden_canvas.toDataURL('image/png');
        }
    }
});