import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice-operation',
  templateUrl: './choice-operation.component.html',
  styleUrls: ['./choice-operation.component.scss'],
})
export class ChoiceOperationComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}



  goToAddClient(){
    this.router.navigate(['addClient'])
  }
}
