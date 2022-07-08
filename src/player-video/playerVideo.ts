interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  play: HTMLButtonElement;
  stop: HTMLButtonElement;
}

interface VideoPlayerState {
  playToggle(): void;
  stop(): void;
  startEvents(): void;
}

export default class VideoPlayer implements VideoPlayerState {
  private videoPlayer: HTMLVideoElement;
  private playBtn: HTMLButtonElement;
  private stopBtn: HTMLButtonElement;

  constructor(VideoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = VideoPlayerElements.videoPlayer;
    this.playBtn = VideoPlayerElements.play;
    this.stopBtn = VideoPlayerElements.stop;
  }

  startEvents(): void {
    this.playBtn.addEventListener('click', () => {
      this.playToggle();
    });
    this.stopBtn.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playBtn.innerText = 'Play';
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playBtn.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playBtn.innerText = 'Play';
    }
  }
  stop(): void {
    //
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  play: document.querySelector('.play') as HTMLButtonElement,
  stop: document.querySelector('.stop') as HTMLButtonElement,
});

videoPlayer.startEvents();
