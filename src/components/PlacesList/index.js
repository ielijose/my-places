import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removePlace } from '../../store/places/actions';
import { StyledButton, StyledItem, StyledList, StyledName } from './styles';

const PlacesList = () => {
  const dispatch = useDispatch();
  const { places } = useSelector((state) => state.places);
  const handleRemove = (id) => {
    dispatch(removePlace(id));
  };

  const renderPlacesList = () => {
    if (!places || places.length === 0) {
      return <li>There are no saved places, click on the map and add some.</li>;
    }

    return places.map((place) => {
      const { id, name } = place;
      return (
        <StyledItem key={id}>
          <StyledName>{name}</StyledName>

          <StyledButton
            onClick={() => {
              handleRemove(id);
            }}>
            <FaTimes />
          </StyledButton>
        </StyledItem>
      );
    });
  };
  return <StyledList>{renderPlacesList()}</StyledList>;
};

export default PlacesList;
