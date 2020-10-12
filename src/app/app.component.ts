import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  keys = [1,2,3,4,5,6,7,8,9,0];
  keyBoardVals: number;
  valsArr: number[] = [];
  vals;

  enteredVal(num): void{
    this.valsArr = [...this.valsArr, num]
    this.vals=parseInt(this.valsArr.join(""));
    console.log(this.vals);
  }

  
}
