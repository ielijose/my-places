import { GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGeolocation } from 'react-use';
import uuid from 'uuid';
import { DEFAULT_MAP_CENTER, DEFAULT_PLACE_NAME, DEFAULT_ZOOM } from '../../constants';
import { addPlace, setUserLocation } from '../../store/places/actions';
import { StyledMap, StyledMapContainer } from './styles';

const Map = (props) => {
  const geolocation = useGeolocation();
  const dispatch = useDispatch();
  const { places, userLocation } = useSelector((state) => state.places);

  const [center, setCenter] = useState(userLocation || DEFAULT_MAP_CENTER);

  useEffect(() => {
    if (!geolocation.loading && geolocation.latitude && geolocation.longitude) {
      const location = {
        lat: geolocation.latitude,
        lng: geolocation.longitude,
      };
      setCenter(location);
      dispatch(setUserLocation(location));
    }
  }, [geolocation]);

  const onMapClicked = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    const name = prompt('Please enter your place name: ') || DEFAULT_PLACE_NAME;
    const place = {
      lat,
      lng,
      id: uuid.v4(),
      name,
    };

    dispatch(addPlace(place));
  };

  return (
    <StyledMap google={props.google} onClick={onMapClicked} center={center} zoom={DEFAULT_ZOOM}>
      {places.map((place) => {
        const { lat, lng, id, name } = place;

        return <Marker key={id} onClick={() => {}} position={{ lat, lng }} name={name} />;
      })}
    </StyledMap>
  );
};

const MapWithGoogle = GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(Map);

const MapContainer = () => {
  return (
    <StyledMapContainer>
      <MapWithGoogle />
    </StyledMapContainer>
  );
};

export default MapContainer;
