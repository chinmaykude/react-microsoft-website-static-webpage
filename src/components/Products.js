import React from 'react';

class Products extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZgxB?ver=0b92&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true", cardTitle: "Surface Book 2", cardText: "Give inspiration with a fast, powerful device.", buttonText: "SHOP NOW >"
                },
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZBhz?ver=ec40&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true", cardTitle: "Give joy with Surface Go", cardText: "Small, strong and ready for every adventure.", buttonText: "SHOP NOW >"
                },
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZbiY?ver=f317&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true", cardTitle: "Inspire magic this holiday", cardText: "Imagine what they’ll create with Office 365 for PC and Mac.", buttonText: ["FOR UPTO 6 PEOPLE >"]
                },
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZqUZ?ver=79cc&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true", cardTitle: "Xbox One X", cardText: "Give thrills that’ll last all year with the world’s most powerful console.", buttonText: "SHOP NOW >"
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <br /> <br />
                <div className="card-deck">
                    {this.state.products.map((e) =>

                        <div className=" card" style={{ width: '18rem' }}>
                            <img src={e.imgSrc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">{e.cardTitle}</h5>
                                <p className="card-text">{e.cardText}</p>
                                <a href="#" className="btn font-weight-bold text-primary">{e.buttonText}</a>
                            </div>
                        </div>

                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default Products;