import React from 'react';
import dataMobile from '../data/mobile.json';

class Mobile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: dataMobile,
            itemToFlip: 0
        };


    }



    render() {
        return (
            <>
                <div className="mobile-container">
                    <div className="row-mobile">



                        {this.state.data.map((item: any) =>
                            <>
                                {item.type === "brand" && (
                                    <>
                                        <div className="col-mobile">
                                            <div className="brand-year-mobile"><h2>{item.year}</h2></div>
                                            <div className="brand-logo-mobile"><img className="logo-mobile" alt={item.name} title={item.name} src={"./img/logos/" + item.name + ".png"} /></div>

                                        </div>
                                    </>
                                )}


                                {item.type === "snake" && (
                                    <>
                                        <div className="col-snake-mobile dashed-bottom" style={{ backgroundImage: "url('./img/snake/snake-mobile.png')" }}>

                                        </div>
                                    </>
                                )}


                                {item.type === "void" && (
                                    <>
                                        <div className="col-mobile  transparent dashed-bottom">

                                        </div>
                                    </>
                                )}


                                {item.type === "more" && (
                                    <>
                                        <div className="col-mobile transparent dashed-bottom">
                                            <div className="more-mobile transparent">
                                                <a href={"/" + item.name} className="more-link-mobile">Saber más</a>
                                            </div>
                                        </div>
                                    </>
                                )}


                                {item.type === "full-image" && (
                                    <>
                                        <div className="col-mobile ">
                                            <div className="full-image-image-mobile">
                                                <img alt={item.image} title={item.image} src={"./img/full-images/" + item.image + ".png"} />
                                            </div>

                                        </div>
                                    </>
                                )}


                                {item.type === "info" && (
                                    <>
                                        <div className="col-mobile dashed-bottom">
                                            <div className="info-year-mobile"><h1 className="mobileh1">{item.year}</h1></div>
                                            <div className="info-title-mobile"><h3>{item.title}</h3></div>
                                        </div>
                                    </>
                                )}

                                {item.type === "info-desc" && (
                                    <>
                                        <div className="col-mobile">
                                            <div className="info-description-mobile dashed-bottom">{item.description}</div>
                                        </div>

                                    </>
                                )}

                                {item.type === "info-void" && (
                                    <>
                                        <div className="col-mobile  transparent">

                                        </div>
                                    </>
                                )}


                            </>


                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default Mobile;