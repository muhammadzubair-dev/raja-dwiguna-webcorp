import React from 'react';

export default class ServiceSearch extends React.Component {
    render(){
        return (
            <>
                <div className="services-details__sidebar-single services-details-search">
                    <div className="title">
                        <h2>Search</h2>
                    </div>
                    <form action="#" className="services-details-search-form">
                        <input type="search" placeholder="Search.." />
                        <button type="submit"><span className="icon-search-interface-symbol"></span></button>
                    </form>
                </div>
            </>
        )
    }
}