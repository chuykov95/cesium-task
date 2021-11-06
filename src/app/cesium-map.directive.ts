import {Directive, ElementRef, OnInit} from '@angular/core';
import * as Cesium from "cesium";
import {CesiumService} from "./cesium.service";

@Directive({
  selector: '[appCesiumMap]'
})
export class CesiumMapDirective implements OnInit {

  viewer: Cesium.Viewer

  options2D = {
    animation: false,
    baseLayerPicker: false,
    homeButton: false,
    vrButton: false,
    fullscreenButton: false,
    sceneModePicker: false,
    infoBox: false,
    geocoder: false,
    timeline: false,
    sceneMode: Cesium.SceneMode.SCENE2D,
    navigationHelpButton: false,
  }

  constructor(private el: ElementRef, private cesiumService: CesiumService) {
    this.viewer = new Cesium.Viewer(this.el.nativeElement, this.options2D)
    cesiumService.loadJSON(this.viewer)

  }

  ngOnInit() {


  }

}
