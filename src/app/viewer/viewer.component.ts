import { Component, OnInit } from '@angular/core';
import { create } from 'ipfs-http-client';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  title =  'El titulo'
  urlvideo = 'url video'
  description = 'descripcióin'
  urlButton = 'url boton'
  textButton = 'texto boton'
  constructor() { }


  async init(){
    //const IPFS = ('ipfs-mini');
    const ipfs = create({host:'http://ipfs.infura.io:5001'});
    const data = "this is the first free funnel test";
    const file = await ipfs.add(data);
    console.log(file)
  }
   ngOnInit() {
    this.init()
    
  }

}
