import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import {debounceTime, tap,  map, } from 'rxjs/operators';

// import { Bank, BANKS } from '../demo-data';

import {
   distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { SearchService } from '../search.service';
import { IUserResponse, User } from '../user.class';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  implements OnInit {

  filteredUsers$: Observable<IUserResponse>;
  usersForm: FormGroup;

  constructor(private fb: FormBuilder, private appService: SearchService) {}

  ngOnInit(): void {
    this.usersForm = this.fb.group({
      userInput: null
    });

    this.filteredUsers$ = this.usersForm.get('userInput').valueChanges
      .pipe(
        debounceTime(300),  distinctUntilChanged(),
        switchMap(value => this.appService.search({name: value}, 1))
      );
  }

  displayFn(user: User) {
    if (user) { return user.name; }
  }

}
