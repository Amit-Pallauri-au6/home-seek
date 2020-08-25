import React, {Component}  from 'react'
import { connect } from 'react-redux'
import {getRequestedPosts} from '../redux/actions/requestsActions'
import { Descriptions, Button, Drawer } from 'antd';
import '../styles/request.css'
import { particularHome } from '../redux/actions/listingActions';

class OwnerProfile extends Component{
    state = {
        visible : false
    }

    componentDidMount(){
        this.props.getRequestedPosts()
    }

    showDrawer = (e) => {
        this.setState({visible : true});
        const homeId = e.target.name
        this.props.particularHome(homeId)
      };

    onClose = () => {
        this.setState({visible : false});
    };

    render(){
        return (
            this.props.posts.posts.length == 0
            ? 
                <h1>Loading...</h1>
            : 
                this.props.posts.posts.map(el =>
                    <div key={el._id} style = {{ display : 'flex', justifyContent : "center", alignItems : 'center'}} >
                        <Descriptions className='request-description' title={el.societyName}>
                            <Descriptions.Item label="Address">
                                {el.location.formattedAddress}
                            </Descriptions.Item>
                            <Descriptions.Item label="Telephone">{el.phoneNumber}</Descriptions.Item>
                            <Descriptions.Item label="created on">{el.createdAt}</Descriptions.Item>
                            <Descriptions.Item label="vacant">{el.vacant == true ? 'yes' : 'no'}</Descriptions.Item>
                            <Descriptions.Item label="verified">{el.verified == true ? 'yes' : 'no'}</Descriptions.Item>
                            <Descriptions.Item>
                             <button name={el._id} onClick={this.showDrawer}>
                                     Details
                             </button>
                            </Descriptions.Item>
                        </Descriptions>
                        <div>
                                    <Drawer
                                        title="Basic Drawer"
                                        placement="right"
                                        closable={false}
                                        onClose={this.onClose}
                                        visible={this.state.visible}
                                    >
                                        <p>{ }</p>
                                    </Drawer>
                        </div>
                    </div>
                )
        )    
    }
}

const mapStateToProps = stateStatus => {
    return {
        posts : stateStatus.postsState,
        homeDetails : stateStatus.listingState.particularHome
    }
}

export default connect(mapStateToProps, { getRequestedPosts, particularHome }) (OwnerProfile)