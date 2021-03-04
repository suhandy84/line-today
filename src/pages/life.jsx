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