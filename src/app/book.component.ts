import { Component , OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<h1>{{name}}</h1>',
  styleUrls: ['./app.component.css']
})
export class BookComponent implements OnInit, OnDestroy{
  constructor(private route: ActivatedRoute) {}
  name: string;
 private sub: any;
  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        this.name = params['name']; 
     });
   }

   ngOnDestroy() {
     this.sub.unsubscribe();
   }
}
