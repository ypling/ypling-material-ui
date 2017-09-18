import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
export default function PrimaryButton(props) {
  const style = {
    height: 36,
    boxShadow: 'none',
  };
  return (
    <RaisedButton {...props} primary style={style}>
      {props.children}
    </RaisedButton>
  )
}