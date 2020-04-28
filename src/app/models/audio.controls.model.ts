export class AudioControls  {
    public static audio: any;
    public static audioControl: any;
    public static progressBar: any;
    public static currentProgress: any;
    public static volumeBar: any;
    public static isPlaying: boolean = false;
    public static duration: number;
    public static currentTime: string = '00:00';
    public static totalTime: string;
    public static song: any = {
        title: "Molinos de Viento",
		cover: "/assets/images/portada-mago.jpg",
		album: "La Leyenda de la Mancha",
		artist: "Mago de Oz",
		audio: "/assets/music/unit_created.mp3"
    }
}