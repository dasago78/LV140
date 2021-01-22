import React from 'react';
import ReactCardFlip from "react-card-flip"; //https://www.npmjs.com/package/react-card-flip
import dataDesktop from '../data/desktop.json';
import dataTablet from '../data/tablet.json';
import TextHeader from './TextHeader';


class DesktopTablet extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: [],
            device: window.innerWidth >= 990 ? 'desktop' : 'tablet',
            touchscreen: ("ontouchstart" in document.documentElement) ? true : false,
            itemToFlip: 0
        };
    }


    componentDidMount() {
        var data = null;

        this.state.device === 'desktop' ? data = dataDesktop : data = dataTablet

        this.setState({
            data: data
        });


    }
    flip(order: number) {
        if (this.state.device === 'desktop') {
            this.setState({
                itemToFlip: order
            });
        }
        else {

            if (this.state.itemToFlip === order) {
                order = 0;
            }
            this.setState({
                itemToFlip: order
            });
        }
    }

    unflip() {

        this.setState({
            itemToFlip: 0
        });
    }

    nothing() {

    }


    render() {



        return (
            <>
                <div className={this.state.device === 'desktop' ? "desktop-container" : "tablet-container"}>


                   <TextHeader></TextHeader>

    


                    <div className="row mt-5">

                        {this.state.data.map((item: any) =>
                            <div className="col-desktop-tablet" key={item.order}>
                                <div className="item-container-desktop-tablet" style={{ backgroundImage: "url('./img/snake/" + item.snake + ".png')" }}>

                                    {item.type === "brand" && (
                                        <>
                                            <ReactCardFlip isFlipped={this.state.itemToFlip === item.order ? true : false} flipDirection="horizontal">
                                                <div onMouseEnter={(event: React.MouseEvent<HTMLElement>) => { !this.state.touchscreen ? this.flip(item.order) : this.nothing() }} onClick={(event: React.MouseEvent<HTMLElement>) => { this.state.touchscreen ? this.flip(item.order) : this.nothing() }} className="brand-front" >
                                                    <div className="brand-year-desktop-tablet"><h2>{item.year}</h2></div>
                                                    <div className="brand-logo-desktop-tablet"><img alt={item.name} title={item.name} src={"./img/logos/" + item.name + ".png"} /></div>
                                                </div>

                                                <div onClick={(event: React.MouseEvent<HTMLElement>) => { this.unflip() }} className="brand-back">
                                                    <div>
                                                        <div className="brand-logo-desktop-tablet">
                                                            <img alt={item.name} title={item.name} className="logo-back" src={"./img/logos/" + item.name + "2.png"} />

                                                        </div>
                                                        <div className="brand-description-desktop-tablet">
                                                            {item.description} </div>
                                                        <div>
                                                            <p className="text-right"><a href={"/" + item.name} className="link-mini">SABER MÁS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></a>
                                                            </p>
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