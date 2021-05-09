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
    console.log(this.service.array);
    if (this.service.array.length === 0){
      this.service.fetch().subscribe(
        (data: any) => this.service.array = data,
        error => console.log(error),
        () => console.log(this.service.array)
      );
    }
  }

}
