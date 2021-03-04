import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavLink } from "mdbreact";
import Axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Sports extends Component {
    state = {
        title: [],
        carousel: [],
        artikel_0: [],
        artikel_1: [],
        artikel_2: []
    }


    componentDidMount() {
        Axios.get('https://today.line.me/id/portaljson')
            .then((res) => {
                this.setState({ title: res.data.result.categories[9].templates })
                console.log(this.state.title)
                var data = res.data.result.categories[9]
                this.setState({
                    carousel: data.templates[3].sections[0].articles,
                    artikel_0: data.templates[8].sections[0].articles,
                    artikel_1: data.templates[4].sections[0].articles,
                    artikel_2: data.templates[7].sections[0].articles
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    rendertitle = (x, y) => {
        var title = this.state.title.slice(x, y)
        console.log(title)
        return title.map((val, index) => {
            return (
                <div key={index}>
                    {val.title}
                </div>
            )
        })
    }

    renderartikel = (artikel) => {
        return artikel.map((val, index) => {
            return (
                <div key={index} className="col-md-6 mb-2">
                    <Link style={{ color: "black" }} to={{ pathname: `https://today.line.me/id/article/${val.url.hash}` }} target="_blank" >
                        <div className="isi">
                            <img src={'https://obs.line-scdn.net/' + val.thumbnail.hash} />
                        </div>
                        <div className="title pr-3">
                            {val.title}
                        </div>
                        <div className="title-source">
                            {val.publisher}
                        </div>
                    </Link>
                </div>
            )
        })
    }

    renderhighlight = (highlight) => {
        return highlight.map((val, index) => {
            return (
                <Link style={{ color: "black" }} to={{ pathname: `https://today.line.me/id/article/${val.url.hash}` }} target="_blank" >
                    <div key={index} className="topic-header-2 mb-3">
                        <div className="topic-image">
                            <img src={'https://obs.line-scdn.net/' + val.thumbnail.hash} />
                        </div>
                        <div>
                            <div className="topic-title">
                                {val.title}
                            </div>
                            <div className="topic-source">
                                {val.publisher}
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
    }

    rendercarousel = () => {
        return this.state.carousel.map((val, index) => {
            return (
                <Link style={{ color: "white" }} to={{ pathname: `https://today.line.me/id/article/${val.url.hash}` }} target="_blank" >
                    <MDBCarouselItem key={index} itemId={index + 1}>
                        <MDBView className="carousel">
                            <img
                                src={'https://obs.line-scdn.net/' + val.thumbnail.hash}
                                alt={val.title}
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">{val.title}</h3>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </Link>
            )
        })
    }

    render() {
        const { title, carousel, artikel_0, artikel_1, artikel_2 } = this.state
        return (
            <div>
                <div className="text-center pt-3">
                    <MDBBtnGroup>
                        <MDBBtn color="white" size="lg"><Link style={{ color: "black" }} to='/Showbiz'>Top 5 League</Link>
                        </MDBBtn>
                        <MDBBtn color="white" size="lg"><Link style={{ color: "black" }} to='/Corona di RI'>Racing</Link></MDBBtn>
                        <MDBBtn color="white" size="lg"><Link style={{ color: "black" }} to='/Sports'>Trending</Link></MDBBtn>
                    </MDBBtnGroup>
                </div>
                <div>
                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(1, 2)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_0)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(3, 4)}
                    </div>
                    <div className="pt-3">
                        <MDBContainer>
                            <MDBCarousel
                                activeItem={1}
                                length={carousel.length}
                                showControls={true}
                                showIndicators={true}
                                className="z-depth-1"
                            >
                                <MDBCarouselInner>
                                    {this.rendercarousel()}
                                </MDBCarouselInner>
                            </MDBCarousel>
                        </MDBContainer>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(4, 5)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_1)}
                        </div>
                    </div>

                    <div className="pt-3 ml-2" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(7, 8)}
                    </div>
                    {this.renderhighlight(artikel_2)}
                </div>
            </div>
        );
    }
}

export default (Sports)