import React from 'react';
import ReactCardFlip from "react-card-flip"; //https://www.npmjs.com/package/react-card-flip
import dataDesktop from '../data/desktop.json';
import dataTablet from '../data/tablet.json';


class DesktopTablet extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: [],
            itemToFlip: 0
        };
    }


    componentDidMount() {
        var data = null;

        window.innerWidth >= 990 ? data = dataDesktop : data = dataTablet


        this.setState({
            data: data, windowWidth: window.innerWidth
        });


    }
    flip(order: number) {

        this.setState({
            itemToFlip: order
        });
    }
    flipClick(order: number) {
        if (this.state.itemToFlip === order) {
            order = 0;
        }
        this.setState({
            itemToFlip: order
        });
    }
    unflip() {

        this.setState({
            itemToFlip: 0
        });
    }



    render() {



        return (
            <>

                <div className={this.state.windowWidth >= 990 ? "tablet-container" : "tablet-container"}>
                    <div className="row">

                        {this.state.data.map((item: any) =>
                            <div className="col-desktop-tablet" key={item.order}>
                                <div className="item-container-desktop-tablet" style={{ backgroundImage: "url('./img/snake/" + item.snake + ".png')" }}>

                                    {item.type === "brand" && (
                                        <>
                                            <ReactCardFlip isFlipped={this.state.itemToFlip === item.order ? true : false} flipDirection="horizontal">
                                                <div onMouseEnter={(event: React.MouseEvent<HTMLElement>) => { this.flip(item.order) }} onClick={(event: React.MouseEvent<HTMLElement>) => { this.flipClick(item.order) }} className="brand-front" >
                                                    <div className="brand-year-desktop-tablet"><h2>{item.year}</h2></div>
                                                    <div className="brand-logo-desktop-tablet"><img alt={item.name} title={item.name} src={"./img/logos/" + item.name + ".png"} /></div>
                                                </div>

                                                <div onClick={(event: React.MouseEvent<HTMLElement>) => { this.unflip() }} className="brand-back">
                                                    <div>
                                                        <div className="brand-logo-desktop-tablet">
                                                            <img alt={item.name} title={item.name} src={"./img/logos/" + item.name + ".png"} />

                                                        </div>
                                                        <div>
                                                            {item.description} <a href={"/" + item.name}>Saber más</a>
                                                        </div>

                                                    </div>

                                                </div>
                                            </ReactCardFlip>
                                        </>
                                    )}

                                    {item.type === "full-image" && (
                                        <>
                                            <div className="full-image-desktop-tablet" onMouseEnter={(event: React.MouseEvent<HTMLElement>) => { this.unflip() }}>
                                                <img alt={item.image} title={item.image} src={"./img/full-images/" + item.image + ".png"} />
                                            </div>

                                        </>
                                    )}

                                    {item.type === "info" && (
                                        <>
                                            <div onMouseEnter={(event: React.MouseEvent<HTMLElement>) => { this.unflip() }}>
                                                <div className="info-title-desktop-tablet"><h3>{item.title}</h3></div>
                                                <div className="info-description-desktop-tablet">{item.description}</div>
                                                <div className="info-year-desktop-tablet"><h1>{item.year}</h1></div>
                                            </div>
                                        </>
                                    )}

                                    {item.type === "void" && (
                                        <>
                                            <div className="full" onMouseEnter={(event: React.MouseEvent<HTMLElement>) => { this.unflip() }}>
                                              
                                            </div>
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