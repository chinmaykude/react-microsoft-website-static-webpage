import React from 'react';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {

            footerItems: [
                {
                    id: 'foot1',
                    header5: "What's new",
                    para: ["Surface Go", "Surface Pro", "Windows 10 apps", "Office apps"],
                },
                {
                    id: 'foot2',
                    header5: "Microsoft Store",
                    para: ["Account profile", "Download Center", "Microsoft Store Support", "Returns", "Order tracking"]
                },
                {
                    id: 'foot3',
                    header5: "Education",
                    para: ["Microsoft in education", "Office for students", "Office 365 for school", "Microsoft Azure in education"]
                },
                {
                    id: 'foot4',
                    header5: "Enterprise",
                    para: ["AppSource", "Government", "Healthcare", "Manufacturing", "Financial service", "Retail"]
                },
                {
                    id: 'foot5',
                    header5: "Developer",
                    para: ["Microsoft Visual Studio", "Developer Network", "TechNet", "Channel 9", "Office Dev Center"]
                },
                {
                    id: 'foot6',
                    header5: "Company",
                    para: ["Careers", "About Microsoft", "Company news", "Privacy at Microsoft", "Investors", "Security"],
                },

            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <br /><br />
                <div className="jumbotron jumbotron-fluid footer_text mb-0">
                    <div className="row ml-3 text-secondary">
                        {
                            this.state.footerItems.map((e) =>
                                <div className="container col-2">
                                    <h5 className="font-weight-bold">{e.header5}</h5>
                                    <span className='small mt-2'>
                                        {e.para.map((e) => <p> {e}</p>)}
                                    </span>
                                </div>
                            )}
                    </div>

                    <br /><br />
                    <div className="row mt-2 mb-0 p-1 text-secondary">
                        <p className="ml-5 mr-5"><span className='small'><img style={{ width: 25 }} src="https://climefish.eu/wp-content/uploads/sites/18/2017/08/icon-globe-400px.png" />English (India)</span></p>

                        <p className="ml-5"><span className='small'>Contact Microsoft</span>
                        </p>
                        <p className="ml-5" ><span className='small'>Privacy & cookies</span></p>
                        <p className="ml-5" ><span className='small'>Terms of use</span></p>
                        <p className="ml-5" ><span className='small'>Trademarks</span></p>
                        <p className="ml-5" ><span className='small'>About our ads</span></p>
                        <p className="ml-5" > <span className='small'>© Microsoft 2019</span></p>
                    </div>


                </div>
            </React.Fragment>
        )
    }
}

export default Footer;