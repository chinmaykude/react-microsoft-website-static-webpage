import React from 'react';

class XboxGamePass extends React.Component {
    constructor() {
        super();
        this.state = {
            xboxInfo: [
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3Zbj6?ver=2cfe&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=203&s=2120&d=795&aim=true",
                    cardTitle: "Xbox Game Pass Ultimate",
                    cardText: "Fill the holidays with fun. Discover your next favourite game.",
                    buttonText: "SHOP NOW >"
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <br /><br />
                {this.state.xboxInfo.map((e) =>
                    <div className="card">
                        <img src={e.imgSrc} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <h3 className="card-title text-center font-weight-bold">{e.cardTitle}</h3>
                            <p className="card-text text-center">{e.cardText}</p>
                            <p className='text-center'>
                                <button className="card-text btn btn-dark text-center">{e.buttonText}</button>
                            </p>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}


export default XboxGamePass;