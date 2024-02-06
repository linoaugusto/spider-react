import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  wall:{
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    position: 'relative',
  },
  wallImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  verticalLine: {
    position: 'absolute',
    top: 0,  
    left: '50%',
    borderLeftWidth: 2,
    borderColor: 'black',
    // Customize the line styles as needed
  },
  control:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    margin: 20,
  },
  controlText: {
    color: 'white',
    paddingVertical: 2,
  },
  controlButton: {
    flex: 1,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
}

);