import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  // @Input() name: string ='';
  private nameStr: string ='';  // 从父组件传过来的name值，进行大写转化，被重新赋值的参数
@Input()
  set name(value: string) {
    console.log(value);
    
    this.nameStr = value.toUpperCase();
    console.log(this.nameStr);

  }
  get name(): string {
    console.log(this.nameStr);

    return this.nameStr;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
