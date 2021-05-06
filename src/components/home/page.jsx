import React, { Component } from 'react'
import "./style.scss"
import { connect } from "react-redux"
import setData from "../../redux_management/action/actions"
import Menu from "../Menu/menu.jsx"

 class Page extends Component {

    state = {
        input_1: "",
        input_2: ""
    }

    componentDidMount(){
        this.setState(this.props.inputs)
    }

    componentWillUnmount() {
        if (this.props) {
            if (this.props.setData_2)
                this.props.setData_2(this.state.input_2)
        }
    }


    render() {
        return (
            <div className="Home">
                <h1>Home Page</h1>

                <div className="blk">
                    <Menu />
                </div>

                <div className="blk">
                    <table className="redux_data">
                        <tbody>
                            <tr>
                                <th>
                                    Input 1
                        </th>
                                <td>
                                    <input value={this.state.input_1} onChange={(e) => this.setState({ input_1: e.target.value }, () => {
                                        if (this.props.setData_1)
                                            this.props.setData_1(this.state.input_1)
                                    })} className="inputs input_1" />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Input 2
                        </th>
                                <td>
                                    <input value={this.state.input_2} onChange={(e) => this.setState({ input_2: e.target.value })} className="inputs input_2" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>




            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
   return {
    inputs:{
        input_1:state.data_1,
        input_2:state.data_2
    }
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setData_1: (data) => dispatch({
            type:"SET_R1",
            payload:data
        }),
        setData_2: (data) => dispatch(setData(1, data)),
        resetData_1: (data) => dispatch(setData(2, data)),
        resetData_2: (data) => dispatch(setData(3, data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)