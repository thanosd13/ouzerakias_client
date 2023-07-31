import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Footer from "../footer/Footer";
import "../maps/Maps.css";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function Maps() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          // Handle error
          console.log(error);
          alert('Could not fetch your location.');
        }
      );
    } else {
      // Browser doesn't support Geolocation
      console.log("Browser does not support geolocation.");
      alert('Browser does not support geolocation.');
    }
    
  }, []);

  if (!location) {
    return <p>Loading map...</p>;
  }

  return (
    <div>
      <div className="container-maps">
        <LoadScript googleMapsApiKey="AIzaSyBYMRPzNt1sHFJ50_aHvSo172BEtfL2cpM">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={14}
          >
            {/* Child components, like markers, info windows, etc. */}
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
        <Footer />
      </div>
    </div>
  );
}

export default React.memo(Maps);
