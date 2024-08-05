"use client";
import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export default function MapCustom() {
  useEffect(() => {
    const osmLayer = new TileLayer({
      preload: Infinity,
      source: new OSM(),
    });

    const map = new Map({
      target: "map",
      layers: [osmLayer],
      view: new View({
        center: [0, 0],
        zoom: 0,
      }),
    });
    return () => map.setTarget(undefined);
  }, []);

  return <div id="map" className="map-container w-full h-full" />;
}
