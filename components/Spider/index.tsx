import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  posY: number;
};

export const Spider = ({ posY }: Props) => {
  return(
  <View style={[styles.container, { bottom: posY }]}>
    <Text style={styles.aranha}>🕷️</Text>
  </View>

  )
};
