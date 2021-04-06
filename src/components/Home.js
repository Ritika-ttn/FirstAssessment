import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  RefreshControl,
  FlatList,
  Switch,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';

import {
  listing,
  genre,
  release,
  old,
  mostpopular,
  lesspopular,
  highrevenue,
  lessrevenue,
} from '../modules/movies/action';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      page: 2,
      grid: false,
      ismodalVisible: false,
      isRelease: false,
      isOld: false,
      ismost: true,
      isless: false,
      highrevenue: false,
      lowrevenue: false,
      header: 'Most Popular',
    };
  }
  refreshList = (refresh) => {
    this.setState({
      isRefreshing: refresh,
    });
  };
  setPage = (value) => {
    console.log('XYZ: ', value);
    this.setState({
      page: value,
    });
  };
  showLoader = (loader) => {
    this.setState({
      loader: loader,
    });
  };
  componentDidMount() {
    this.props.listing(1);
  }
  morePages = (page) => {
    this.props.listing(page);
  };

  dataStyling = ({item}) => {
    return (
      <View style={styles.moviesContainer}>
        <View>
          {item.poster_path !== null ? (
            <Image
              style={styles.image}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
          ) : (
            <View style={styles.nullContainer}>
              <Image
                style={styles.nullimage}
                source={require('../assets/null.png')}
              />
            </View>
          )}
        </View>

        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.description}>
            <Text style={styles.date}>{item.release_date.slice(0, 4)}</Text>

            <View style={styles.line} />
            <Text style={styles.date}>English</Text>
          </View>
          <View style={styles.genre}>
            <Text style={styles.date}>Action,Science Fiction</Text>
          </View>
        </View>
        <View
          style={[
            styles.Vote,
            item.vote_average < 7 ? styles.darkColor : styles.lightColor,
          ]}>
          <Text style={styles.votetext}>{item.vote_average}</Text>
        </View>
      </View>
    );
  };
  gridStyling = ({item}) => {
    return (
      <View style={styles.gridmoviesContainer}>
        {item.poster_path !== null ? (
          <Image
            style={styles.gridimage}
            source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          />
        ) : (
          <View style={styles.nullContainer}>
            <Image
              style={styles.nullimage}
              source={require('../assets/null.png')}
            />
          </View>
        )}

        <Text style={styles.gridtitle}>{item.title}</Text>
      </View>
    );
  };

  modalVisible = (visible) => {
    this.setState({
      ismodalVisible: visible,
    });
  };
  onReleaseClick = (value) => {
    this.setState({
      isRelease: value,
      isOld: false,
      ismost: false,
      isless: false,
      highrevenue: false,
      lowrevenue: false,
    });
  };
  onOldClick = (value) => {
    this.setState({
      isRelease: false,
      isOld: value,
      ismost: false,
      isless: false,
      highrevenue: false,
      lowrevenue: false,
    });
  };
  onmostClick = (value) => {
    this.setState({
      isRelease: false,
      isOld: false,
      ismost: value,
      isless: false,
      highrevenue: false,
      lowrevenue: false,
    });
  };
  onlessClick = (value) => {
    this.setState({
      isRelease: false,
      isOld: false,
      ismost: false,
      isless: value,
      highrevenue: false,
      lowrevenue: false,
    });
  };
  onhighRevenueClick = (value) => {
    this.setState({
      isRelease: false,
      isOld: false,
      ismost: false,
      isless: false,
      highrevenue: value,
      lowrevenue: false,
    });
  };
  onlessRevenueClick = (value) => {
    this.setState({
      isRelease: false,
      isOld: false,
      ismost: false,
      isless: false,
      highrevenue: false,
      lowrevenue: value,
    });
  };
  handleFilter = () => {
    if (this.state.isRelease) {
      this.props.release(1);
      this.setState({
        header: 'Release',
      });
    } else if (this.state.isOld) {
      this.props.old(1);
      this.setState({
        header: 'Old',
      });
    } else if (this.state.ismost) {
      this.props.mostpopular(1);
      this.setState({
        header: 'Most Popular',
      });
    } else if (this.state.isless) {
      this.props.lesspopular(1);
      this.setState({
        header: 'Less Popular',
      });
    } else if (this.state.highrevenue) {
      this.props.highrevenue(1);
      this.setState({
        header: 'Higher revenue',
      });
    } else if (this.state.lowrevenue) {
      this.props.lessrevenue(1);
      this.setState({
        header: 'Lowest revenue',
      });
    }
    this.modalVisible(false);
  };
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Home</Text>
            <TouchableOpacity onPress={() => this.modalVisible(true)}>
              <Image
                style={styles.filterIcon}
                source={require('../assets/filter.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.secondConatiner}>
            <Text style={styles.secondHeaderText}>{this.state.header}</Text>
            <TouchableOpacity
              onPress={() => this.setState({grid: !this.state.grid})}>
              <Image
                style={styles.gridIcon}
                source={require('../assets/grid.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.thirdContainer}>
            {!this.state.grid ? (
              <FlatList
                data={this.props.listData}
                renderItem={this.dataStyling}
                keyExtractor={(item, index) => item + index}
                key={1}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                      this.refreshList(true);
                      setTimeout(() => {
                        this.setPage(1);
                        this.props.listing(this.state.page);
                        this.refreshList(false);
                      }, 5000);
                    }}
                  />
                }
                onEndReached={() => {
                  this.setState({
                    page: this.state.page + 1,
                  });
                  this.morePages(this.state.page);
                }}
              />
            ) : (
              <FlatList
                data={this.props.listData}
                renderItem={this.gridStyling}
                numColumns={2}
                keyExtractor={(item, index) => item + index}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                      this.refreshList(true);
                      setTimeout(() => {
                        this.setPage(1);
                        this.props.listing(this.state.page);
                        this.refreshList(false);
                      }, 1000);
                    }}
                  />
                }
                onEndReached={() => {
                  this.setState({
                    page: this.state.page + 1,
                  });
                  this.morePages(this.state.page);
                }}
              />
            )}
          </View>
        </View>

        <Modal
          isVisible={this.state.ismodalVisible}
          swipeDirection="down"
          onBackdropPress={() => this.modalVisible(false)}
          style={styles.modal}>
          <View style={styles.Mcontainer}>
            <Text style={styles.Mheader}>Date</Text>
            <View style={styles.MinnerContainer}>
              <Text style={styles.Mtext}>Releases</Text>
              <Switch
                value={this.state.isRelease}
                trackColor={{false: 'grey', true: 'azure'}}
                thumbColor={this.state.isRelease ? 'darkcyan' : 'white'}
                onValueChange={(text) => this.onReleaseClick(text)}
              />
            </View>
            <View style={styles.MinnerContainer}>
              <Text style={styles.Mtext}>Old</Text>
              <Switch
                value={this.state.isOld}
                trackColor={{false: 'grey', true: 'azure'}}
                thumbColor={this.state.isOld ? 'darkcyan' : 'white'}
                onValueChange={(text) => this.onOldClick(text)}
              />
            </View>
            <Text style={styles.Mheader}>Popularity</Text>
            <View style={styles.MinnerContainer}>
              <Text style={styles.Mtext}>Most Popular</Text>
              <Switch
                value={this.state.ismost}
                trackColor={{false: 'grey', true: 'azure'}}
                thumbColor={this.state.ismost ? 'darkcyan' : 'white'}
                onValueChange={(text) => this.onmostClick(text)}
              />
            </View>
            <View style={styles.MinnerContainer}>
              <Text style={styles.Mtext}>Less Popular</Text>
              <Switch
                value={this.state.isless}
                trackColor={{false: 'grey', true: 'azure'}}
                thumbColor={this.state.isless ? 'darkcyan' : 'white'}
                onValueChange={(text) => this.onlessClick(text)}
              />
            </View>
            <Text style={styles.Mheader}>Revenue</Text>
            <View style={styles.MinnerContainer}>
              <Text style={styles.Mtext}>Higher revenue</Text>
              <Switch
                value={this.state.highrevenue}
                trackColor={{false: 'grey', true: 'azure'}}
                thumbColor={this.state.highrevenue ? 'darkcyan' : 'white'}
                onValueChange={(text) => this.onhighRevenueClick(text)}
              />
            </View>
            <View style={styles.MinnerContainer}>
              <Text style={styles.Mtext}>Lowest revenue</Text>
              <Switch
                value={this.state.lowrevenue}
                trackColor={{false: 'grey', true: 'azure'}}
                thumbColor={this.state.lowrevenue ? 'darkcyan' : 'white'}
                onValueChange={(text) => this.onlessRevenueClick(text)}
              />
            </View>
            <View style={styles.Mbutton}>
              <TouchableOpacity onPress={this.handleFilter}>
                <Text style={styles.Mtext}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listData: state.list,
  };
};
const mapDispatchToProps = (dispatch) => ({
  listing: (page) => dispatch(listing(page)),
  genre: () => dispatch(genre()),
  release: (page) => dispatch(release(page)),
  old: (page) => dispatch(old(page)),
  mostpopular: (page) => dispatch(mostpopular(page)),
  lesspopular: (page) => dispatch(lesspopular(page)),
  highrevenue: (page) => dispatch(highrevenue(page)),
  lessrevenue: (page) => dispatch(lessrevenue(page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2c2b',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  filterIcon: {
    width: 25,
    height: 25,
  },
  secondConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  secondHeaderText: {
    color: 'white',
    fontSize: 25,
  },
  gridIcon: {
    width: 30,
    height: 30,
  },
  thirdContainer: {
    flex: 1,
    //backgroundColor: 'red',
  },
  image: {
    width: 140,
    height: 180,
    marginRight: 20,
    borderRadius: 10,
  },
  moviesContainer: {
    flexDirection: 'row',
    margin: 10,
    width: 250,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  date: {
    color: 'white',
    fontSize: 17,
  },
  line: {
    borderWidth: 0.9,
    borderColor: 'white',
    height: 17,
    marginLeft: 10,
    marginRight: 10,
  },
  description: {
    flexDirection: 'row',
    marginTop: 10,

    alignItems: 'center',
  },
  Vote: {
    position: 'absolute',
    bottom: 0,
    left: 170,

    borderWidth: 1,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
  },
  darkColor: {
    backgroundColor: 'saddlebrown',
    borderColor: 'saddlebrown',
  },
  lightColor: {
    backgroundColor: 'darkgreen',
    borderColor: 'darkgreen',
  },

  votetext: {
    color: 'white',
    fontWeight: '500',
  },
  modal: {
    justifyContent: 'flex-end',
  },
  gridmoviesContainer: {
    margin: 10,
    width: 187,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridtitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 15,
  },
  gridimage: {
    width: 140,
    height: 180,
    borderRadius: 10,
  },
  Mcontainer: {
    height: 650,
    backgroundColor: '#2b2c2b',
    borderRadius: 10,
  },
  MinnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginBottom: 15,
    marginRight: 20,
    marginTop: 15,
  },
  Mtext: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
  },
  Mheader: {
    fontSize: 17,
    fontWeight: '500',
    margin: 20,
    color: 'white',
  },
  Mbutton: {
    margin: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgray',
  },
  nullimage: {
    width: 80,
    height: 80,
  },
  nullContainer: {
    width: 140,
    height: 180,
    marginRight: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    marginTop: 10,
  },
});
