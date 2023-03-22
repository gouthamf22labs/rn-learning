import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View, Modal} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {PERMISSIONS, request} from 'react-native-permissions';

// key = AIzaSyBVFh76xuzZY9QPBRW1uEHl77gub7t89zs
function MapScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['100%', '15%'], []);
  const mapRef = React.createRef<any>();
  // callbacks
  const handlePresentModalPress = useCallback((data: any) => {
    console.log(bottomSheetModalRef.current?.present());
    bottomSheetModalRef.current?.present();
    setModelData(data);
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const [mapData] = useState(() => [
    {
      latitude: 13.057122361464636,
      longitude: 80.25763196870685,
      title: 'location 1',
      description: 'This is a description of the location 1',
    },
    {
      latitude: 13.06128278838543,
      longitude: 80.27715073898435,
      title: 'location 2',
      description: 'This is a description of the location 2',
    },
    {
      latitude: 13.069309230772312,
      longitude: 80.26100585237145,
      title: 'location 3',
      description: 'This is a description of the location 3',
    },
    {
      latitude: 13.090821525848149,
      longitude: 80.28003411367536,
      title: 'location 4',
      description: 'This is a description of the location 4',
    },
    {
      latitude: 13.08535055553698,
      longitude: 80.26975790038705,
      title: 'location 5',
      description: 'This is a description of the location 5',
    },
    {
      latitude: 13.08535055553698,
      longitude: 80.26975790038705,
      title: 'location 6',
      description: 'This is a description of the location 6',
    },
    {
      latitude: 13.080040260854947,
      longitude: 80.2845667116344,
      title: 'location 7',
      description: 'This is a description of the location 7',
    },
    {
      latitude: 13.047501432128556,
      longitude: 80.25659328326583,
      title: 'location 8',
      description: 'This is a description of the location 8',
    },
    {
      latitude: 13.056361829495621,
      longitude: 0.043173842132,
      title: 'location 9',
      description: 'This is a description of the location 9',
    },
    {
      latitude: 13.056361829495621,
      longitude: 80.24385781958699,
      title: 'location 10',
      description: 'This is a description of the location 10',
    },
  ]);
  const [modelData, setModelData] = useState<any>(() => {});
  const [modelState, setModelState] = useState<boolean>(() => false);
  useEffect(() => {
    function requestLocationPermission() {
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        console.log(result);
        if (result !== 'granted') {
          setModelState(true);
        } else {
          setModelState(false);
        }
      });
    }
    requestLocationPermission();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          tintColor="yellow"
          showsMyLocationButton={true}
          style={styles.mapStyle}
          initialRegion={{
            latitude: 13.057122361464636,
            longitude: 80.25763196870685,
            latitudeDelta: 0.0672921602512293,
            longitudeDelta: 0.043173842132,
          }}
          customMapStyle={mapStyle}>
          {mapData.map((element, index) => {
            return (
              <Marker
                ref={mapRef}
                key={index}
                onPress={() => handlePresentModalPress(element)}
                draggable
                coordinate={{
                  latitude: element.latitude,
                  longitude: element.longitude,
                }}
                onDragEnd={e =>
                  Alert.alert(JSON.stringify(e.nativeEvent.coordinate))
                }
                title={element.title}
                description={element.description}
              />
            );
          })}
        </MapView>
        <BottomSheetModalProvider>
          <View style={styles.Modelcontainer}>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}>
              <View style={styles.contentContainer}>
                <Text>{modelData?.title}</Text>
                <Text>{modelData?.description}</Text>
              </View>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
        <View style={styles.centeredView}>
          <Modal animationType="slide" transparent={true} visible={modelState}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Please go to the the settings and enable the location
                  permission
                </Text>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dadada',
      },
      {
        weight: 0.5,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  Modelcontainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 0.7,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
export default MapScreen;
