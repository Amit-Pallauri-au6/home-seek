import React, { Component } from 'react'
import UserServices from './UserServices';
import UserHome from './UserHome'
import { Tabs } from 'antd'

const { TabPane } = Tabs;

class MyHome extends Component {
    render() {
        return (
            <div>
                <Tabs tabPosition={'top'}>
                    <TabPane tab="services" key="2">
                        <UserServices/>
                    </TabPane>
                    <TabPane tab="My home" key="1">
                        <UserHome/>
                    </TabPane> 
                </Tabs>
            </div>
        )
    }
}

export default MyHome
