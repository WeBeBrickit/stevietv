import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  video_id: any;

  constructor(public navCtrl: NavController,
    public sanitizer: DomSanitizer) {

      this.video_id = 'tkzY_VwNIek';
      // let tag = document.createElement('script');

      // tag.src = "https://www.youtube.com/iframe_api";
      // let firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
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
  }

  // onYouTubeIframeAPIReady() {
  //   this.player = new YT.Player('player', {
  //     height: '390',
  //     width: '640',
  //     videoId: 'M7lc1UVf-VE',
  //     events: {
  //       'onReady': onPlayerReady,
  //       'onStateChange': onPlayerStateChange
  //     }
  //   });
  // }
  

}
