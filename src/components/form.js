import React , {Component } from "react"

export default class Form extends Component {

    onHandleChange = (event) => {
        console.log("running")
    }
    render() {
        return (
            <div className="form-con">
                <h1 className="form-name">FORM</h1>
                           <form action="" className="form">
                           <input type="text" name="" id=""  onHandleChange = {this.onHandleChange}  /></form>
                           <button className="frm-btn" >Submit</button>
            </div>

        )
    }
}