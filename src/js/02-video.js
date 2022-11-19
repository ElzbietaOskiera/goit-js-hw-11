import '../css/common.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Vimeo.Player(iframe);
const KEY = 'videoplayer-current-time';

player.on('play', () => {
  console.log('played the video!');
});

player.getVideoTitle().then(title => {
  console.log('title:', title);
});

const savePlayerTime = ({ duration, percent, seconds }) => {
  console.log(seconds);
  localStorage.setItem(KEY, seconds);
};

const throttled = throttle(savePlayerTime, 1000, { trailing: false });

player.on('timeupdate', throttled);

const end = () => {
  player.off('timeupdate', throttled);
  localStorage.removeItem(KEY)
}

player.on('ended', end)

const savedTime = localStorage.getItem(KEY);

if (savedTime) {
  player.setCurrentTime(savedTime);
}