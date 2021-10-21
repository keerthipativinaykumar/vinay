/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { SafeAreaView, Text, View, Image, Alert, ScrollView } from 'react-native'
import { Divider, Icon } from 'react-native-elements'

export default class App extends Component {
  render() {
    return (
      // <SafeAreaView>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, margin: '1%' }}>
          <Icon
            reverse
            // raised
            name='facebook-official'
            type='font-awesome'
            // color='grey'
            // style={{ backgroundColor: 'grey' }}
            onPress={() => Alert.alert('facebook')} />
          <Icon
            reverse
            name='twitter-square'
            type='font-awesome'
            // color='grey'
            // style={{ backgroundColor: 'grey' }}
            onPress={() => Alert.alert('twitter')} />
          <Icon
            reverse
            name='instagram'
            type='font-awesome'
            // color='grey'
            // style={{ backgroundColor: 'grey' }}
            onPress={() => Alert.alert('Instagram')} />
          <Icon
            reverse
            name='github'
            type='font-awesome'
            // color='grey'
            // style={{ backgroundColor: 'grey' }}
            onPress={() => Alert.alert('Github')} />
          <Icon
            reverse
            name='whatsapp'
            type='font-awesome'
            // color='grey'
            // style={{ backgroundColor: 'grey' }}
            onPress={() => Alert.alert('Whatsapp')} />
        </View>
        <View style={{ alignSelf: 'center', margin: '1%', padding: 10 }}>
          <Image
            style={{ width: 125, height: 125, borderRadius: 100, borderWidth: 1, borderColor: 'grey' }}
            source={{
              uri: 'https://lh3.googleusercontent.com/pw/AM-JKLXZQ99uWKOxbp-Ksw5nxnajJ0vkqpSrQH8dyY0oAxyjn0TaCScj_n2tSgKDwtYj7Yn4XDFFEZdJ_UPHI_L_Aa6ynBUizf_Ifr6UV98H84WryhUgXMNiz7L8gJV1tbcwck8aoFR3DXdBh_Yb5KutN2qXgQ=w584-h876-no?authuser=0',
            }}
          />
        </View>
        <View style={{ justifyContent: 'flex-start', alignSelf: 'center', borderWidth: 1, padding: 10, margin: '1%', borderColor: 'grey' }}>
          <Text style={{ color: 'grey', fontWeight: 'bold' }}> V I N A Y  K U M A R  K E E R T H I P A T I </Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{height:'60%',}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, margin: '1%',width:'auto' }}>
          <View style={{ padding: 10, margin: '1%' }}>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'flex-end' }}> D A T E  O F  B I R T H </Text>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'flex-end' }}> B I R T H  P L A C E </Text>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'flex-end' }}> A G E </Text>
          </View>
          <View style={{ padding: 10, margin: '1%' }}>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'center' }}> : </Text>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'center' }}> : </Text>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'center' }}> : </Text>
          </View>
          <View style={{ padding: 10, margin: '1%' }}>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'flex-start' }}> 2 8  -  S E P T E M B E R  -  1 9 9 7 </Text>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'flex-start' }}> B . P . R A C H A P A L L I </Text>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'flex-start' }}> 2 4 </Text>
          </View>
        </View>
        {/* <Divider/> */}
        <View style={{ padding: 10, margin: '1%' }}>
          <View style={{ padding: 10, margin: '1%' }}>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'flex-start', padding: 10, margin: '2%' }}> E X P E R I E N C E </Text>
            <Divider />
            <View style={{ padding: 10, margin: '1%',height:100,borderWidth:1,top:10,borderColor:'grey' }}>
              <Text>WRITE EXPERIENCE CONTENT HERE</Text>
            </View>
          </View>
          <View style={{ padding: 10, margin: '1%' }}>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'flex-start', padding: 10, margin: '2%' }}> P R O J E C T S </Text>
            <Divider />
            <View style={{ padding: 10, margin: '1%',height:100,borderWidth:1,top:10,borderColor:'grey' }}>
            <Text>WRITE ABOUT PROJECTS HERE</Text>
            </View>
          </View>
          <View style={{ padding: 10, margin: '1%' }}>
            <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'flex-start', padding: 10, margin: '2%' }}> E D U C A T I O N </Text>
            <Divider />
            <View style={{ padding: 10, margin: '1%',height:100,borderWidth:1,top:10,borderColor:'grey' }}>
            <Text>WRITE EDUCATION DETAILS HERE</Text>
            </View>
          </View>
        </View>
        </ScrollView>
        <View style={{}}>
          <View style={{}}>
          </View>
          <View style={{}}>
          </View>
        </View>
        {/* <Divider/> */}
        <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'flex-end', padding: 10, margin: '1%' }}>
          <Text style={{ color: 'grey', fontWeight: 'bold' }}> C O P Y  R I G H T  @  V I N A Y  K U M A R  K E E R T H I P A T I  #  2 0 2 1 </Text>
          <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'center' }}> T E R M S  O F  S E R V I C E S    &&    T E R M S  O F  U S A G E </Text>
          <Text style={{ color: 'grey', fontWeight: 'bold', alignSelf: 'center' }}> h t t p : / / v i n a y k u m a r k e e r t h i p a t i . m l </Text>
        </View>
      </View>
      // </SafeAreaView>
    )
  }
}