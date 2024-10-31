import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogTags extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Tags Cloud</h3>
                    <ul className="sidebar__tags-list">
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Project</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Design</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Art</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>illustration</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Love</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}