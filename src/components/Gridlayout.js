import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
// const {width} = Dimensions.get('window');
import {listing, genre} from '../modules/movies/action';
class Gridlayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      loader: false,
      page: 1,
      grid: false,
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
    console.log('PAGEEEE', this.state.page);
    this.props.genre();
    this.props.listing();
  }

  dataStyling = ({item}) => {
    return (
      <View style={styles.moviesContainer}>
        <Image
          style={styles.image}
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        />

        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  Loader = () => {
    return this.state.loader ? (
      <View>
        <ActivityIndicator
          animating={this.state.loader}
          size={'large'}
          color={'red'}
        />
      </View>
    ) : null;
  };
  gridStructor = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Home</Text>
            <TouchableOpacity>
              <Image
                style={styles.filterIcon}
                source={require('../assets/filter.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.secondConatiner}>
            <Text style={styles.secondHeaderText}>Most Popular</Text>
            <TouchableOpacity onPress={this.gridStructor}>
              <Image
                style={styles.gridIcon}
                source={require('../assets/grid.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.thirdContainer}>
            <FlatList
              data={this.props.listData}
              renderItem={this.dataStyling}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
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
                if (this.state.page <= 1) {
                  this.showLoader(true);
                  setTimeout(() => {
                    this.setPage(this.state.page + 1);
                    this.props.listing(this.state.page);
                    this.showLoader(true);
                  }, 1000);
                }
              }}
              ListFooterComponent={<this.Loader />}
            />
          </View>
        </View>
        {/* {console.log('ListData', this.props.genreData)}
        {console.log('data', this.props.listData)} */}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listData: state.list,
    genreData: state.genre,
  };
};
const mapDispatchToProps = (dispatch) => ({
  listing: (page) => dispatch(listing(page)),
  genre: () => dispatch(genre()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Gridlayout);
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
    // backgroundColor: 'red',
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  moviesContainer: {
    margin: 10,
    width: 187,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 15,
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
    borderColor: 'green',
    borderWidth: 1,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'green',
    borderRadius: 20,
  },
  votetext: {
    color: 'white',
    fontWeight: '500',
  },
});
