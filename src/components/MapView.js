import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const [mapData, setMapData] = useState({
    center: [20.5937, 78.9629],
    zoom: 5,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/map", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => setMapData(response.data));
  }, []);

  return (
    <div className="container-fluid p-0">
      <MapContainer
        center={mapData.center}
        zoom={mapData.zoom}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default MapView;
