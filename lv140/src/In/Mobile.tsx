import React from 'react';
import dataMobile from '../data/mobile.json';
import TextHeader from './TextHeader';

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

                    <TextHeader></TextHeader>


                    <div className="row-mobile mt-5">



                        {this.state.data.map((item: any) =>
                            <>
                                {item.type === "brand" && (
                                    <>
                                        <div className="col-mobile">
                                            {item.position === "L" && (
                                                <>
                                                    <div className="brand-plus-left-mobile"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" /></svg></div>
                                                    <div className="brand-year-left-mobile"><h2>{item.year}</h2></div>

                                                </>
                                            )}
                                            {item.position === "R" && (
                                                <>
                                                     <div className="brand-year-right-mobile"><h2>{item.year}</h2></div>
                                                     <div className="brand-plus-right-mobile"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" /></svg></div>
                                               
                                                </>
                                            )}
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