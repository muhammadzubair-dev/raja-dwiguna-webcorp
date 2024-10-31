import React from 'react';
import {Link} from 'react-router-dom';
import BlogCategory from '../blog/BlogCategory';
import BlogLatestPost from '../blog/BlogLatestPost';
import BlogQuery from '../blog/BlogQuery';
import BlogSearch from '../blog/BlogSearch';
import BlogTags from '../blog/BlogTags';

export default class SingleBlogDetails extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7">
                                <div className="blog-details__left">
                                    <div className="blog-details__img">
                                        <img src={publicUrl+"assets/images/blog/blog-details-img-1.jpg"} alt="" />
                                        <div className="blog-details__date">
                                            <p> <span>10</span> <br /> Oct</p>
                                        </div>
                                    </div>
                                    <div className="blog-details__content">
                                        <ul className="blog-details__meta">
                                            <li><Link to={process.env.PUBLIC_URL + `/`}><i className="fa fa-bookmark"></i><span>Corporate</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}><i className="fa fa-user"></i><span>Paul Smith</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}><i className="fa fa-comments"></i><span>0 Comment</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}><i className="fa fa-heart"></i><span>0 Like</span></Link></li>
                                        </ul>
                                        <h3 className="blog-details__title">Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                            aut odit aut fugit</h3>
                                        <p className="blog-details__text-1">Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptat velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat none proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum. Sed ut is a perspiciatis unde omnis iste natus error sit
                                            voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                            illo inventore veritatis equasi architecto beatae vitae dicta sunt explicabo. Nemo
                                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                            consequuntur magni doloreeos qui ratione voluptatem sequi nesciunt. </p>
                                        <p className="blog-details__text-2">Excepteur sint occaecat cupidatat none proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum. Sed ut is a perspiciatis unde
                                            omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo inventore veritatis </p>
                                    </div>
                                    <div className="blog-details__content-two">
                                        <div className="blog-details__content-two-img">
                                            <img src={publicUrl+"assets/images/blog/blog-details-img-2.jpg"} alt="" />
                                        </div>
                                        <div className="blog-details__content-two-details">
                                            <h3 className="blog-details__content-two-title">Building Renovation</h3>
                                            <p className="blog-details__content-two-text-1">Labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nexercitatiullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolreprehenderit in voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur. Excepteur sint </p>
                                            <p className="blog-details__content-two-text-2">Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate </p>
                                            <ul className="blog-details__content-two-points">
                                                <li>Living so moveth won fish waters thing grass tree does not fresh there.</li>
                                                <li>Beast itself doesn't signs they are so together signs for the called.</li>
                                                <li>Male divide sixth cattle evening all shall over green may seasons said.</li>
                                                <li>Divided lights wherein wishing land bring deep abundantly also may.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-details__bottom">
                                        <p className="blog-details__tags">
                                            <Link to={process.env.PUBLIC_URL + `/`}>Office</Link>
                                            <Link to={process.env.PUBLIC_URL + `/`}>Design</Link>
                                            <Link to={process.env.PUBLIC_URL + `/`}>Build</Link>
                                        </p>
                                        <div className="blog-details__social-list">
                                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                            <a href="https://facebook.com/"><i className="fab fa-facebook"></i></a>
                                            <a href="https://pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="author-one">
                                        <div className="inner">
                                            <div className="author-one__image">
                                                <img src={publicUrl+"assets/images/blog/author-1-1.jpg"} alt="" />
                                            </div>
                                            <div className="author-one__content">
                                                <h3>Hover Cameron</h3>
                                                <p>Them cattle had their you're female, living seed firmament earth saying mud
                                                    you dark make heaven face carribian surface saying without.</p>
                                                <ul>
                                                    <li><a href="https://facebook.com/"><i className="fab fa-facebook-square" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://twitter.com/"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://instagram.com/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://google.com/"><i className="fab fa-google" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-one">
                                        <h3 className="comment-one__title">Comments (2)</h3>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image">
                                                <img src={publicUrl+"assets/images/blog/comment-1-1.jpg"} alt="" />
                                            </div>
                                            <div className="comment-one__content">
                                                <h3>Suren Sumi</h3>
                                                <p>Blessed heaven in seasons man were image void seasons given bearing greats
                                                    fly all multiply you can surem dolor mesurement good.</p>
                                                <span>February 03. 2022 <Link to={process.env.PUBLIC_URL + `/`} className="comment-one__btn">Reply</Link></span>
                                            </div>
                                        </div>

                                        <div className="comment-one__single">
                                            <div className="comment-one__image">
                                                <img src={publicUrl+"assets/images/blog/comment-1-2.jpg"} alt="" />
                                            </div>
                                            <div className="comment-one__content">
                                                <h3>Jessica Brown</h3>
                                                <p>Blessed heaven in seasons man were image void seasons given bearing greats
                                                    fly all multiply you can surem dolor mesurement good.</p>
                                                <span>February 03. 2022 <Link to={process.env.PUBLIC_URL + `/`} className="comment-one__btn">Reply</Link></span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="comment-form">
                                        <h3 className="comment-form__title">Leave A Reply</h3>
                                        <form action="#" className="comment-one__form contact-form-validated"
                                            novalidate="novalidate">
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Your Name" name="name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box">
                                                        <input type="email" placeholder="Email Address" name="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box comment-form__textarea">
                                                        <textarea name="message" placeholder="Write Comment"></textarea>
                                                    </div>

                                                    <div className="comment-form__btn-box">
                                                        <button className="thm-btn comment-form__btn" data-text="Post Comment +" type="submit" 
                                                        data-loading-text="Please wait...">Post Comment +</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Start Sidebar */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="sidebar">
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