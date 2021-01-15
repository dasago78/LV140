import React from 'react';

import dataDesktop from '../data/desktop.json';
import dataTablet from '../data/tablet.json';


class DesktopTablet extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: []
        };

    }


    componentDidMount() {
        var data = null;

        window.innerWidth >= 990 ? data = dataDesktop : data = dataTablet


        this.setState({
            data: data,
            windowWidth: window.innerWidth
        });
    }

    render() {



        return (
            <>

                <div className={this.state.windowWidth >= 990 ? "desktop-container" : "tablet-container"}>
                    <div className="row">

                        {this.state.data.map((item: any) =>
                            <div className="col-desktop-tablet">
                                <div className="item-container-desktop-tablet" style={{ backgroundImage: "url('./img/snake/" + item.snake + ".png')" }}>

                                {item.type === "brand" && (
                                    <>


                                        <div className="brand-year-desktop-tablet"><h2>{item.year}</h2></div>
                                        <div className="brand-logo-desktop-tablet"><img className="logo" src={"./img/logos/" + item.name + ".png"} /></div>

                                    </>
                                )}

                                {item.type === "full-image" && (
                                    <>
                                        <div className="full-image-desktop-tablet"><img src={"./img/full-images/" + item.image + ".png"} /></div>

                                    </>
                                )}

                                {item.type === "info" && (
                                    <>
                                        <div className="info-title-desktop-tablet"><h3>{item.title}</h3></div>
                                        <div className="info-description-desktop-tablet">{item.description}</div>
                                        <div className="info-year-desktop-tablet"><h1>{item.year}</h1></div>

                                    </>
                                )}

                                {item.type === "void" && (
                                    <>

                                    </>
                                )}

                            </div>
                            </div>
                        )}
                    </div>
            </div>


            </>
        );
    }
}

export default DesktopTablet;