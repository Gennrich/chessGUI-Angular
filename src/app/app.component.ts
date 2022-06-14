import { Component, OnInit } from '@angular/core';
//import { spawn } from 'node:child_process';

declare var startGame: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'basicchess';
  thLogo2:string = 'assets/images/th_logo2.svg.png';
  chessFieldWithRand:string = 'assets/images/chessFieldWithRand.png';

  ngOnInit() {
    new startGame(7);
  }
}
