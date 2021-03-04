import React, { Component } from "react";
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavLink } from "mdbreact";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import { connect } from 'react-redux'
import { IniHome, BukanHome } from './../redux/actions'
import Axios from 'axios'
import {Link} from 'react-router-dom';


class Home extends Component {
    state = {
        top: [],
        carousel: [],
        artikel_0: [],
        artikel_1: [],
        artikel_2: [],
        artikel_3: [],
        artikel_4: [],
        artikel_5: [],
        artikel_6: []
    }

    componentWillUnmount = () => {
        console.log('jalan unmount')
        this.props.BukanHome()
    }

    componentDidMount() {
        Axios.get('https://today.line.me/id/portaljson')
            .then((res) => {
                // console.log(res.data.result.categories)
                console.log(res.data.result.categories[0].templates)
                this.setState({ top: res.data.result.categories[0].templates })
                // console.log(this.state.top[2].title)
                var data = res.data.result.categories[0]
                console.log(res.data.result.categories[0].templates[1].sections[0].articles)
                this.setState({
                    carousel: data.templates[10].sections[0].articles,
                    artikel_0: data.templates[1].sections[1].articles,
                    artikel_1: data.templates[1].sections[0].articles,
                    artikel_2: data.templates[6].sections[0].articles,
                    artikel_3: data.templates[14].sections[0].articles,
                    artikel_4: data.templates[9].sections[0].articles,
                    artikel_5: data.templates[16].sections[0].articles,
                    artikel_6: data.templates[17].sections[0].articles
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    rendertitle = (x, y) => {
        var title = this.state.top.slice(x, y)
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
        const { top, carousel, artikel_0, artikel_1, artikel_2, artikel_3, artikel_4, artikel_5, artikel_6 } = this.state
        return (
            <div>
                <div className="text-center pt-3">
                    <MDBBtnGroup>
                        <MDBBtn href="/Showbiz" color="white" size="lg">{this.rendertitle(9, 10)}
                        </MDBBtn>
                        <MDBBtn href="/Corona di RI" color="white" size="lg">Corona di RI</MDBBtn>
                        <MDBBtn href="/Sports" color="white" size="lg">{this.rendertitle(16, 17)}</MDBBtn>
                    </MDBBtnGroup>
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
                <div>

                    <div className="ml-2 mt-5">
                        {this.renderhighlight(artikel_0)}
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(2, 3)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_1)}
                        </div>
                    </div>

                    <div style={{ backgroundImage: "linear-gradient(103deg,#c74a82,#f68a94)" }} className="topic-header">
                        <div className="topic-font">
                            {this.rendertitle(6, 7)}
                        </div>
                    </div>
                    <div className="container mt-3 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_2)}
                        </div>
                    </div>

                    <div className="pt-3 ml-2" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(14, 15)}
                    </div>
                    {this.renderhighlight(artikel_3)}

                    <div style={{ backgroundImage: "linear-gradient(103deg,#3d389c,#3fafc9)" }} className="topic-header">
                        <div className="topic-font">
                            {this.rendertitle(9, 10)}
                        </div>
                    </div>
                    <div className="container mt-3 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_4)}
                        </div>
                    </div>

                    <div style={{ backgroundImage: "linear-gradient(103deg,#2a9c5b,#46b897)" }} className="topic-header">
                        <div className="topic-font">
                            {this.rendertitle(16, 17)}
                        </div>
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_5)}
                        </div>
                    </div>

                    <div style={{ backgroundImage: "linear-gradient(103deg,#946e50,#c3aa82)" }} className="topic-header">
                        <div className="topic-font">
                            {this.rendertitle(17, 18)}
                        </div>
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_6)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const MapstatetoProps = ({ Auth }) => {
    return {

    }
}
export default connect(MapstatetoProps, { IniHome, BukanHome })(Home);