import React, { useRef, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../maps/Maps.css";

export default function Maps() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 38.01635,
    lng: 23.83443
  });
  

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAdggodvWELACB2MuiZT_aNS7AcEd9AOg",
    libraries: ["places"]
  });

  const autocompleteInputRef = useRef(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (!autocompleteInputRef.current) return;
    
    const autocomplete = new window.google.maps.places.Autocomplete(autocompleteInputRef.current);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        setSelectedLocation(location);
      }
    });
  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="central_maps">
      <div className="maps_div">
        <input ref={autocompleteInputRef} placeholder="Enter a location" />
        <GoogleMap
          zoom={15}
          center={selectedLocation}
          mapContainerClassName="maps"
        >
        <Marker position={selectedLocation} />
        </GoogleMap>
      </div>
    </div>
  );
}
