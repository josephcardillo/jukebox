// make song array
var songsArr = [
  {
    id: 0,
    name: "Womp Womp",
    src: "/Users/cardillo/Desktop/nycda/jukebox/womp.mp3"
  },
  {
    id: 1,
    name: "Doot Doo",
    src: "/Users/cardillo/Desktop/nycda/jukebox/doot.mp3"
  },
  {
    id: 2,
    name: "Ballad For Peter",
    src: "/Users/cardillo/Desktop/nycda/jukebox/ballad.mp3"
  },
  {
    id: 3,
    name: "Birthday-O",
    src: "/Users/cardillo/Desktop/nycda/jukebox/birthday.mp3"
  },
  {
    id: 4,
    name: "Chump It Up",
    src: "/Users/cardillo/Desktop/nycda/jukebox/chump.mp3"
  },
];

// set variables
var juke = $("#jukeBox")[0];
var button1 = "#start";
var button2 = "#pause";
var button3 = "#play";
var button4 = "#next";
var l = songsArr.length;
var songName = $("#song-title")[0]

// create jukebox object and methods(?)
var jukebox = {
  myJuke: juke,
  songs: songsArr,
  currentSong: 0,
  currentName: 0,
  start: function() {
    this.myJuke.src = this.songs[this.currentSong].src;
    songName.innerText = songsArr[this.currentName].name;
    juke.play();
  },
// pauses current track
  pause: function() {
    juke.pause();
  },
// continues playing current track from where it was paused
  play: function() {
    juke.play();
  },
// advances to next track, then loops back to beginning.
  next: function() {
    this.currentSong++;
    this.currentName++;
    if (this.currentSong < l || this.currentName < l) {
        this.start();
      } else if (this.currentSong == l || this.currentName == l) {
         this.currentSong = 0;
         this.currentName = 0;
         this.start();
      }
    }
  }
