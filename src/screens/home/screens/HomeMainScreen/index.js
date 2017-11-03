import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class HomeMainScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}
