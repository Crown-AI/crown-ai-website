"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@mui/material";
import { LatLngTuple } from "leaflet";
import "../globalicons.css";
import { useRouter } from "next/navigation";

interface MapComponentProps {
  center: LatLngTuple;
  zoom: number;
}

const fetchWeather = async (latitude: number, longitude: number) => {
  const apiKey = "681a847ebddfec8c90bc96ae7e0af34e";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
interface WeatherData {
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
  }>;
}

interface WeatherSidebarProps {
  weatherData: WeatherData | null;
}

const WeatherSidebar: React.FC<WeatherSidebarProps> = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div
      className="weather-sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: 0,
        top: 0,
        alignItems: "center",
        zIndex: 999,
        backgroundColor: "rgba(128, 128, 128, 0.4)",
        width: "100%",
      }}
    >
      <br />
      <p>Temperature: {weatherData.main.temp}K</p>
      <br />
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};

const MapComponent: React.FC<MapComponentProps> = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom);
  }, [center, zoom, map]);

  return null;
};

export default function MappingBoard() {
  const [view, setView] = useState<LatLngTuple>([51.505, -0.09]);
  const [zoom, setZoom] = useState(13);
  const [weatherData, setWeatherData] = useState(null);
  const router = useRouter();

  const navigateBackwards = () => {
    router.back();
  };
  const zoomToUserLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const userLatLng: LatLngTuple = [latitude, longitude];
        setView(userLatLng);
        setZoom(13);

        // Fetch weather data for the user's location
        const weather = await fetchWeather(latitude, longitude);
        setWeatherData(weather);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <MapContainer
        center={view}
        zoom={zoom}
        style={{
          display: "flex",
          position: "absolute",
          height: "100vh",
          width: "100%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapComponent center={view} zoom={zoom} />
      </MapContainer>
      <span
        className="material-symbols-outlined"
        onClick={zoomToUserLocation}
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1900,
          cursor: "pointer",
        }}
      >
        my_location
      </span>
      <span className="material-symbols-outlined" id="arrow">
        arrow_back
      </span>
      <WeatherSidebar weatherData={weatherData} />
    </div>
  );
}
