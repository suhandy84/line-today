import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import Axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {API_URL} from './../supports/API_URL'


class Showbiz extends Component {
    state = {
        title: [],
        carousel: [],
        artikel_0: [],
        artikel_1: [],
        artikel_2: [],
        artikel_3: [],
        artikel_4: [],
        artikel_5: [],
        artikel_6: [],
        artikel_7: []
    }


    componentDidMount() {
        Axios.get(API_URL)
            .then((res) => {
                this.setState({ title: res.data.result.categories[1].templates })
                var data = res.data.result.categories[1]
                this.setState({
                    carousel: data.templates[1].sections[0].articles,
                    artikel_0: data.templates[3].sections[0].articles,
                    artikel_1: data.templates[11].sections[0].articles,
                    artikel_2: data.templates[6].sections[0].articles,
                    artikel_3: data.templates[7].sections[0].articles,
                    artikel_4: data.templates[8].sections[0].articles,
                    artikel_5: data.templates[9].sections[0].articles,
                    artikel_6: data.templates[10].sections[0].articles,
                    artikel_7: data.templates[12].sections[0].articles
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
        const { title, carousel, artikel_0, artikel_1, artikel_2, artikel_3, artikel_4, artikel_5, artikel_6, artikel_7 } = this.state
        return (
            <div>
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
                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(3, 4)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_0)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(5, 6)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_1)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(6, 7)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_2)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(7, 8)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_3)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(8, 9)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_4)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(9, 10)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_5)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(10, 11)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_6)}
                        </div>
                    </div>

                    <div className="pt-3 ml-2" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(12, 13)}
                    </div>
                    {this.renderhighlight(artikel_7)}
                </div>
            </div>
        );
    }
}

export default (Showbiz)