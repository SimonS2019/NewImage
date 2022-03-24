import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-dash',
  templateUrl: './image-dash.component.html',
  styleUrls: ['./image-dash.component.css']
})
export class ImageDashComponent implements OnInit {
  // image1: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeU_b1Je2DhEEeb1FSh6bDb4OeSfH1o18DMA&usqp=CAU";
  image1: string = "https://d1fx1uext1g2yz.cloudfront.net/_boxman/Library/Product/Item/f_123_01_20ft_standard_container.jpg";
    // image2: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeU_b1Je2DhEEeb1FSh6bDb4OeSfH1o18DMA&usqp=CAU";
  image2: string = "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1639761322/wired_wired-news-and-science-supply-chain.jpg";
  image3: string = "https://i.stack.imgur.com/ZiRki.png";
  image4: string = "https://i.stack.imgur.com/ZiRki.png";
  image5: string = "https://www.litmus.com/wp-content/uploads/2021/02/motion-tween-example.gif";
  image6: string = "http://static.opendi.com/yellow/production/nz/101660/images/10094.jpg";
  // image6: string = "http://ds-overdesign.com/images/sample.jpg";
  // image3: string = "https://www.getpaint.net/doc/latest/images/layerswindow/appletransparentbg.png";
  htmlString = '<h1>Hello gowtham</h1>';
  htmlString1 = '<button mat-button color="primary">Primary</button>';


  constructor() { }

  ngOnInit(): void {
  }

}
