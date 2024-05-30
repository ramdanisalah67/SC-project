import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../Models/Client';

@Component({
  selector: 'app-all-client',
  templateUrl: './all-client.component.html',
  styleUrls: ['./all-client.component.scss'],
})
export class AllClientComponent  implements OnInit {

  clients:Client[]=[]
  constructor(private myService:ClientService) { }

  ngOnInit() {
    this.myService.allClient().subscribe(data=>{
      this.clients=data
      console.log(this.clients)
    })
  }

}
