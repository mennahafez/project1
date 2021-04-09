import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  toArticle(): void {
    this.router.navigate(['computer']);
  }

  toBooth(): void {
    this.router.navigate(['booth']);
  }

}
