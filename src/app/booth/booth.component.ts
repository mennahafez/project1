import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booth',
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.scss']
})
export class BoothComponent implements OnInit {

  audio = new Audio();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  toArticle(): void {
    this.router.navigate(['computer']);
  }

  playTune(): void {
    this.audio.src = './assets/creativeminds.mp3';
    this.audio.load();
    this.audio.play();
  }

  toStart(): void {
    this.router.navigate(['']);
  }

}
