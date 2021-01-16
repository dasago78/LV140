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
                                        <div className="col-snake-mobile" style={{ backgroundImage: "url('./img/snake/snake-mobile.png')" }}>

                                        </div>
                                    </>
                                )}


                                {item.type === "void" && (
                                    <>
                                        <div className="col-mobile">

                                        </div>
                                    </>
                                )}


                                {item.type === "more" && (
                                    <>
                                        <div className="col-mobile transparent">
                                            <div className="more-mobile transparent">
                                                <a href="" className="more-link-mobile">Saber más</a>
                                            </div>
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