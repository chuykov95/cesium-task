import {Component, OnInit} from '@angular/core';
import {DataSource, EntityCollection, GeoJsonDataSource, Viewer} from "cesium";
import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZTE1ZjkyMS0wZTQ0LTRiODMtYjA2OS1mNGM2M2QzYzEwOWIiLCJpZCI6NzIzNjEsImlhdCI6MTYzNTk3MTA5Mn0.iCIWW3nNh3X6x0kTUsjefKiMwmR3hFEQbLJldrYozwY';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Arr = Array
  countMap: number = 4
  activeMap: number = 0

  constructor() {
  }

  ngOnInit() {
  }


}
