SC.initialize({
  client_id: 'f665fc458615b821cdf1a26b6d1657f6'
});


//   SC.get("/tracks").then(function(response) {
//     // things to do after the tracks load...
//     console.log( response );
// });

SC.get("/tracks",{
 q: "fish"
}).then(function(response) {
 // things to do after the tracks load...
 console.log( response );
});
//
//  SC.stream( '/tracks/216847995' ).then(function(player){
//    console.log(player);
//    player.play();
// });

 SC.stream( '/tracks/' + track.id ).then(function(player){
   console.log(player);
   player.play();
});


// make song array
var songsArr = [
  {
    id: 0,
    src: "/Users/cardillo/Desktop/nycda/jukebox/womp.mp3"
  },
  {
    id: 1,
    src: "/Users/cardillo/Desktop/nycda/jukebox/doot.mp3"
  },
  {
    id: 2,
    src: "/Users/cardillo/Desktop/nycda/jukebox/ballad.mp3"
  },
  {
    id: 3,
    src: "/Users/cardillo/Desktop/nycda/jukebox/birthday.mp3"
  },
  {
    id: 4,
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

// create jukebox object and methods(?)
var jukebox = {
  myJuke: juke,
  songs: songsArr,
  currentSong: 0,
  start: function() {
    this.myJuke.src = this.songs[this.currentSong].src;
    juke.play();
  },

  pause: function() {
    juke.pause();
  },

  play: function() {
    juke.play();
  },
// advances to next track, then loops back to beginning.
  next: function() {
    this.currentSong++;
    if (this.currentSong < l) {
        this.start();
      } else if (this.currentSong == l) {
         this.currentSong = 0;
         this.start();
      }
    }
  }

// The next two lines of commented code work, but they don't allow the song cycle to go back to the beginning.
    // this.currentSong++;
    // this.start();
// The below works, but only accounts for two songs. How can I set this up to take in any given number of songs?
//     if (this.currentSong == 0) {
//       this.currentSong++;
//       this.start();
//     } else if (this.currentSong == 1) {
//       this.currentSong--;
//       this.start();
//     }
//   }
// }
//





// this.currentSong++;
// this.start();
// for (jukebox.currentSong > songsArr.length) {
//     juke.play(this.currentSong[0]);
//   }
// }
// }
//
// if (currentSong > songsArr.length) {
//   this.start(this.currentSong[0]);
// } else {
//
// }

  //   if (this.currentSong == 0) {
  //     juke.src = songs[1].src;
  //     juke.play();
  //   } else {
  //     juke.src = songs[0].src;
  //   }
  // }
// };



  // function jukeBox() {
  //   $("#jukeBox")[0].src = $("#playlist li a")[0];
  //   $("#jukeBox")[0].play();
  //   $("#playlist li a").click(function(e) {
  //     e.preventDefault();
  //     $("#jukeBox")[0].src = this;
  //     $("#jukeBox")[0].play();
  //   });
  // }
