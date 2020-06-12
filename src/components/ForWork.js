import React from 'react';

class ForWork extends React.Component {
    constructor() {
        super();
        this.state = {
            forWorkInfo: [
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1CmIw?ver=e555&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true", cardTitle: "Windows 10 Enterprise", cardText: "Download the free 90-day evaluation for IT professionals.", buttonText: "DOWNLOAD NOW >"
                },
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2mheW?ver=527a&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&x=444&y=171&aim=true", cardTitle: "Office 365 for Business", cardText: "Access your files from anywhere, online or offline.", buttonText: "SHOP NOW >"
                },
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4561D?ver=b6fc&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true", cardTitle: "Try AI in Azure", cardText: "Build intelligent apps using Azure Cognitive Services – including 12 services now free for 12 months – with your Azure free account.", buttonText: "START FREE >"
                },
                {
                    imgSrc: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OfW4?ver=3149&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true", cardTitle: "Get Visual Studio 2019", cardText: "Download Visual Studio 2019, the productive, modern and innovative IDE.", buttonText: "DOWNLOAD NOW >"
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <br /><br />
                <h4 className="font-weight-bold mb-3">For Work</h4>
                <div className="card-deck text-center">
                    {this.state.forWorkInfo.map((e) =>
                        <div class=" card" style={{ width: '18rem' }}>
                            <img src={e.imgSrc} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">{e.cardTitle}</h5>
                                <p class="card-text">{e.cardText}.</p>
                                <a href="#" class="btn font-weight-bold text-primary">{e.buttonText}</a>
                            </div>
                        </div>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default ForWork;