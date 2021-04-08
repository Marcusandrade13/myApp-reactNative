import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 53.3460,
        longitude: -6.2589,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034
      }}
      >
      <MapView.Marker
         coordinate ={{
            latitude: 53.3460,
            longitude: -6.2589,
         }}
         title = {"Testing Market"}
         description = {"1"}
         /> 
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
        height
  }
})

export default Map