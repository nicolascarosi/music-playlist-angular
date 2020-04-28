import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-artists',
  templateUrl: './related-artists.component.html',
  styleUrls: ['./related-artists.component.less']
})
export class RelatedArtistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  relatedArtists = [{
		artist: "Foo Fighters",
		image: "/assets/images/foo-fighters.jpg",
		albums: "10",
  },
  {
		artist: "Audioslave",
		image: "/assets/images/audioslave.jpeg",
		albums: "3",
  },
  {
		artist: "Nirvana",
		image: "/assets/images/nirvana.jpg",
		albums: "15",
  },
  {
		artist: "Jane's Addiction",
		image: "/assets/images/janes-adiction.jpg",
		albums: "10",
  },
  {
		artist: "Pearl Jam",
		image: "/assets/images/pearl-jam.jpg",
		albums: "17",
  }]

}
