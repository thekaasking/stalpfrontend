// script.js

window.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById("overlay");
    var iframeWindow = iframe.contentWindow;
  
    iframe.addEventListener("load", function() {
      iframeWindow.navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
          console.log("Microphone access granted.");
        })
        .catch(function(error) {
          console.error("Error granting microphone access:", error);
        });
    });
  });
  