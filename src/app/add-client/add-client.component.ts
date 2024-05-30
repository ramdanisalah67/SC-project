import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent  implements OnInit {
  myClient:Client= new Client()
  constructor(private myService:ClientService) { }

  ngOnInit() {}


  saveClient(){
    this.myService.saveClient(this.myClient).subscribe(data=>{console.log(data)})
  }
}
