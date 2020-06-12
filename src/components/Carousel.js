import React from 'react';

class Carousel extends React.Component {
    constructor() {
        super();

        this.state = {
            carousel: [
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3Zgyg?ver=9e41&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=199&s=2120&d=795&aim=true", cardTitle: "Power through every day", cardText: "Give possibility with Surface Pro 6", buttonText: "SHOP NOW >", className: 'carousel-item active'
                },
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZOwj?ver=0a0e&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=200&s=2120&d=795&aim=true", cardTitle: "Ready when you are, wherever you are", cardText: "Give joy with Surface Laptop 2", buttonText: "SHOP NOW >", className: "carousel-item"
                }
            ]
        }
    }

    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {this.state.carousel.map((e) =>

                        <div className={e.className}>
                            <div className="card">
                                <img src={e.imgSrc} className="card-img" alt="..." />
                                <div className="card-img-overlay ml-5">
                                    <br /><br /><br /><br /><br /><br />
                                    <h3 className="card-title font-weight-bold">{e.cardTitle}</h3>
                                    <p className="card-text">{e.cardText}</p>
                                    <p className=''>
                                        <button class="card-text btn btn-dark text-center">{e.buttonText}</button>
                                    </p>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel; 