import { Component, OnInit } from '@angular/core';
import {ListServiceService} from '../list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public service: ListServiceService) { }

  ngOnInit(): void {
    if (this.service.array.length === 0){
      this.service.fetch().subscribe(
        (data: any) => this.service.array = data,
        error => console.log(error),
        () => console.log(this.service.array)
      );
    }
  }

  // tslint:disable-next-line:typedef
  delRow(name){
    for (let i = 0; i < this.service.array.length; ++i)
    {
      if (this.service.array[i].name === name){
        this.service.array.splice(i, 1);
      }
    }
  }

}
