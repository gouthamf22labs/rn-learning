import React from 'react';
import {Alert, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useQuery} from 'react-query';
import {getUsersQuery} from '../api/queries';

function HomeScreen(): JSX.Element {
  const {isLoading, error, data, isFetching} = useQuery(
    'getusers',
    getUsersQuery,
  );
  if (isFetching)
    return (
      <View
        style={{
          backgroundColor: '#1F2428',
          flexDirection: 'row',
          width: '100%',
          flex: 1,
          padding: 10,
          borderRadius: 8,
          borderColor: '#292E33',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Data is fetching...</Text>
      </View>
    );
  if (isLoading)
    return (
      <View
        style={{
          backgroundColor: '#1F2428',
          flexDirection: 'row',
          width: '100%',
          flex: 1,
          padding: 10,
          borderRadius: 8,
          borderColor: '#292E33',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Loading...</Text>
      </View>
    );
  if (error)
    return (
      <View
        style={{
          backgroundColor: '#1F2428',
          flexDirection: 'row',
          width: '100%',
          flex: 1,
          padding: 10,
          borderRadius: 8,
          borderColor: '#292E33',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Error...</Text>
      </View>
    );
  const renderItem = ({item}: {item: {name: string; id: string}}) => {
    return (
      <View
        style={{
          backgroundColor: '#1F2428',
          flexDirection: 'row',
          width: '100%',
          padding: 10,
          borderRadius: 8,
          flex: 1,
          borderColor: '#292E33',
          marginTop: 20,
        }}>
        <View
          style={{
            width: 90,
            backgroundColor: '#D9D9D9',
            borderRadius: 8,
            height: '100%',
          }}></View>
        <View
          style={{
            flex: 1,
            maxHeight: 90,
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'orange'}}>Open</Text>
            <Text style={{color: '#D9D9D9', marginLeft: 5}}> 9.00 - 22.00</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 20, color: 'white'}}>{item?.name}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={{fontSize: 12, color: '#D9D9D9'}}>0.5km</Text>
            <Text style={{fontSize: 12, color: '#D9D9D9', marginLeft: 10}}>
              Starts from $29
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            borderRadius: 8,
            flexDirection: 'row',
            height: '100%',
          }}>
          <Text style={{color: 'orange'}}> * </Text>
          <Text style={{color: 'grey'}}>4.8</Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        padding: 10,
        backgroundColor: '#14191D',
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
export default HomeScreen;
