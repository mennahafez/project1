import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {

  openDoors: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public async open(): Promise<void> {
    this.openDoors = !this.openDoors;
    await this.delay(1000);
    this.router.navigate(['studio']);
  }

}
