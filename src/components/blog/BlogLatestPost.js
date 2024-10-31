import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogLatestPost extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="sidebar__single sidebar__post">
                    <h3 className="sidebar__title">Recent Post</h3>
                    <div className="sidebar__post-box">
                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <img src={publicUrl+"assets/images/blog/lp-1-1.jpg"} alt="" />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><Link to="/">Nemo enim ipsam voluptatem quia voluptas sit aspernatur </Link></h3>
                            </div>
                        </div>
                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <img src={publicUrl+"assets/images/blog/lp-1-2.jpg"} alt="" />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><Link to="/">Nemo enim ipsam voluptatem quia voluptas sit aspernatur </Link></h3>
                            </div>
                        </div>
                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <img src={publicUrl+"assets/images/blog/lp-1-3.jpg"} alt="" />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><Link to="/">Nemo enim ipsam voluptatem quia voluptas sit aspernatur </Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}