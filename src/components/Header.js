import React from 'react';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            list: [
                {
                    item: ["Office", "Window", "Surface", "Xbox", "Support"],
                    dropdown: ["Windows App", "One Drive", "Outlook"],
                    icons: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjVFEll32HTNJrMtHYXGt_6IB-bc4qAmrj8GANN96tvKraEK4&s",
                        "https://cdn3.iconfinder.com/data/icons/small/512/buy_cart_ecommerce_shopping_online_store-512.png",
                        "https://png.pngtree.com/svg/20170406/login_registration_small_user_300918.png"
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <nav className=" navbar navbar-expand-lg navbar-light">
                    {/* MS Logo */}
                    <a className="navbar-brand" href="#">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" width="130" height="30" alt="" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.state.list.map((e) =>
                                <React.Fragment>
                                    {e.item.map((e) => <a className="nav-link text-dark" href="#"><small>{e}</small></a>)}
                                </React.Fragment>
                            )}
                        </ul>
                    </div>

                    <form className="form-inline">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <small>All Microsoft</small>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {this.state.list.map((e) =>
                                        <React.Fragment>
                                            {e.dropdown.map((e) => <a className="dropdown-item" href="#">{e}</a>)}
                                        </React.Fragment>
                                    )}
                                </div>
                            </li>
                        </ul>


                        <a href="#">
                            <span className="glyphicon glyphicon-search ml-5 "><img style={{ width: 25 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjVFEll32HTNJrMtHYXGt_6IB-bc4qAmrj8GANN96tvKraEK4&s"></img></span>
                        </a>
                        <a href="#">
                            <span className="glyphicon glyphicon-search ml-3"><img style={{ width: 25 }} src="https://cdn3.iconfinder.com/data/icons/small/512/buy_cart_ecommerce_shopping_online_store-512.png"></img></span>
                        </a>

                        <a href="#">
                            <span className="glyphicon glyphicon-search ml-3"><img style={{ width: 25 }} src="https://png.pngtree.com/svg/20170406/login_registration_small_user_300918.png"></img></span>
                        </a>

                    </form>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header;