/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

const onLocationClicked = () => {
  Alert.alert('Location Clicked', 'Do You Want To Continue??', [
    {
      text: 'OK',
      onPress: () => null,
      style: 'default',
    },
    {text: 'CANCEL', onPress: () => null, style: 'destructive'},
  ]);
};

const onCartCliked = () => {
  Alert.alert('Your Shoping Cart', 'Do You Want To See Your Items??', [
    {
      text: 'OK',
      onPress: () => null,
      style: 'default',
    },
    {text: 'CANCEL', onPress: () => null, style: 'destructive'},
  ]);
};

const discountPhotos = [
  {uri: require('../assets/offer1.png'), detail: 'discount1'},
  {uri: require('../assets/offer2.png'), detail: 'discount2'},
  {uri: require('../assets/offer3.jpeg'), detail: 'discount3'},
  {uri: require('../assets/offer4.jpeg'), detail: 'discount4'},
  {uri: require('../assets/offer5.png'), detail: 'discount5'},
  {uri: require('../assets/offer6.jpeg'), detail: 'discount6'},
  {uri: require('../assets/offer7.png'), detail: 'discount7'},
];
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerConatiner}>
          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={require('../assets/Zoylo.jpg')}
            />
            <Text style={styles.logoText}>Zoylo</Text>
          </View>
          <View style={styles.location}>
            <TouchableOpacity onPress={onLocationClicked}>
              <Image
                style={styles.locationIcon}
                source={require('../assets/loaction.png')}
              />
            </TouchableOpacity>

            <View style={styles.verticalline} />
            <TouchableOpacity onPress={onCartCliked}>
              <Image
                style={styles.locationIcon}
                source={require('../assets/Scart.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.secondConatiner}>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.discountContainer}>
                  {discountPhotos.map(({uri, detail}, i) => (
                    // console.log(i),
                    <TouchableOpacity
                      style={styles.discounts}
                      onPress={() => alert(`You Clicked ${detail}`)}>
                      <Image key={i} style={styles.Image} source={uri} />
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
              <View style={styles.dots}>
                {discountPhotos.map((_, i) => {
                  return <View key={i} style={styles.imageIndicator} />;
                })}
              </View>
            </View>
          </View>
          <View style={styles.thirdContainer}>
            <View style={styles.package}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => alert('You Clicked Medicines')}>
                <Image
                  style={styles.packageImages}
                  source={require('../assets/pill.png')}
                />
                <Text style={styles.packageText}>Medicines</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.package}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => alert('You Clicked Tests & Packages')}>
                <Image
                  style={styles.packageImages}
                  source={require('../assets/microscope.png')}
                />
                <Text style={styles.packageText}>Tests & Packages</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.package}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => alert('You Clicked Online Consultation')}>
                <Image
                  style={styles.packageImages}
                  source={require('../assets/monitor.png')}
                />
                <Text style={styles.packageText}>Online Consultation</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fourthContainer}>
            <View style={styles.innerFourthContainer}>
              <ScrollView horizontal={true}>
                <View style={styles.hospitalEquipmemts}>
                  <View style={styles.hospitalFacilities}>
                    <TouchableOpacity
                      onPress={() => alert('Doctor Appointment')}>
                      <Image
                        style={styles.facilities}
                        source={require('../assets/stethoscope.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.facilitiesText}>Doctor Appointment</Text>
                </View>
                <View style={styles.hospitalEquipmemts}>
                  <View style={styles.hospitalFacilities}>
                    <TouchableOpacity
                      onPress={() => alert('Wellness Packages')}>
                      <Image
                        style={styles.facilities}
                        source={require('../assets/package.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.facilitiesText}>Wellness packages</Text>
                </View>
                <View style={styles.hospitalEquipmemts}>
                  <View style={styles.hospitalFacilities}>
                    <TouchableOpacity onPress={() => alert('Ask Zoy')}>
                      <Image
                        style={styles.facilities}
                        source={require('../assets/bot.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.facilitiesText}>Ask Zoy</Text>
                </View>
                <View style={styles.hospitalEquipmemts}>
                  <View style={styles.hospitalFacilities}>
                    <TouchableOpacity onPress={() => alert('Home Healthcare')}>
                      <Image
                        style={styles.facilities}
                        source={require('../assets/hand-box.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.facilitiesText}>Home Healthcare</Text>
                </View>
                <View style={styles.hospitalEquipmemts}>
                  <View style={styles.hospitalFacilities}>
                    <TouchableOpacity
                      onPress={() => alert('Hospital Packages')}>
                      <Image
                        style={styles.facilities}
                        source={require('../assets/hospitalpackage.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.facilitiesText}>Hospital Packages</Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.fifthContainer}>
            <View style={styles.fifthConatinerHeading}>
              <Text style={styles.fifthHeadingText}>
                Diagonostic Packages By Zoylo Labs
              </Text>
              <TouchableOpacity onPress={() => alert('View All Data')}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.advanceOptions}>
                <View style={styles.advanceContainer}>
                  <View style={styles.firstBlock}>
                    <View style={styles.innerItems}>
                      <Text style={styles.advancedText}>ADVANCED</Text>
                    </View>
                    <View style={styles.advancedDetails}>
                      <Text style={styles.txt}>
                        Zoylo Health Checkup with Iron Studies
                      </Text>
                    </View>
                    <View style={styles.testCounts}>
                      <Text>83 tests included</Text>
                    </View>
                  </View>
                  <View style={styles.secondBlock}>
                    <Text>₹ 3250.00</Text>
                    <View style={styles.secondInnerBlock}>
                      <Text style={styles.price}>₹ 1299.00</Text>
                      <Text style={styles.offPercent}>60% off</Text>
                    </View>
                    <Text style={styles.ZoyloLabs}>ZOYLO LABS</Text>
                    <TouchableOpacity onPress={() => alert('Book Your Seat')}>
                      <Text style={styles.bookText}> BOOK NOW</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.advanceContainer}>
                  <View style={styles.SecondSideBlock}>
                    <View style={styles.innerItems}>
                      <Text style={styles.advancedText}>ADVANCED</Text>
                    </View>
                    <View style={styles.advancedDetails}>
                      <Text style={styles.txt}>Fever Package 3</Text>
                    </View>
                    <View style={styles.testCounts}>
                      <Text>66 tests included</Text>
                    </View>
                  </View>
                  <View style={styles.secondBlock}>
                    <Text>₹ 3300.00</Text>
                    <View style={styles.secondInnerBlock}>
                      <Text style={styles.price}>₹ 1299.00</Text>
                      <Text style={styles.offPercent}>61% off</Text>
                    </View>
                    <Text style={styles.ZoyloLabs}>ZOYLO LABS</Text>
                    <TouchableOpacity onPress={() => alert('Book Your Seat')}>
                      <Text style={styles.bookText}> BOOK NOW</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.advanceContainer}>
                  <View style={styles.firstBlock}>
                    <View style={styles.innerItems}>
                      <Text style={styles.advancedText}>ADVANCED</Text>
                    </View>
                    <View style={styles.advancedDetails}>
                      <Text style={styles.txt}>
                        Zoylo Health Checkup with Iron Studies
                      </Text>
                    </View>
                    <View style={styles.testCounts}>
                      <Text>83 tests included</Text>
                    </View>
                  </View>
                  <View style={styles.secondBlock}>
                    <Text>₹ 3250.00</Text>
                    <View style={styles.secondInnerBlock}>
                      <Text style={styles.price}>₹ 1299.00</Text>
                      <Text style={styles.offPercent}>60% off</Text>
                    </View>
                    <Text style={styles.ZoyloLabs}>ZOYLO LABS</Text>
                    <TouchableOpacity onPress={() => alert('Book Your Seat')}>
                      <Text style={styles.bookText}> BOOK NOW</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.advanceContainer}>
                  <View style={styles.SecondSideBlock}>
                    <View style={styles.innerItems}>
                      <Text style={styles.advancedText}>ADVANCED</Text>
                    </View>
                    <View style={styles.advancedDetails}>
                      <Text style={styles.txt}>Fever Package 3</Text>
                    </View>
                    <View style={styles.testCounts}>
                      <Text>66 tests included</Text>
                    </View>
                  </View>
                  <View style={styles.secondBlock}>
                    <Text>₹ 3300.00</Text>
                    <View style={styles.secondInnerBlock}>
                      <Text style={styles.price}>₹ 1299.00</Text>
                      <Text style={styles.offPercent}>61% off</Text>
                    </View>
                    <Text style={styles.ZoyloLabs}>ZOYLO LABS</Text>
                    <TouchableOpacity onPress={() => alert('Book Your Seat')}>
                      <Text style={styles.bookText}> BOOK NOW</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.advanceContainer}>
                  <View style={styles.firstBlock}>
                    <View style={styles.innerItems}>
                      <Text style={styles.advancedText}>ADVANCED</Text>
                    </View>
                    <View style={styles.advancedDetails}>
                      <Text style={styles.txt}>
                        Zoylo Health Checkup with Iron Studies
                      </Text>
                    </View>
                    <View style={styles.testCounts}>
                      <Text>83 tests included</Text>
                    </View>
                  </View>
                  <View style={styles.secondBlock}>
                    <Text>₹ 3250.00</Text>
                    <View style={styles.secondInnerBlock}>
                      <Text style={styles.price}>₹ 1299.00</Text>
                      <Text style={styles.offPercent}>60% off</Text>
                    </View>
                    <Text style={styles.ZoyloLabs}>ZOYLO LABS</Text>
                    <TouchableOpacity onPress={() => alert('Book Your Seat')}>
                      <Text style={styles.bookText}> BOOK NOW</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.advanceContainer}>
                  <View style={styles.SecondSideBlock}>
                    <View style={styles.innerItems}>
                      <Text style={styles.advancedText}>ADVANCED</Text>
                    </View>
                    <View style={styles.advancedDetails}>
                      <Text style={styles.txt}>Fever Package 3</Text>
                    </View>
                    <View style={styles.testCounts}>
                      <Text>66 tests included</Text>
                    </View>
                  </View>
                  <View style={styles.secondBlock}>
                    <Text>₹ 3300.00</Text>
                    <View style={styles.secondInnerBlock}>
                      <Text style={styles.price}>₹ 1299.00</Text>
                      <Text style={styles.offPercent}>61% off</Text>
                    </View>
                    <Text style={styles.ZoyloLabs}>ZOYLO LABS</Text>
                    <TouchableOpacity onPress={() => alert('Book Your Seat')}>
                      <Text style={styles.bookText}> BOOK NOW</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.sixthContainer}>
            <Text style={styles.sixthConatinerHeading}>
              Medicine categories
            </Text>
            <ScrollView horizontal={true}>
              <View style={styles.sixthInnerContainer}>
                <View style={styles.sixthInnerItems}>
                  <TouchableOpacity
                    style={styles.touch}
                    onPress={() => alert('HealthCare Products')}>
                    <Image
                      style={styles.sixthImages}
                      source={require('../assets/soap.png')}
                    />
                    <Text style={styles.sixthText}>Healthcare Products</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.sixthInnerItems}>
                  <TouchableOpacity
                    style={styles.touch}
                    onPress={() => alert('Ayurveda')}>
                    <Image
                      style={styles.sixthImages}
                      source={require('../assets/ayurveda.png')}
                    />
                    <Text style={styles.sixthText}>Ayurveda</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.sixthInnerItems}>
                  <TouchableOpacity
                    style={styles.touch}
                    onPress={() => alert('Homeopathy')}>
                    <Image
                      style={styles.sixthImages}
                      source={require('../assets/bottle.png')}
                    />
                    <Text style={styles.sixthText}>Homeopathy</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.sixthInnerItems}>
                  <TouchableOpacity
                    style={styles.touch}
                    onPress={() => alert('HealthCare ')}>
                    <Image
                      style={styles.sixthImages}
                      source={require('../assets/hospitalpackage.png')}
                    />
                    <Text style={styles.sixthText}>Healthcare</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.seventhContainer}>
            <View style={styles.seventhFirstBlock}>
              <Image
                style={styles.bgImage}
                source={require('../assets/bgimage1.jpeg')}
              />
              <View style={styles.FirstInnerData}>
                <Text style={styles.descriptionHeading}>
                  Order Medicine using presciption
                </Text>
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={() => alert('Upload presciption')}>
                  <Text style={styles.btnText}>UPLOAD</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.description}>
                & get Medicines Delivered at Home
              </Text>
            </View>
            <View style={styles.seventhFirstBlock}>
              <Image
                style={styles.bgImage}
                source={require('../assets/bgimage2.jpeg')}
              />
              <View style={styles.SecondInnerData}>
                <Text style={styles.descriptionHeading}>
                  Online doctor Consultation
                </Text>
                <TouchableOpacity
                  style={styles.consultButton}
                  onPress={() => alert('Consult Now')}>
                  <Text style={styles.consultText}>CONSULT NOW</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.description}>
                Consult with the top medical practitioners in your city.Recover
                from the comfort of your home
              </Text>
            </View>

            <View style={styles.seventhFirstBlock}>
              <Image
                style={styles.bgImage}
                source={require('../assets/bgimage3.jpeg')}
              />
              <View style={styles.ThirdInnerData}>
                <Text style={styles.descriptionHeading}>
                  Take Free Online Health Assessment
                </Text>
                <TouchableOpacity
                  style={styles.startButton}
                  onPress={() => alert('Start')}>
                  <Text style={styles.startText}>START</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.description}>
                Know Your Health Status now!
              </Text>
            </View>

            <View style={styles.seventhFirstBlock}>
              <Image
                style={styles.bgImage}
                source={require('../assets/bgimage1.jpeg')}
              />
              <View style={styles.FourthInnerData}>
                <Text style={styles.descriptionHeading}>
                  Corporate health plans Just for your workplace
                </Text>
                <Image
                  style={styles.icon}
                  source={require('../assets/icon.png')}
                />
                <Text style={styles.description}>
                  Login To Your Corporate Account To Avail Multiple Benefits
                </Text>
              </View>
            </View>

            <View style={styles.seventhFirstBlock}>
              <Image
                style={styles.bgImage}
                source={require('../assets/bgimage2.jpeg')}
              />
              <View style={styles.FifthInnerData}>
                <Text style={styles.descriptionHeading}>Blogs</Text>

                <Text style={styles.description}>
                  "A good laugh and a long sleep are the best curves in the
                  doctor/'s book"
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    shadowOpacity: 0.8,
    shadowColor: 'lightgrey',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoText: {
    color: 'darkblue',
    fontSize: 20,
    fontWeight: '900',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  locationIcon: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 30,
    height: 30,
    margin: 15,
  },
  verticalline: {
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 0.5,
    height: 13,
  },
  touch: {
    alignItems: 'center',
  },
  secondConatiner: {
    height: 230,
    backgroundColor: 'white',
    marginTop: 2,
  },
  discountContainer: {
    flexDirection: 'row',
    paddingTop: 7,
  },
  discounts: {
    width: 360,
    height: 170,
    margin: 7,
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imageIndicator: {
    height: 10,
    width: 15,
    backgroundColor: 'orange',
    margin: 8,
    borderRadius: 5,
  },
  dots: {
    flexDirection: 'row',
  },
  thirdContainer: {
    flexDirection: 'row',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 10,
  },
  package: {
    width: 125,
    height: 125,
    backgroundColor: 'white',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    shadowColor: 'lightgrey',
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  packageImages: {
    width: 35,
    height: 35,
    padding: 10,
  },
  packageText: {
    textAlign: 'center',
    margin: 10,
  },
  fourthContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
    height: 120,
  },
  hospitalFacilities: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
  },
  innerFourthContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
  hospitalEquipmemts: {
    alignItems: 'center',
    width: 80,
    height: 100,
    marginTop: 10,
  },
  facilities: {
    width: 25,
    height: 25,
  },
  facilitiesText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 11,
  },
  fifthContainer: {
    margin: 5,
  },
  fifthConatinerHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fifthHeadingText: {
    fontSize: 17,
    marginLeft: 5,
    marginTop: 10,
  },
  viewAllText: {
    color: 'orange',
    fontSize: 17,
    marginTop: 10,
    marginRight: 10,
  },
  advanceOptions: {
    flexDirection: 'row',
    marginTop: 20,
  },
  advanceContainer: {
    backgroundColor: 'white',
    width: 170,
    height: 300,
    shadowOpacity: 6,
    shadowColor: 'grey',
    shadowRadius: 3,
    margin: 10,
  },
  innerItems: {
    position: 'absolute',
    top: 15,
    left: 15,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  advancedText: {
    marginLeft: 15,
    marginRight: 15,
  },
  advancedDetails: {
    position: 'absolute',
    top: 50,
    left: 15,
  },
  txt: {
    fontSize: 14,
  },
  testCounts: {
    position: 'absolute',
    top: 140,
    left: 15,
  },
  firstBlock: {
    width: 170,
    height: 160,
    backgroundColor: '#d4c4fb',
  },
  SecondSideBlock: {
    width: 170,
    height: 160,
    backgroundColor: '#BAB3E5',
  },
  secondBlock: {
    margin: 8,
  },
  secondInnerBlock: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    color: '#058506',
  },
  offPercent: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#058506',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ZoyloLabs: {
    fontSize: 20,
    marginTop: 25,
    fontWeight: '700',
    color: '#d4c4fb',
    opacity: 0.5,
  },
  bookText: {
    marginTop: 10,
    color: 'orange',
    fontSize: 15,
    fontWeight: '600',
  },
  sixthContainer: {
    margin: 5,
  },
  sixthConatinerHeading: {
    fontSize: 17,
    marginLeft: 10,
  },
  sixthInnerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  sixthInnerItems: {
    width: 110,
    height: 110,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: 'lightgrey',
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  sixthImages: {
    width: 27,
    height: 27,
    padding: 10,
    margin: 10,
  },
  sixthText: {
    textAlign: 'center',
    fontSize: 12,
  },
  seventhContainer: {
    marginTop: 10,
  },
  seventhFirstBlock: {
    position: 'relative',
    margin: 10,
    width: 390,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    shadowOpacity: 1,
    shadowColor: 'grey',
    flex: 1,
  },
  bgImage: {
    width: 390,
    height: 150,
  },
  FirstInnerData: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    left: 10,
  },
  SecondInnerData: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    left: 10,
  },
  ThirdInnerData: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    left: 10,
  },
  FourthInnerData: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    left: 10,
  },
  FifthInnerData: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    top: 10,
    left: 10,
  },
  uploadButton: {
    right: 10,
    borderColor: 'orange',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    paddingLeft: 15,
  },
  consultButton: {
    right: 10,
    backgroundColor: 'orange',
    borderColor: 'orange',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    paddingLeft: 15,
  },
  startButton: {
    top: 15,
    right: 15,
    borderColor: 'orange',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    paddingLeft: 15,
  },
  btnText: {
    color: 'orange',
  },
  consultText: {
    color: 'white',
  },
  startText: {
    color: 'orange',
  },
  descriptionHeading: {
    fontSize: 20,
    textAlign: 'left',
  },
  description: {
    position: 'absolute',
    top: 60,
    left: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
export default HomeScreen;
