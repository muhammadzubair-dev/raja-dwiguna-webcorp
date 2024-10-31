import React from 'react';
import {Link} from 'react-router-dom';
import BlogCategory from './BlogCategory';
import BlogLatestPost from './BlogLatestPost';
import BlogQuery from './BlogQuery';
import BlogSearch from './BlogSearch';
import BlogTags from './BlogTags';

export default class BlogSeven extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: true,
        
              fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-standard">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-standard__left">
                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl+"assets/images/blog/blog-standard-img1.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Oct</p>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                </li>
                                            </ul>
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Improve Workflow With Agile Construction</Link></h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                                suffered alteration in some form, by injected humour, or randomised words which
                                                don't look even slightly believable. If you are going to use a passage of Lorem
                                                Ipsum.</p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl+"assets/images/blog/blog-standard-img2.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Oct</p>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                </li>
                                            </ul>
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>What Are The Benefits Of LEED Certification?</Link>
                                            </h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                                suffered alteration in some form, by injected humour, or randomised words which
                                                don't look even slightly believable. If you are going to use a passage of Lorem
                                                Ipsum.</p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl+"assets/images/blog/blog-standard-img3.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Oct</p>
                                            </div>
                                            <div className="blog-standard__video-link">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="blog-standard__video-icon">
                                                        <span className="fa fa-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                </li>
                                            </ul>
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Tips : Is Builders Needs Liability Insurance</Link>
                                            </h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                                suffered alteration in some form, by injected humour, or randomised words which
                                                don't look even slightly believable. If you are going to use a passage of Lorem
                                                Ipsum.</p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl+"assets/images/blog/blog-standard-img4.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Oct</p>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                </li>
                                            </ul>
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>The 9 Best Guideline For The Construction</Link></h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                                suffered alteration in some form, by injected humour, or randomised words which
                                                don't look even slightly believable. If you are going to use a passage of Lorem
                                                Ipsum.</p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Blog Standard Single */}
                                    <div className="blog-standard__single">
                                        <div className="blog-standard__single-img">
                                            <img src={publicUrl+"assets/images/blog/blog-standard-img5.jpg"} alt="" />
                                            <div className="blog-standard__date">
                                                <p>10 <br /> Oct</p>
                                            </div>
                                        </div>
                                        <div className="blog-standard__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                </li>
                                            </ul>
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>What Can Not You Put In The Dumpster?</Link></h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                                suffered alteration in some form, by injected humour, or randomised words which
                                                don't look even slightly believable. If you are going to use a passage of Lorem
                                                Ipsum.</p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog Standard Single */}

                                    {/* Start Styled Pagination */}
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <ul className="styled-pagination clearfix">
                                                <li className="prev"><Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-angle-double-left"></span></Link>
                                                </li>
                                                <li><Link to={process.env.PUBLIC_URL + `/`} className="active">1</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + `/`}>2</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + `/`}>3</Link></li>
                                                <li className="next"><Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-angle-double-right"></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Start Styled Pagination */}
                                </div>
                            </div>

                            {/* Start Sidebar */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar sidebar__blog-standard">
                                    <BlogSearch />
                                    <BlogCategory />
                                    <BlogLatestPost />
                                    <BlogQuery />
                                    <BlogTags />
                                </div>
                            </div>
                            {/* End Sidebar */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}