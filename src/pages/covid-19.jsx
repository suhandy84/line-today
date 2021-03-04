import React, { Component } from "react";
import Axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Covid19 extends Component {
    state = {
        title: [],
        artikel_0: [],
        artikel_1: [],
        artikel_2: [],
        artikel_3: [],
        artikel_4: [],
        artikel_5: []
    }

    componentDidMount() {
        Axios.get('https://today.line.me/id/portaljson')
            .then((res) => {
                this.setState({ title: res.data.result.categories[16].templates })
                var data = res.data.result.categories[16]
                this.setState({
                    artikel_0: data.templates[1].sections[0].articles,
                    artikel_1: data.templates[2].sections[0].articles,
                    artikel_2: data.templates[4].sections[0].articles,
                    artikel_3: data.templates[5].sections[0].articles,
                    artikel_4: data.templates[7].sections[0].articles,
                    artikel_5: data.templates[8].sections[0].articles
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


    render() {
        const { title, artikel_0, artikel_1, artikel_2, artikel_3, artikel_4, artikel_5 } = this.state
        return (
            <div>
                <div className="pt-3 covid">
                    <img src="https://obs.line-scdn.net/0hkJo1jg58NGVSSB0jeQNLMmgeNwphJCdmNn5lewImalEoe3MwaS4pVHBBaVJ3f3M7Oip_A39BL1QtfCY2Oy8p/w1200" />
                </div>
                <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                    COVID-19
                </div>
                <div className="">
                    COVID-19 adalah penyakit yang disebabkan oleh virus severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). COVID-19 dapat menyebabkan gangguan sistem pernapasan, mulai dari gejala yang ringan seperti flu, hingga infeksi paru-paru, seperti pneumonia.
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
                        {this.rendertitle(2, 3)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_1)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(4, 5)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_2)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(5, 6)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_3)}
                        </div>
                    </div>

                    <div className="pt-3" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(7, 8)}
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            {this.renderartikel(artikel_4)}
                        </div>
                    </div>

                    <div className="pt-3 ml-2" style={{ fontSize: 20, fontWeight: 700 }}>
                        {this.rendertitle(8, 9)}
                    </div>
                    {this.renderhighlight(artikel_5)}
                </div>
            </div>
        );
    }
}

export default (Covid19)