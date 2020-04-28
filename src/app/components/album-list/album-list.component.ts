import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.less']
})
export class AlbumListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  albumArray = [{
    cover: "/assets/images/covers/thegetaway.jpg",
    album: "The Getaway",
    info: "2016 - Esto es informacion sobre el album, descripcion y datos sobre el disco..."
  },
  {
    cover: "/assets/images/covers/imwithyou.jpg",
    album: "I'm with You",
    info: "2011 - Esto es informacion sobre el album, descripcion y datos sobre el disco..."
  },
  {
    cover: "/assets/images/covers/stadiumarcadium.jpg",
    album: "Stadium Arcadium",
    info: "2006 - Esto es informacion sobre el album, descripcion y datos sobre el disco..."
  },
  {
    cover: "/assets/images/covers/bytheway.jpg",
    album: "By the Way",
    info: "2002 - Esto es informacion sobre el album, descripcion y datos sobre el disco..."
  },
  {
    cover: "/assets/images/covers/californication.jpg",
    album: "Californication",
    info: "1999 - Esto es informacion sobre el album, descripcion y datos sobre el disco..."
  },]

}
