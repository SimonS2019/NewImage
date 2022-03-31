import { Component, OnInit } from '@angular/core';
// const colorRange = {
//   "color": [{
//     "minValue": "10",
//     "maxValue": "50",
//     "code": "#e44a00"
//   }, {
//     "minValue": "50",
//     "maxValue": "75",
//     "code": "#f8bd19"
//   }, {
//     "minValue": "75",
//     "maxValue": "100",
//     "code": "#6baa01"
//   }]
// };

// const dials = {
//   "dial": [{
//     "value": "67"
//   }]
// };


@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {

  dataSource: Object;
  constructor() {
    this.dataSource = {
      "chart": {
        "caption": "Temperature Monitor",
        "subcaption": " Central cold store",
        "lowerLimit": "-10",
        "upperLimit": "0",

        "decimals": "1",
        "numberSuffix": "°C",
        "showhovereffect": "1",
        "thmFillColor": "#008ee4",
        "showGaugeBorder": "1",
        "gaugeBorderColor": "#008ee4",
        "gaugeBorderThickness": "2",
        "gaugeBorderAlpha": "30",
        "thmOriginX": "100",
        "chartBottomMargin": "20",
        "valueFontColor": "#000000",
        "theme": "fusion"
      },
      "value": "-6",
      //All annotations are grouped under this element
      "annotations": {
        "showbelow": "0",
        "groups": [{
          //Each group needs a unique ID
          "id": "indicator",
          "items": [
            //Showing Annotation
            {
              "id": "background",
              //Rectangle item
              "type": "rectangle",
              "alpha": "50",
              "fillColor": "#AABBCC",
              "x": "$gaugeEndX-40",
              "tox": "$gaugeEndX",
              "y": "$gaugeEndY+54",
              "toy": "$gaugeEndY+72"
            }
          ]
        }]

      },

    } // end of constructor
  }
    ngOnInit(): void {
    }
  } // end of class AppComponent

//   ngOnInit(): void {
//   }

// }
