// make song array
var songs = [
  {
    id: 0,
    src: "/Users/cardillo/Desktop/nycda/jukebox/song-1.mp3"
  },
  {
    id: 1,
    src: "/Users/cardillo/Desktop/nycda/jukebox/song-2.mp3"
  },
];


var juke = '$("#jukeBox")[0]';
var a = 3;
// create jukebox object and methods(?)
var jukebox = {
  myJuke: juke,
  songsArr: songs,
  currentSong: 0,
  start: function() {
    $("#jukeBox")[this.currentSong].src = songs[0].src;
    $("#jukeBox")[this.currentSong].play();
  },

  pause: function() {
    $("#jukeBox")[this.currentSong].pause();
  },

  play: function() {
    $("#jukeBox")[this.currentSong].play();
  },
// trying to get alternate track to play using if-else
  next: function() {
    if (this.currentSong == 0) {
      $("#jukeBox")[this.currentSong].src = songs[1].src;
      $("#jukeBox")[this.currentSong].play();
    } else {
      $("#jukeBox")[this.currentSong].src = songs[0].src;
    }
  }
};


  // function jukeBox() {
  //   $("#jukeBox")[0].src = $("#playlist li a")[0];
  //   $("#jukeBox")[0].play();
  //   $("#playlist li a").click(function(e) {
  //     e.preventDefault();
  //     $("#jukeBox")[0].src = this;
  //     $("#jukeBox")[0].play();
  //   });
  // }
