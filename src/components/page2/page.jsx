import React, { Component, useState, useEffect } from 'react'
import "./style.scss"
import { connect } from "react-redux"
import setData from "../../redux_management/action/actions"
import Menu from "../Menu/menu.jsx"
import { useDispatch, useSelector } from "react-redux"




export default function Page() {
    const dispatch = useDispatch()

    const data_1=useSelector(state => state.data_1)
    const data_2=useSelector(state => state.data_2)

    const [input_1, set_input_1] = useState(data_1)
    const [input_2, set_input_2] = useState(data_2)


    useEffect(() => {
        if (input_1) {
            dispatch(setData(1, input_1))
            console.log("update input_1", input_1)
        }

    }, [input_1])

    useEffect(() => {
        if (input_1) {
            dispatch(setData(2, input_2))
            console.log("update input_2", input_1)
        }
    }, [input_2])




    return (
        <div className="Page2">
            <h1>Page2</h1>

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
                                <input value={input_1} onChange={(e) => set_input_1(e.target.value)} className="inputs input_1" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Input 2
                        </th>
                            <td>
                                <input value={input_2} onChange={(e) => set_input_2(e.target.value)} className="inputs input_2" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>




        </div>
    )
}
