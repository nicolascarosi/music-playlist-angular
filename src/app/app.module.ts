import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalConfirmComponent } from './components/modals/modal-confirm/modal-confirm.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlaylistService } from './services/playlist.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalService } from './services/modal.service';
import { DomChangeDirective } from './services/dom-change.directive';
import { SongListComponent } from './components/song-list/song-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { RelatedArtistsComponent } from './components/related-artists/related-artists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalConfirmComponent,
    DomChangeDirective,
    SongListComponent,
    AlbumListComponent,
    RelatedArtistsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  entryComponents: [ ModalConfirmComponent ],
  providers: [
    PlaylistService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
