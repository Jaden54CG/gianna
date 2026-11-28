// SONG OF THE DAY
// The Playlist tab shows one song a day, picked from this list. The pick rotates through every
// song before repeating, and it is the same for everyone on a given day.
//
// ADD SONGS: paste a line like the one below into SONGS. Easiest way: open write.html, paste the
// Spotify song links, copy the snippet, and paste it here. Only "id" is required. If you leave out
// title, artist or cover, the page tries to fill them in from Spotify.
//
// CHOOSE A DAY: add a line to SONG_PINS to force a specific song on a specific date.

window.SONGS = [
  {
    id: "7GOJJ7LsEePHTsI8mulxbW",
    title: "Tokyo Drift X Gypsy Woman",
    artist: "NovaX",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b4e084271aa33b8729160883"
  },
];

window.SONG_PINS = {
  "2026-11-28": "7GOJJ7LsEePHTsI8mulxbW",
};
