let nowPlaying = document.querySelector(".now-playing");
let coverArt = document.querySelector(".cover-art");
let songName = document.querySelector(".song-name");
let songArtist = document.querySelector(".song-artist");

let trackIndex = 0;
let isPlaying = false;
let timerUpdate;

let trackList = [
    {
        name: "Never Had A Dream Come True",
        artist: "Stovie Wander (feat. Henry Cosdy and Slyvia Noy)",
        image: "signed-sealed.jpg",
        path: "D7lKC3r35PkP.128.mp3"
    },
    {
        name: "We Can Work It Out",
        artist: "Stovie Wander (feat. John Lemmon and Paul Macartney)",
        image: "signed-sealed.jpg",
        path: "Future - Selfish (Lost Version).mp3"
    },
    {
        name: "Signed, Sealed, Delivered I'm Yours",
        artist: "Stovie Wander (feat. Dee Garrett, Lola Day Hardaway, Saweetie Wrong)",
        image: "signed-sealed.jpg",
        path: "Future - Diamonds Dancing (Original Version).mp3"
    },
    {
        name: "Heaven Help Us All",
        artist: "Stovie Wander (feat. Ron)",
        image: "signed-sealed.jpg",
        path: "APE_FREESTYLE_COMP_IDEA.mp3"
    },
    {
        name: "Sugar",
        artist: "Stovie Wander (feat. Don)",
        image: "signed-sealed.jpg",
        path: "Future - Be Incouraged idea.01_02.mp3.mp3"
    },

]