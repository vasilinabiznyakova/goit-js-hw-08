import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const onPlay = function({seconds}) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);      
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime).then(function(seconds) {
    // `seconds` indicates the actual time that the player seeks to
  }).catch(function(error) {
    switch (error.name) {
      case 'RangeError':
          // The time is less than 0 or greater than the video's duration
          break;
      default:
          // Some other error occurred
          break;
    }
  });   