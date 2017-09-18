import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

const SecondaryButtonContainer = styled.div`
  display: inline-block;
`;

export default function SecondaryButton(props) {
  const style = {
    height: 36,
  };
  return (
    <SecondaryButtonContainer>
      <FlatButton {...props} primary style={style}>
        {props.children}
      </FlatButton>
    </SecondaryButtonContainer>
  );
}
