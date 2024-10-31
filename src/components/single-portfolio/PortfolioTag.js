import React from 'react';
import {Link} from 'react-router-dom';

export default class PortfolioTag extends React.Component {
    render(){
        return (
            <>
                <div className="protfolio-details__sidebar-single protfolio-details-tags clearfix">
                    <div className="title">
                        <h2>Tags Cloud</h2>
                    </div>
                    <ul className="protfolio-details-tags-list">
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Project</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Design</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Love</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Art</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>illustration</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Android</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Travel</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Technology</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}