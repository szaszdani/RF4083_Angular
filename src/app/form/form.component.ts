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

  save(): boolean{
    if (this.adat.name.length > 5 && this.adat.year_established > 0 && this.adat.year_established < 2021 && this.adat.country.length > 5 && this.adat.url.length > 8)
    {
      this.service.array.push(this.adat);
      this.adat = new MyAdat();
      alert('Sikeresen hozáadta a listához!');
      return true;
    }
    else
    {
      alert('Kérem adjon meg helyes adatokat!');
      return false;
    }
  }

}
