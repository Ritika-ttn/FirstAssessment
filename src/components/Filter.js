import React, {Component} from 'react';
import {View, Text, Switch, StyleSheet, TouchableHighlight} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {
  release,
  old,
  mostpopular,
  lesspopular,
  highrevenue,
  lessrevenue,
} from '../modules/movies/action';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRelease: false,
      isOld: false,
      ismost: false,
      isless: false,
      highrevenue: false,
      lowrevenue: false,
    };
  }
  onReleaseClick = (value) => {
    this.setState({
      isRelease: value,
    });
    this.props.release();
  };
  onOldClick = (value) => {
    this.setState({
      isOld: value,
    });
    this.props.old();
  };
  onmostClick = (value) => {
    this.setState({
      ismost: value,
    });
    this.props.mostpopular();
  };
  onlessClick = (value) => {
    this.setState({
      isless: value,
    });
    this.props.lesspopular();
  };
  onhighRevenueClick = (value) => {
    this.setState({
      highrevenue: value,
    });
    this.props.highrevenue();
  };
  onlessRevenueClick = (value) => {
    this.setState({
      lowrevenue: value,
    });
    this.props.lessrevenue();
  };
  render() {
    return (
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
          <TouchableOpacity>
            <Text style={styles.Mtext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
// const mapStateToProps = (state) => {
//     return {
//       listData: state.list,
//       genreData: state.genre,
//     };
//   };
const mapDispatchToProps = (dispatch) => ({
  release: () => dispatch(release()),
  old: () => dispatch(old()),
  mostpopular: () => dispatch(mostpopular()),
  lesspopular: () => dispatch(lesspopular()),
  highrevenue: () => dispatch(highrevenue()),
  lessrevenue: () => dispatch(lessrevenue()),
});
export default connect(null, mapDispatchToProps)(Filter);
const styles = StyleSheet.create({
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
});
