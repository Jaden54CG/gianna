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
  { id: "3Kh7jZ6QdVJJq63A3xRneN", title: "Again & Again", artist: "The Bird and the Bee", cover: "https://i.scdn.co/image/ab67616d0000b273485396dfe12cd25c4f743873" },
];

window.SONG_PINS = {
  "2026-11-22": "3Kh7jZ6QdVJJq63A3xRneN",
};
