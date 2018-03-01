var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lake.png') {
      myImage.setAttribute ('src','images/pearly-everlasting.png');
    } else {
      myImage.setAttribute ('src','images/lake.png');
    }
}