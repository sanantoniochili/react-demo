import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import L from "leaflet";

// Create a custom rotating ship icon
const createShipIcon = (heading) => {
  return L.divIcon({
    className: "ship-icon",
    html: `<div style="
      transform: rotate(${heading}deg);
      width: 20px;
      height: 20px;
      background: url('/ship-arrow.png') no-repeat center;
      background-size: contain;
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  });
};

function App() {
  const [ships, setShips] = useState({});
  
  // Effects:
  // --------
  // Effects let you specify side effects that are caused by rendering itself, 
  // rather than by a particular event. An event is directly caused by the user, 
  // effects should happen no matter which interaction caused the component 
  // to appear.

  useEffect(() => {
    const socket = new SockJS("https://localhost:8443/ws");
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Connected to WebSocket (SockJS)");

        stompClient.subscribe("/topic/locations", (message) => {
          try {
            const newShip = JSON.parse(message.body);
            console.log("Received WebSocket Data:", newShip);

            setShips((prevShips) => ({
              ...prevShips,
              [newShip.mmsi]: newShip, // Store ships using MMSI as key
            }));
          } catch (error) {
            console.error("Error parsing WebSocket message:", error);
          }
        });
      },
      onStompError: (frame) => {
        console.error("STOMP Error:", frame.headers["message"]);
      },
    });

    stompClient.activate();

    // Cleanup functions:
    // ------------------
    // When you return a function from useEffect, 
    // React will call that function:
    // Before the component unmounts, or    
    // Before the effect runs again, if the dependencies have changed.
    return () => stompClient.deactivate();
  }, []);

  return (
    <div>
      <h1>Live Kafka Ship Map</h1>
      <MapContainer center={[37.9838, 23.7275]} zoom={6} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {Object.values(ships).map((ship) => (
          <Marker
            key={ship.mmsi}
            position={[ship.lat, ship.lon]}
            icon={createShipIcon(ship.heading || ship.course || 0)} //Rotate based on heading or course
          >
            <Popup>
              <strong>Ship MMSI:</strong> {ship.mmsi} <br />
              <strong>Status:</strong> {ship.status} <br />
              <strong>Speed:</strong> {ship.speed} knots <br />
              <strong>Turn Rate:</strong> {ship.turn}°/min <br />
              <strong>Course:</strong> {ship.course}° <br />
              <strong>Heading:</strong> {ship.heading}° <br />
              <strong>Timestamp:</strong> {new Date(ship.timestamp * 1000).toLocaleString()} <br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
