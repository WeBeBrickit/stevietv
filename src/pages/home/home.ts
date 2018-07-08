import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
// import { YT } from 'https://www.youtube.com/iframe_api';

declare var YT;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  video_id: any;
  done: boolean;
  player: any;

  constructor(public navCtrl: NavController,
    public sanitizer: DomSanitizer) {

      this.video_id = 'tkzY_VwNIek';
      

      this.done = false;
  }



  ionViewDidLoad() {
      console.log('ionViewDidLoad VideoSinglePage');

      this.datBoi();
  }

  updateVideoUrl(id: string) {
      // Appending an ID to a YouTube URL is safe.
      // Always make sure to construct SafeValue objects as
      // close as possible to the input data, so
      // that it's easier to check if the value is safe.
      let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&controls=0';
      return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
      
  }

  datBoi() {
      console.log(document.getElementById('mainBoi'));
      let iFrizz = document.getElementById('mainBoi');
      let innerDoc = iFrizz.contentDocument || iFrizz.contentWindow.document;
      console.log(innerDoc.getElementById('video'));
  }

  

  onYouTubeIframeAPIReady() {
    this.player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: this.video_id,
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !this.done) {
      setTimeout(this.stopVideo, 6000);
      this.done = true;
    }
  }

  stopVideo() {
    this.player.stopVideo();
  }
  

}
