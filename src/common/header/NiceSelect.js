import React from 'react';

export default class NiceSelect extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        $('select').niceSelect();
          
    }
    render(){
        return (
            <>
                <div className="location-box">
                    <div className="select-box">
                        <select className="selectmenu wide">
                            <option selected="selected">New York</option>
                            <option>Sydney</option>
                            <option>Khulna</option>
                            <option>Dhaka</option>
                            <option>Los Angeles</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}