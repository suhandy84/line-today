import React, {Component} from "react";
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import Axios from 'axios'
import { API_URL } from '../supports/ApiUrl'

class News extends Component {
    state = { 
        categories: []
     }

    // componentDidMount() {
    //     Axios.get('https://today.line.me/id/portaljson')
    //         .then((res) => {
    //             console.log (res.data.result.categories)
    //             this.setState({ categories: res.data.result.categories})
    //             console.log(this.state.categories)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }

    // renderCategories = () => {
    //     return this.state.categories.map((val, index) => {
    //         return (

    //         )
    //     })
    // }

    render() { 
        return (
            <div>
            
                <div>
    
                    <div className="pt-5" style={{ fontSize: 20, fontWeight: 700 }}>
                        ARTIKEL PILIHAN UNTUKMU
                    </div>
                    <div className="container mt-2 ml-2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="isi">
                                    <img src="https://obs.line-scdn.net/0hQRNSTgWMDn1zKhghfF1xKkl8DRJARh1-FxxfYyNEUEpfGBoqTE9AS1AqVEpcEkkjHRlEE1AqFUwLHE8oR0xA/w580"  />
                                </div>
                                <div className="title pr-3">   
                                    Mata Jeli Netter Temukan Jejak Kehadiran G-Dragon di Lokasi Syuting MV 'Lovesick Girls' BLACKPINK
                                </div>
                                <div className="title-source">
                                    KANAL247
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="isi">
                                    <img src="https://obs.line-scdn.net/0hvOqlr3RDKWBMFT8-6N9WN3ZDKg9_eTpjKCN4fhx7d1dgJ2ZmeHszVm9GdFhlJm4-IiRiA2sSMlE0I2pjcXoz" />
                                </div>
                                <div className="title">
                                    Tokyo
          </div>
                                <p>With the world in five boroughs,it's easy to be wide-eyed in the City That Never Sleeps</p>
                            </div>
                            <div className="col-md-6">
                                <div className="isi">
                                    <img src="https://img.theculturetrip.com/450x300/wp-content/uploads/2019/04/paris-header-culture-trip-illustration.jpg" />
                                </div>
                                <div className="title">
                                    Paris
          </div>
                                <p>With the world in five boroughs,it's easy to be wide-eyed in the City That Never Sleeps</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="topic-header">
                        <div className="topic-font">
                            Hot Issue
                        </div>
                    </div>
                    <div className="container mt-3 ml-2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="isi">
                                    <img src="https://obs.line-scdn.net/0hYaBS2MTrBk5_KhAQWU55GUV8BSFMRhVNGxxXUC9EWHlTGEkbEE5LfV5_C3xRSkEQFkxLLFgqHX8HHEUcQE9L/w580"  />
                                </div>
                                <div className="title">
                                    New York City
          </div>
                                <p>With the world in five boroughs,it's easy to be wide-eyed in the City That Never Sleeps</p>
                            </div>
                            <div className="col-md-6">
                                <div className="isi">
                                    <img src="https://obs.line-scdn.net/0hvOqlr3RDKWBMFT8-6N9WN3ZDKg9_eTpjKCN4fhx7d1dgJ2ZmeHszVm9GdFhlJm4-IiRiA2sSMlE0I2pjcXoz" />
                                </div>
                                <div className="title">
                                    Tokyo
          </div>
                                <p>With the world in five boroughs,it's easy to be wide-eyed in the City That Never Sleeps</p>
                            </div>
                            <div className="col-md-6">
                                <div className="isi">
                                    <img src="https://img.theculturetrip.com/450x300/wp-content/uploads/2019/04/paris-header-culture-trip-illustration.jpg" />
                                </div>
                                <div className="title">
                                    Paris
          </div>
                                <p>With the world in five boroughs,it's easy to be wide-eyed in the City That Never Sleeps</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="pt-3 ml-2" style={{ fontSize: 20, fontWeight: 700 }}>
                        K! UPDATE
                    </div>
                    <div className="topic-header-2">
                        <div className="topic-image">
                            <img src="https://obs.line-scdn.net/0h-FRpPdz9cmlvCWQ3pzINPlVfcQZcZWFqCz8jdz9nLF5DOz1tV2hvX0wLL1lFMDU3Bm49Bk4NaVgXPzFrAWtv/w280" />
                        </div>
                        <div>
                            <div className="topic-title">    
                                Inikah Bukti G-Dragon Temani Jennie Syuting MV BLACKPINK 'Lovesick Girls'?     
                            </div>
                            <div className="topic-source">
                                WowKeren Media
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        );
    }
}
 
export default (News);
// const BtnGroupPage = () => {
    
// }

// export default BtnGroupPage;