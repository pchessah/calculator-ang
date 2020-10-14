import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operators = ["+", "-", "*", "/"];
  valsArr: any[] = [];
  vals: number = 0;
  operator: string;
  toBeEvaluated: any[] = []; 

  enteredVal(num): void {
    this.operator=""
    this.valsArr = [...this.valsArr, num];
    this.valsArr = this.valsArr.join("").split(" ")
    this.vals = parseInt(this.valsArr.join(""));
  }

  enteredOperator(operator): void{
   this.toBeEvaluated =[...this.toBeEvaluated, this.vals, operator]  
   this.operator=operator;
   this.valsArr = [];
  }

  compute(): void{
    if(this.valsArr.length>0){
      this.toBeEvaluated = [...this.toBeEvaluated, this.vals];
      let a = this.toBeEvaluated.join(" ");
      let ans  = eval(a);
      this.toBeEvaluated = []
      this.valsArr = [ans];
      this.vals = ans; 
      this.operator="=" ;  
    } else {
      let a = this.toBeEvaluated.join(" ");
      let ans  = eval(a);
      this.toBeEvaluated = []
      this.valsArr = [ans];
      this.vals = ans; 
      this.operator="=" ;  
    }   
  }

  clear(): void{
    this.valsArr = [];
    this.vals = 0;
    this.operator="";
    this.toBeEvaluated = [];
  }

  deleteOne(): void{
    this.valsArr=(this.valsArr.join("").split(""));
    this.valsArr.pop();
    this.valsArr = this.valsArr.join("").split(" ")
    this.vals = parseInt(this.valsArr.join(""));
  }

}
