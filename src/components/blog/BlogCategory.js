import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogCategory extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="sidebar__category-list">
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Interio <span>(12)</span></Link></li>
                        <li className="active"><Link to={process.env.PUBLIC_URL + `/`}>Residential<span>(10)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Planning <span>(14)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Industrial <span>(08)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Factory <span>(06)</span></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}