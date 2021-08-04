import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {icons, images, COLORS, SIZES, FONTS} from '../constants/';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RequirementBar = ({icon, barPercentage}) => {
  return (
    <View style={{height: 60, alignItems: 'center'}}>
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: COLORS.gray,
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />
      </View>

      {/* Bar */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }}></View>

      {/* Bar Parcentage */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }}></View>
    </View>
  );
};

const RequirementDetail = ({icon, label, detail}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h3,
          }}>
          {label}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text style={{...FONTS.body4, color: COLORS.secondary}}>{detail}</Text>
      </View>
    </View>
  );
};

export default function PlantDetail({navigation}) {
  function renderHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 10,
          left: SIZES.padding,
          right: SIZES.padding,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              flex: 1,
              alignItems: 'center',
              width: 40,
              height: 40,
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: 50,
              justifyContent: 'center',
            }}>
            <Image
              source={icons.back}
              resizeMode="cover"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              marginTop: 10,
            }}>
            <Image
              source={icons.focus}
              resizeMode="cover"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text
            style={{color: COLORS.white, ...FONTS.largeTitle, width: '50%'}}>
            Glory Mantas
          </Text>
        </View>
      </View>
    );
  }

  function renderRequirementBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
        }}>
        <RequirementBar icon={icons.sun} barPercentage="50%" />
        <RequirementBar icon={icons.drop} barPercentage="80%" />
        <RequirementBar icon={icons.temperature} barPercentage="40%" />
        <RequirementBar icon={icons.garden} barPercentage="60%" />
        <RequirementBar icon={icons.seed} barPercentage="70%" />
      </View>
    );
  }

  function renderRequirement() {
    return (
      <View
        style={{
          flex: 4.5,
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-evenly',
        }}>
        <RequirementDetail icon={icons.sun} label="Sunlight" detail="15*C" />
        <RequirementDetail
          icon={icons.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetail
          icon={icons.temperature}
          label="Room Temp"
          detail="25*C"
        />
        <RequirementDetail icon={icons.garden} label="Soil" detail="3 KG" />
        <RequirementDetail
          icon={icons.seed}
          label="Fertilizer"
          detail="150 MG"
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: COLORS.primary,
            padding: 10,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>Take Action</Text>
          <Image
            source={icons.chevron}
            resizeMode="cover"
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.secondary, width: '50%'}}>
            Almost 2 Weeks of growing time
          </Text>
          <Image
            source={icons.down_arrow}
            resizeMode="cover"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={{height: '35%'}}>
        <Image
          source={images.banner_bg}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      {/* Requerment */}
      <View
        style={{
          flex: 1,
          marginTop: -35,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: COLORS.lightGray,
          paddingVertical: SIZES.padding,
        }}>
        <Text
          style={{
            paddingHorizontal: SIZES.padding,
            ...FONTS.h2,
            color: COLORS.secondary,
          }}>
          Requirement
        </Text>

        {renderRequirementBar()}
        {renderRequirement()}
        {renderFooter()}
      </View>

      {renderHeader()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
