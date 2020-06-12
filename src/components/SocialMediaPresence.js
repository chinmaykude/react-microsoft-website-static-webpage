import React from 'react'

class SocialMediaPresence extends React.Component {
    constructor() {
        super();

        this.state = {
            followInfo: [
                {
                    imgSrc: [
                        'https://www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/85288795/coreui.statics/images/social/facebook.png',
                        '//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/93690392/coreui.statics/images/social/twitter.png',
                        '//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/c79952ca/coreui.statics/images/social/youtube.png']
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <br /><br />
                <div className="d-flex justify-content-start">
                    <div className="p-2 col-example text-left">
                        <span className='text-muted'>Follow Microsoft</span>
                    </div>
                    {this.state.followInfo.map((e) => e.imgSrc.map((e) =>
                        <div className="p-2 col-example text-left">
                            <img src={e} />
                        </div>
                    )
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default SocialMediaPresence;