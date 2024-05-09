import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => import("./components/weather-map/weather-map"),
  { ssr: false },
);

export default function WeatherPage() {
  return <MapComponent />;
}
