import {Injectable} from "@angular/core";
import {DataSource, GeoJsonDataSource} from "cesium";
import * as Cesium from "cesium";

@Injectable()
export class CesiumService {

  loadJSON(viewer: Cesium.Viewer) {
    const geoJSONURL = "../assets/objects.json"

    const geoJSON: Promise<GeoJsonDataSource> = Cesium.GeoJsonDataSource.load(geoJSONURL,
      {stroke: Cesium.Color.YELLOW,
              strokeWidth: 10,
              fill: Cesium.Color.YELLOW.withAlpha(0.4) })

    const dataSource: Promise<DataSource> = viewer.dataSources.add(geoJSON)
    viewer.flyTo(dataSource)

  }


}
