/**
 * Created by leonardli on 4/16/17.
 */
import React from 'react';
import MuiTab from 'material-ui/Tabs/Tab';
export default function Tab(props) {
  const styles = {
    button: {
      textTransform: 'capitalize',
    },
  };
  return (
    <MuiTab {...props} buttonStyle={styles.button}/>
  )
}

Tab.muiName = 'Tab';