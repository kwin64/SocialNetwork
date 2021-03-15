import React from 'react';
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state:StateType) => {
    return {
        sidebarData: state.sidebarData
    }
}
const mapDispatchToProps = () => {

}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer;
