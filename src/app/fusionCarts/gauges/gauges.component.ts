import { Component, OnInit } from '@angular/core';
const colorRange = {
  "color": [{
  "minValue": "0",
  "maxValue": "50",
  "code": "#e44a00"
  }, {
  "minValue": "50",
  "maxValue": "75",
  "code": "#f8bd19"
  }, {
  "minValue": "75",
  "maxValue": "100",
  "code": "#6baa01"
  }]
  };
  
  const dials = {
  "dial": [{
  "value": "67"
  }]
  };

@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.css']
})
export class GaugesComponent implements OnInit {

  dataSource: Object;
  constructor() {
  this.dataSource = {
  "chart": {
  "caption": "Customer Satisfaction Score",
  "subcaption": "Last week",
  "lowerLimit": "0",
  "upperLimit": "100",
  "theme": "fusion"
  },
  "colorRange": colorRange,
  "dials": dials
  
      }; // end of this.dataSource
  
  } // end of constructor

    ngOnInit(): void {
  }
  } // end of class AppComponent

//   ngOnInit(): void {
//   }

// }
