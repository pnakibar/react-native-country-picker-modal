import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  View
} from 'react-native';

const CloseButton = (props) => (
  <View style={styles.closeButton}>
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
      {...props}
    >
      <View>
        <Image
          source={require('./android-close.png')}
          style={styles.closeButtonImage}
        />
      </View>
    </TouchableNativeFeedback>
  </View>
);

const styles = StyleSheet.create({
  closeButton: {
    height: 56,
    width: 56,
    padding: 16
  },
  closeButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain'
  }
});

export default CloseButton;
