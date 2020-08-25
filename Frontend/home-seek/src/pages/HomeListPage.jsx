import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {allHomes} from '../redux/actions/listingActions';
import HomeListItem from '../components/HomeListItem';

class HomeListPage extends Component {

    componentDidMount() {
        this.props.allHomes()
    }
    render() {
        console.log(this.props.homes)
        if(!this.props.user)  return <Redirect to="/" /> 
        return this.props.homes ? 
        <HomeListItem homes={this.props.homes} />
        : null
    }
}

const mapStateToProps = (storeState) => {
	return { 
        user: storeState.userState.user,
        homes: storeState.listingState.allHomes
    };
};


export default connect(mapStateToProps, {allHomes})(HomeListPage)