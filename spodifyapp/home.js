window.onload = function() {
    let username3 = localStorage.getItem("Username2"); 
    if (username3) {
        let firstLetter = username3.charAt(0).toUpperCase();
        document.querySelector(".userName").textContent = firstLetter;
    } else {
        document.querySelector(".userName").textContent = "no username";
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    // --- PLAYER CONTROLS ---
    const shuffleIcon = document.querySelector(".bx-shuffle");
    const skipPrevIcon = document.querySelector(".bx-skip-previous");
    const playPauseIcon = document.querySelector(".bx-play-circle");
    const skipNextIcon = document.querySelector(".bx-skip-next");
    const repeatIcon = document.querySelector(".bx-repeat");
    const audioPlayer = document.querySelector(".audioPlayer");
    const progressBar = document.querySelector(".progressBar");
  
    // --- ALBUM ART + SONG INFO IN FOOTER ---
    const albumArtEl = document.querySelector(".player-album-art");
    const songTitleEl = document.querySelector(".player-song-title");
    const artistNameEl = document.querySelector(".player-artist-name");
  
    // --- LIBRARY CONTROLS ---
    const addPlaylistIcon = document.querySelector(".bx-plus"); 
    const libraryItemsContainer = document.querySelector(".library-items");
    const rightArrowIcon = document.querySelector(".bx-right-arrow-alt");
  
    // State variables
    let isPlaying = false;
    let isShuffle = false;
    let isRepeat = false;
  
    // 1. Shuffle Toggle
    shuffleIcon.addEventListener("click", function () {
      isShuffle = !isShuffle;
      shuffleIcon.style.color = isShuffle ? "green" : "";
      console.log("Shuffle:", isShuffle ? "ON" : "OFF");
    });
  
    // 2. Repeat Toggle
    repeatIcon.addEventListener("click", function () {
      isRepeat = !isRepeat;
      audioPlayer.loop = isRepeat; 
      repeatIcon.style.color = isRepeat ? "green" : "";
      console.log("Repeat:", isRepeat ? "ON" : "OFF");
    });
  
    // 3. Play/Pause Toggle (on the icon)
    playPauseIcon.addEventListener("click", function () {
      if (!isPlaying) {
        audioPlayer.play();
        isPlaying = true;
        // Switch icon from play to pause
        playPauseIcon.classList.remove("bx-play-circle");
        playPauseIcon.classList.add("bx-pause-circle");
        console.log("Audio Playing...");
      } else {
        audioPlayer.pause();
        isPlaying = false;
        // Switch icon from pause to play
        playPauseIcon.classList.remove("bx-pause-circle");
        playPauseIcon.classList.add("bx-play-circle");
        console.log("Audio Paused.");
      }
    });
  
    // 4. Skip Previous
    skipPrevIcon.addEventListener("click", function () {
      console.log("Skip to previous track (demo)...");
      // In a real app, you'd load or select the previous track in your playlist
    });
  
    // 5. Skip Next
    skipNextIcon.addEventListener("click", function () {
      console.log("Skip to next track (demo)...");
      // In a real app, you'd load or select the next track in your playlist
    });
  
    // 6. Add Playlist (Plus Icon in Library)
    addPlaylistIcon.addEventListener("click", function () {
      const playlistName = prompt("Enter new playlist name:");
      if (playlistName) {
        const newItem = document.createElement("div");
        newItem.classList.add("library-item");
        newItem.innerHTML = `
          <img src="./likedicon.png" alt="Playlist cover" />
          <div class="item-info">
            <h3>${playlistName}</h3>
            <p style="color: #47c243;">Playlist . 0 songs</p>
          </div>
        `;
        libraryItemsContainer.appendChild(newItem);
        console.log("New playlist added:", playlistName);
  
        // Optionally, attach a click handler to the new item to play something
        newItem.addEventListener("click", function () {
          console.log("Clicked on new playlist:", playlistName);
        });
      }
    });
  
    // 7. Next Arrow Icon in Library (Placeholder)
    rightArrowIcon.addEventListener("click", function () {
      console.log("Next arrow clicked! (demo)");
      // Possibly scroll the library, show next set of items, etc.
    });
  
    // 8. Clicking any library or horizontal item to play music
    //    If there's a data-src attribute with the MP3, we use it.
    function attachClickToPlayableItems() {
      // For library items
      document.querySelectorAll(".library-item").forEach(item => {
        item.addEventListener("click", function () {
          const itemInfo = item.querySelector(".item-info");
          if (!itemInfo) return;
  
          const mp3Src = itemInfo.getAttribute("data-src");
          const coverSrc = item.querySelector("img").src;
          const title = itemInfo.querySelector("h3").textContent;
          const artist = itemInfo.querySelector("p").textContent;
  
          playTrack(mp3Src, coverSrc, title, artist);
        });
      });
  
      // For horizontal items
      document.querySelectorAll(".horizontal-item").forEach(item => {
        item.addEventListener("click", function () {
          const mp3Src = item.getAttribute("data-src");
          const coverSrc = item.querySelector("img").src;
          const title = item.querySelector("h3") ? item.querySelector("h3").textContent : "Unknown Title";
          const artist = "Unknown Artist"; 
          // You could store artist in a data-artist attribute if you want.
  
          if (mp3Src) {
            playTrack(mp3Src, coverSrc, title, artist);
          } else {
            console.log("No data-src found for this item.");
          }
        });
      });
    }
  
    // 9. Function to actually play the track + update footer
    function playTrack(src, cover, title, artist) {
      if (!src) {
        console.log("No MP3 source provided.");
        return;
      }
      audioPlayer.src = src;
      audioPlayer.play();
      isPlaying = true;
      playPauseIcon.classList.remove("bx-play-circle");
      playPauseIcon.classList.add("bx-pause-circle");
      console.log(`Playing: ${title} by ${artist}`);
  
      // Update album art + text in footer
      albumArtEl.src = cover;
      songTitleEl.textContent = title;
      artistNameEl.textContent = artist;
    }
  
    // 10. Update progress bar as the song plays
    audioPlayer.addEventListener("timeupdate", function () {
      if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progressPercent;
      }
    });
  
    // 11. Seek when the user moves the slider
    progressBar.addEventListener("input", function () {
      if (audioPlayer.duration) {
        const newTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
      }
    });
  
    // Attach click handlers on page load
    attachClickToPlayableItems();
  });