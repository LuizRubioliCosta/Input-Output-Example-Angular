import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

 @Output() sendName = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit(): void {
  }

  SendName(value:string){
    if(value !== ''){
    this.sendName.emit(value)
    
  }
}

}
