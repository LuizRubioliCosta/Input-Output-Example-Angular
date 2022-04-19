import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'inputOutput';
  names: string[] = []; 

  addName(name:string){
    this.names.push(name)
  }
}
