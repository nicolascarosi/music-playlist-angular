import { EventEmitter, Injectable } from '@angular/core';    

@Injectable()
export class PlaylistService {

  newSong = new EventEmitter<JSON>();

  addToPlaylist(song: JSON) {
    this.newSong.emit(song);
  }
}