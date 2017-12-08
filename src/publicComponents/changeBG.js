import React from "react"

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
            <select onChange={this.selectChange}>
                <option value ="volvo">Volvo</option>
                <option value ="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        )
    }
}
export default ChangeBG;