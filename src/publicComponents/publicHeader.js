import React from 'react';
import "./publicHeader.scss";
import ChangeBG from "./changeBG.js";

function RightItems (props) { 
    if(props.isShow){
        return <ul className="person-info-list">
                <li>
                    <a href="javascript:;"><span className="info-user"></span>&nbsp;&nbsp;My Profile</a>
                </li>
                <li>
                    <a href="javascript:;"><span className="info-setting"></span>&nbsp;&nbsp;Account Setting</a>
                </li>
                <li>
                    <a href="javascript:;"><span className="info-help"></span>&nbsp;&nbsp;Help</a>
                </li>
                <li className="divider"></li>
                <li>
                    <a href="javascript:;"><span className="info-signOut"></span>&nbsp;&nbsp;Sign out</a>
                </li>
            </ul>;
    }else{
        return '';
    }
}
class PublicHeader extends React.Component {
    constructor(porps){
        super(porps)
        this.state = {
            personImgHover: false
        }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }
    mouseEnter(e){
        this.setState(prevState => ({
            personImgHover: true
        }))
    }
    mouseLeave(e){
        this.setState(prevState => ({
            personImgHover: false
        }))
    }
    render() {
        const personImgHover = this.state.personImgHover;
        // 将APP的回调函数函数传递给changeBG
        const {changeBG} = this.props;
        return (
            <div className="publicHeader">
                <div className="themeSelect">
                    <input type="text" readOnly="true" placeholder="主题选择"/>
                    <span className="showDown"></span>
                </div>
                {/*将APP的回调函数函数传递给changeBG*/}
                <ChangeBG changeBG={changeBG}/>
                <ul className="left-items">
                    <li>
                        <a className="news-btn" href="javascript:;" title="消息"></a>
                    </li>
                    <li>
                        <a className="warning-btn" href="javascript:;" title="警告"></a>
                    </li>
                    <li>
                        <a className="help-btn" href="javascript:;" title="帮助"></a>
                    </li>
                </ul>
                <div className="right-items" onMouseLeave={this.mouseLeave}>
                    <div className={this.state.personImgHover?'active person-img':'person-img'} onMouseEnter={this.mouseEnter}>
                        <img src={require('./../images/person-img.png')}/>
                        <h3><a href="javascript:;">丹青天下</a></h3>
                    </div>
                    <RightItems isShow={personImgHover}/>
                </div>
            </div>
        );
    }
}

export default PublicHeader;