import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {icons, images, COLORS, SIZES, FONTS} from '../constants';

export default function Home({navigation}) {
  const [newPlants, setNewplants] = useState([
    {
      id: 1,
      name: 'Plant 1',
      image: images.plant_1,
      favourite: false,
    },
    {
      id: 2,
      name: 'Plant 2',
      image: images.plant_2,
      favourite: true,
    },
    {
      id: 3,
      name: 'Plant 3',
      image: images.plant_3,
      favourite: true,
    },
    {
      id: 4,
      name: 'Plant 4',
      image: images.plant_4,
      favourite: false,
    },
    {
      id: 5,
      name: 'Plant 5',
      image: images.plant_5,
      favourite: false,
    },
    {
      id: 6,
      name: 'Plant 6',
      image: images.plant_6,
      favourite: true,
    },
    {
      id: 7,
      name: 'Plant 7',
      image: images.plant_7,
      favourite: false,
    },
  ]);

  const [friendList, setfriendList] = useState([
    {
      id: 1,
      img: images.profile_1,
    },
    {
      id: 2,
      img: images.profile_2,
    },
    {
      id: 3,
      img: images.profile_3,
    },
    {
      id: 4,
      img: images.profile_4,
    },
    {
      id: 5,
      img: images.profile_5,
    },
  ]);

  const renderFriendList = () => {
    if (friendList.length == 0) {
      return <View>sss</View>;
    } else if (friendList.length <= 3) {
      return friendList.map((item, index) => (
        <View
          key={`friend-${index}`}
          style={index == 0 ? {} : {marginLeft: -10}}>
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: COLORS.primary,
            }}
          />
        </View>
      ));
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : {marginLeft: -10}}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              );
            }
          })}
          <Text
            style={{color: COLORS.secondary, ...FONTS.body3, marginLeft: 5}}>
            +{friendList.length - 3} More
          </Text>
        </View>
      );
    }
  };

  const renderNewPlants = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 5,
        }}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.23,
            height: '80%',
            borderRadius: 15,
          }}
        />
        <View
          style={{
            position: 'absolute',
            right: -5,
            bottom: '20%',
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base * 2,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            zIndex: 5,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.b2}}>{item.name}</Text>
        </View>

        <TouchableOpacity
          onPress={() => console.log('click to favourite')}
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
          }}>
          <Image
            source={
              item.favourite ? icons.heart_red : icons.heart_green_outline
            }
            resizeMode="cover"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* New Plant */}
      <View
        style={{
          height: '30%',
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginTop: SIZES.padding * 1,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h2,
                }}>
                New Plants
              </Text>
              <TouchableOpacity onPress={() => console.log('click to focus')}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Todays Share */}
      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                Today's Share
              </Text>
              <TouchableOpacity onPress={() => console.log('Share see all')}>
                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '82%',
                marginTop: SIZES.base,
              }}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PlantDetail');
                  }}
                  style={{flex: 1}}>
                  <Image
                    source={images.plant_6}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PlantDetail');
                  }}
                  style={{flex: 1, marginTop: SIZES.font}}>
                  <Image
                    source={images.plant_7}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1.3}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PlantDetail');
                  }}
                  style={{flex: 1, marginLeft: SIZES.font}}>
                  <Image
                    source={images.plant_5}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Added Friend */}
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
        <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
          <View
            style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding}}>
            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
              Added friends
            </Text>
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
              {friendList.length} Total
            </Text>

            <View style={{flexDirection: 'row', height: '45%'}}>
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {renderFriendList()}
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                  Add New
                </Text>
                <TouchableOpacity
                  onPress={() => console.log('add new')}
                  style={{
                    marginLeft: 10,
                    backgroundColor: COLORS.gray,
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
