import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Pet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  pet: Pet = {
    petImageId: 1,
    name: 'テストペット',
    exp: 200,
    level: 4,
    gender: 'male',
    trainerId: '1',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
