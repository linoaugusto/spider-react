import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { styles } from './components/styles';
import { Ball } from './components/Ball';
import { Spider } from './components/Spider';

/* let timer: number; */
let timer: NodeJS.Timeout;

const App = () => {
  const [wallHeight, setWallHeight] = useState(0);
  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const applyGravity = () => {
      //Decreasing Upforce
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      //Modifying Upforce
      let newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      //Setting new position based on speed
      let newPosY = posY - newSpeed;

      if (newPosY < 0) {
        newPosY = 0;
        setSpeed(0);
      }

      if (newPosY >= wallHeight - 50) {
        newPosY = wallHeight - 50;
        setSpeed(0);
      }

      setPosY(newPosY);
    };

    clearTimeout(timer);
    timer = setTimeout(applyGravity, 30);
  }, [gravity, upForce, speed, posY]);

  const handleEscalarButton = () => {
    setUpForce((prevState) => {
      return 7;
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.wall}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setWallHeight(height);
        }}>
        <Image style={styles.wallImage} source={require('./assets/wall.png')} />
        <View
          style={[styles.verticalLine, { height: wallHeight - posY - 15 }]}
        />
        <Spider posY={posY} />
      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Velocity: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleEscalarButton}>
          <Text style={styles.controlButtonText}>Escalar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
