import React from "react";
import {
  layer,
  Map,
  Layers, //objects
} from "react-openlayers";

function Mymaps() {
  return (
    <>
      <Map view={{ center: [0, 0], zoom: 2 }}>
        <Layers>
          <layer.Tile />
          <layer.Vector />
        </Layers>
      </Map>
    </>
  );
}
export default Mymaps;
