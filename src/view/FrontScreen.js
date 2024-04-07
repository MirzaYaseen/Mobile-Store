import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const FrontScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerText}>
            Hey, Yaseen👋{'\n'}
            <Text style={styles.tagline}>Find your best mobiles</Text>
          </Text>
          <TouchableOpacity>
            <View style={styles.notiBtn}>
              <Image
                style={styles.notiImg}
                source={require('../assets/noti.png')}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.searcView}>
          <View>
            <TextInput
              placeholder="Search for best mobiles..."
              placeholderTextColor="grey"
              style={styles.searchTextInput}
            />
          </View>
        </View>

        <View style={styles.popularView}>
          <Text style={styles.popularViewText}>Popular Products</Text>
          <TouchableOpacity>
            <View style={styles.sortView}>
              <Text style={styles.sortText}>Sort by</Text>
              <Image
                style={styles.downArrowImg}
                source={require('../assets/down.png')}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>Iphone</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>Samsung</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>Vivo</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>Oppo</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>Tecno</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>Spark X</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>Huawei</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.discoverMobileView}>
          <View>
            <Text style={styles.discoverMobileText}>
              Discover Top Mobiles {'\n'}
              <Text style={styles.tenthousandCategories}>
                100,000+ Categories{' '}
              </Text>
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('DeviceList')}
              style={styles.exploreMoreBtn}>
              <Text style={styles.exploreMoreBtnText}>Explore More</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.appleImg}
            source={require('../assets/applemobiles.png')}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('DeviceList')}
          style={styles.viewAllBtn}>
          <Text style={styles.viewAllBtnText}>View All</Text>
        </TouchableOpacity>

        <View style={styles.mobileCategoriesView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <View style={styles.categoryProduct}>
              <Text style={styles.categoryProductText}>Samsung</Text>
              <Image
                style={styles.mobileCategoriesCardImg}
                source={require('../assets/sparxxx.png')}
              />
              <Text style={styles.itemText}>Samsung S20 Ultra</Text>
              <Text style={styles.itemText2}>$1200 - Color: Silver</Text>
            </View>

            <View style={styles.categoryProduct}>
              <Text style={styles.categoryProductText}>IPhone</Text>
              <Image
                style={styles.mobileCategoriesCardImg}
                source={require('../assets/iphone1.png')}
              />
              <Text style={styles.itemText}>Iphone 15 Pro Max</Text>
              <Text style={styles.itemText2}>$1500 - Color: Titanium</Text>
           </View>

            <View style={styles.categoryProduct}>
              <Text style={styles.categoryProductText}>Vivo</Text>
              <Image
                style={styles.mobileCategoriesCardImg}
                source={require('../assets/iphone.png')}
              />
              <Text style={styles.itemText}>Vivo V23 5G</Text>
              <Text style={styles.itemText2}>$500 - Color: Skin</Text>
            </View>

            <View style={styles.categoryProduct}>
              <Text style={styles.categoryProductText}>Oppo</Text>
              <Image
                style={styles.mobileCategoriesCardImg}
                source={require('../assets/oppo.png')}
              />
              <Text style={styles.itemText}>Oppo Reno</Text>
              <Text style={styles.itemText2}>$600 - Color: Grey</Text>
            </View>

            <View style={styles.categoryProduct}>
              <Text style={styles.categoryProductText}>Tecno</Text>
              <Image
                style={styles.mobileCategoriesCardImg}
                source={require('../assets/tecno.png')}
              />
              <Text style={styles.itemText}>Tecno Sparx 7S</Text>
              <Text style={styles.itemText2}>$300 - Color: Black/Silver</Text>
            </View>
            
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FrontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
  },
  headerContainer: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerContainerText: {
    padding: 10,
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
  },
  tagline: {
    marginTop: 10,
    fontSize: 16,
    color: 'grey',
  },
  notiBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  notiImg: {
    width: 25,
    height: 25,
  },
  searcView: {
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  searchTextInput: {
    width: 350,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    elevation: 5,
    borderColor: 'white',
    color: 'black',
  },
  popularView: {
    height: 60,
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  popularViewText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  sortView: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortText: {
    fontSize: 15,
    color: 'black',
  },
  downArrowImg: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  categoriesView: {
    height: 80,
  },
  discoverMobileView: {
    backgroundColor: '#ACD7FF',
    width: '95%',
    height: 170,
    padding: 15,
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  discoverMobileText: {
    fontSize: 16,
    marginTop: 30,
    color: 'black',
    fontWeight: '800',
  },
  tenthousandCategories: {
    fontSize: 14,
    fontWeight: '600',
  },
  exploreMoreBtn: {
    backgroundColor: '#3D8FEF',
    width: 120,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  exploreMoreBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  appleImg: {
    width: 150,
    height: 150,
  },
  viewAllBtn: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    height: 40,
    width: '100%',
  },
  viewAllBtnText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D8FEF',
  },
  mobileCategoriesView: {
    width: '100%',
    height: 230,
    padding: 5,
  },
  mobileCategoriesCardImg: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  categoryScrollView: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: 'red',
  },
  categoryItem: {
    backgroundColor: 'white',
    elevation: 2,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 5,
    marginLeft: 5,
    height: 50,
    justifyContent: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
    color: 'grey',
  },
  categoryProduct: {
    backgroundColor: 'white',
    elevation: 5,
    padding: 15,
    borderRadius: 10,
    marginRight: 10,

    marginLeft: 5,
    height: 210,
    width: 200,
  },
  categoryProductText: {
    fontWeight: 'bold',
    color: 'grey',
  },
  itemText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  itemText2: {
    color: 'black',
    fontWeight: '700',
  },
});
