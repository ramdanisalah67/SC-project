import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent  implements OnInit {
  @ViewChild('test') parentDiv!: ElementRef;
  constructor(private router:Router) { }

  ngOnInit() {}



  goToHome(i:number){
    const pElements = this.parentDiv.nativeElement.querySelectorAll('p');
    console.log(pElements)
    if (pElements.length >= 3) {
      const thirdP = pElements[i-1]; 
      thirdP.style.color = 'blue'; 
      thirdP.style.fontWeight = 'bold'; 
    }
    
  }
  


}
