import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.less']
})
export class SongListComponent implements OnInit {

  constructor(private _playlistService: PlaylistService) { }

  songsArray = [{
		title: "Warped",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "Aeroplane",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "Deep Kick",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "My Friends",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "Cofee Shop",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "Pea",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "One Big Mob",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "Walkabout",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "Tearjerker",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "One Hot Minute",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "Falling into Grace",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "Shallow By Thy Name",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
  },
  {
		title: "Transcending",
		cover: "/assets/images/portada-mago.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
	}];

  ngOnInit() {
  }

  addToPlaylist = (song: JSON) => {
		this._playlistService.addToPlaylist(song);
	}

}
