import { Component, OnInit } from '@angular/core';
import {MyAdat} from '../adat.model';
import {ListServiceService} from '../list-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  adat = new MyAdat();
  constructor(private service: ListServiceService) { }

  ngOnInit(): void {
  }

  save(): void{
    this.service.array.push(this.adat);
    this.adat = new MyAdat();
  }

}
