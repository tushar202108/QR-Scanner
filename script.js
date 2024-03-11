
let scanner = new Instascan.Scanner({ video: document.getElementById('video') });

scanner.addListener('scan', function(content) {
  window.location.href = content;
});

Instascan.Camera.getCameras().then(function(cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    console.error('No cameras found.');
    alert('No cameras found.');
  }
}).catch(function(e) {
  console.error(e);
  alert('Error: ' + e);
});
