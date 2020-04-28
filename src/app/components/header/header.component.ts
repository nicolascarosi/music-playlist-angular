import { Component, OnInit, IterableDiffers } from '@angular/core';
import { SlideInOutAnimation } from 'src/app/animation';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PlaylistService } from 'src/app/services/playlist.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from 'src/app/services/modal.service';
import { AudioControls } from 'src/app/models/audio.controls.model';
import { MatSnackBar } from '@angular/material/snack-bar';

const ID: string = "audio"; //audio as default value

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
	animations: [SlideInOutAnimation]
})

export class HeaderComponent implements OnInit {


	constructor(
		private _playlistService: PlaylistService,
		public dialog: MatDialog,
		public modal: ModalService,
		private _iterableDiffers: IterableDiffers,
		private _snackBar: MatSnackBar
	) {
		this.iterableDiffer = this._iterableDiffers.find([]).create(null);
	}

	iterableDiffer: any;
	audioControls: any = AudioControls;
	animationState: string = 'out';
	songToDelete: any = [];

	songsArray: any = [{
		title: "Molinos de Viento",
		cover: "/assets/images/portada-mago.jpg",
		album: "La Leyenda de la Mancha",
		artist: "Mago de Oz",
		audio: ""
	},
	{
		title: "One Hot Minute",
		cover: "/assets/images/portada.jpg",
		album: "One Hot Minute",
		artist: "Red Hot Chili Peppers",
		audio: ""
	},
	{
		title: "Go Robot",
		cover: "/assets/images/covers/thegetaway.jpg",
		album: "The Getaway",
		artist: "Red Hot Chili Peppers",
		audio: ""
	},
	{
		title: "Black",
		cover: "/assets/images/pearl-jam.jpg",
		album: "Ten",
		artist: "Pearl Jam",
		audio: ""
	}];

	ngOnInit() {
		this.initPlayerControls();
		this._playlistService.newSong.subscribe(song => {
			this.songsArray.push(song);
			this.openSnackBar(song.title + ' se añadidió a la playlist!', '');
		});
	}

	initPlayerControls = (): void => {
		this.audioControls.currentProgress = <HTMLElement>document.querySelector(" #progress-bar > .current-progress");
		this.audioControls.audio = <HTMLAudioElement>document.getElementById(ID);
		this.audioControls.currentProgress.style.width = "0%";
		this.audioControls.volumeBar = <HTMLElement>document.querySelector(".volume");
		this.audioControls.audioControl = <HTMLElement>document.querySelector(".play-pause");
		this.audioControls.progressBar = <HTMLElement>document.querySelector(".progress-bar");
	}

	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
			duration: 2000, 
			horizontalPosition: 'left',
		});
	}

	//Player behavior

	play = (): void => {
		this.audioControls.audio.play();
		this.audioControls.isPlaying = true;
		document.querySelector(".bar-container").classList.remove("disabled");
	};

	pause = (): void => {
		this.audioControls.audio.pause();
		this.audioControls.isPlaying = false;
		document.querySelector(".bar-container").classList.add("disabled");
	}

	mute = (): void => {
		let elem = document.querySelector("#volume");
		if (this.audioControls.audio.muted) {
			this.audioControls.audio.muted = false;
			elem.className = "";
			elem.classList.add("component", "fa", "fa-volume-up");
		}
		else {
			this.audioControls.audio.muted = true;
			elem.className = "";
			elem.classList.add("component", "fa", "fa-volume-off");
		}
	}

	togglePlaylist = (div: string): void => {
		if (div === 'playlistMenu') {
			this.animationState = this.animationState === 'out' ? 'in' : 'out';
		}
	}

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.songsArray, event.previousIndex, event.currentIndex);
	}


	entered = (): void => {
		console.log("le paso por arriba");
	}

	onDropDelete = (event: CdkDragDrop<string[]>) => {
		this.openSnackBar('Se quitó ' + this.songsArray[event.previousIndex].title + ' de la playlist', '')
		transferArrayItem(this.songsArray, this.songToDelete, event.previousIndex, 0);
	}

	playSelected = (item: {}, index: number): void => {
		this.audioControls.song = item;
		this.initPlayerControls();
		document.querySelector("#track_element_" + index).classList.add('selected');
		setTimeout(() => { this.songsArray.splice(index, 1); }, 300);
	}

	//Player events

	onLoadedMetadata = (): void => {
		this.audioControls.duration = this.audioControls.audio.duration;
		let minutes = (Math.floor(this.audioControls.duration / 60));
		let seconds = (Math.floor(this.audioControls.duration - minutes * 60))
		this.audioControls.totalTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
	}

	onEnded = (): void => {
		document.querySelector(".bar-container").classList.add("disabled");
	}

	onTimeUpdate = (): void => {
		let currentTime = this.audioControls.audio.currentTime;
		let minutes = (Math.floor(currentTime / 60));
		var seconds = (Math.floor(currentTime - minutes * 60)).toString();
		seconds.length === 1 ? seconds = "0" + seconds : null;
		this.audioControls.currentTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
		let progress = (currentTime / this.audioControls.duration) * 100;
		this.audioControls.currentProgress.style.width = progress + "%";
	}

	progressBarClick = (e): void => {
		let value = e.offsetX * 100 / this.audioControls.progressBar.clientWidth;
		this.audioControls.currentProgress.style.width = value + "%";
		this.audioControls.audio.currentTime = this.audioControls.duration * (value / 100);
	}

	volumeBarClick = (e): void => {
		let value = e.offsetX * 100 / this.audioControls.volumeBar.clientWidth;
		let elem = document.querySelector("#volume");
		if (value < 0) {
			this.audioControls.audio.volume = 0;
		}
		else {
			this.audioControls.audio.volume = value / 100;
		}
		if (this.audioControls.audio.volume === 0) {
			elem.className = "";
			elem.classList.add("component", "fa", "fa-volume-off");
		}
		else if (this.audioControls.audio.volume < 0.30) {
			elem.className = '';
			elem.classList.add("component", "fa", "fa-volume-down");
		}
		else if (this.audioControls.audio.volume >= 0.30) {
			elem.className = '';
			elem.classList.add("component", "fa", "fa-volume-up");
		}
	}

	audioControlClick = (): void => {
		if (this.audioControls.audio.paused || this.audioControls.audio.ended) {
			this.play();
		} else if (this.audioControls.audio.play) {
			this.pause();
		}
	}

}
