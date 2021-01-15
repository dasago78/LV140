import React from 'react';
import DesktopTablet from './DesktopTablet';
import Mobile from './Mobile';


class In extends React.Component<any, any> {
    constructor(props: any) {
        super(props);


        this.state = { windowWidth: window.innerWidth };

    }


    render() {
        return (
            <>

                <div className="header">
                    <div className="logo-lv"><img src="./img/logo.png" /></div>
                </div>

                <div className="content">
                    {this.state.windowWidth >= 670 && <DesktopTablet />}

           
                    {this.state.windowWidth < 670 && <Mobile />}
                </div>
            </>
        );
    }
}

export default In;