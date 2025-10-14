import { Component } from '@angular/core';
import { Home } from '../home/home';

@Component({
  selector: 'app-layout',
  imports: [Home],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
