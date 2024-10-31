import React from 'react';
import {Link} from 'react-router-dom';
import BlogCategory from './BlogCategory';
import BlogLatestPost from './BlogLatestPost';
import BlogQuery from './BlogQuery';
import BlogSearch from './BlogSearch';
import BlogTags from './BlogTags';

export default class BlogSix extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-list-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-list__left">
                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img1.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                        </li>
                                                    </ul>
                                                    <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Improve Workflow With Agile Construction</Link>
                                                    </h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but
                                                        majority have suffered alteration in some form, by injected humour</p>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img2.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                        </li>
                                                    </ul>
                                                    <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Tips : Is Builders Needs Liability
                                                            Insurance</Link></h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but
                                                        majority have suffered alteration in some form, by injected humour</p>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img3.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                        </li>
                                                    </ul>
                                                    <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Capitalise On Low Hanging Fruit To
                                                            Identify</Link></h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but
                                                        majority have suffered alteration in some form, by injected humour</p>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img4.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                        </li>
                                                    </ul>
                                                    <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Best Cement Roof Manufacture Company</Link>
                                                    </h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but
                                                        majority have suffered alteration in some form, by injected humour</p>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span
                                                                className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img5.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                        </li>
                                                    </ul>
                                                    <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>What Can Not You Put In The Dumpster?</Link>
                                                    </h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but
                                                        majority have suffered alteration in some form, by injected humour</p>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img6.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                        </li>
                                                    </ul>
                                                    <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>The 9 Best Guideline For The
                                                            Construction</Link></h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but
                                                        majority have suffered alteration in some form, by injected humour</p>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Blog List Single */}
                                    <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="blog-list__single-img">
                                                    <img src={publicUrl+"assets/images/blog/blog-list-img7.jpg"} alt="#" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="blog-list__single-content">
                                                    <ul className="meta-info">
                                                        <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>Admin</Link></li>
                                                        <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comments</Link>
                                                        </li>
                                                    </ul>
                                                    <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>What Are The Benefits Of LEED
                                                            Certification?</Link></h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but
                                                        majority have suffered alteration in some form, by injected humour</p>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-plus-sign"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog List Single */}

                                    {/* Start Styled Pagination */}
                                    <div className="blog-list__pagination">
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
                                    {/* Start Styled Pagination */}
                                </div>
                            </div>


                            {/* Start Sidebar */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar sidebar__blog-list">
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