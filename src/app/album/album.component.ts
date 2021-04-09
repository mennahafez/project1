import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums: {}[] = [
    {
      title: 'Astroworld',
      img: './assets/astroworld.png',
      song: './assets/astroworld.mp3'
    },
    {
      title: 'Starboy',
      img: './assets/starboy.png',
      song: './assets/starboy.mp3'
    },
    {
      title: 'Peaches',
      img: './assets/peaches.png',
      song: './assets/peaches.mp3'
    }
  ];

  audio = new Audio();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  playTune(song: string): void {
    this.audio.src = song;
    this.audio.load();
    this.audio.play();
  }

  toStudio(): void {
    this.router.navigate(['studio']);
  }

}
