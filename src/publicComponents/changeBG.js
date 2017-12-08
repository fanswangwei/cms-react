import React from "react"
import "./changeBG.scss";
class ChangeBG extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.selectChange = this.selectChange.bind(this);
    }
    selectChange(e){
        // console.log()
        const {changeBG} = this.props;
        changeBG(e.target.value)
    }
    render(){
        return (
            <ul className="changeBG">
                <li className="bg">1</li>
                <li className="bg2">2</li>
                <li className="bg3">3</li>
                <li className="bg5">5</li>
                <li className="bg6">6</li>
                <li className="bg7">7</li>
                <li className="bg8">8</li>
                <li className="bg9">9</li>
                <li className="bg10">10</li>
                <li className="bg11">11</li>
                <li className="bg12">12</li>
                <li className="bg13">13</li>
            </ul>
        )
    }
}
export default ChangeBG;