import React from 'react';



import DesktopTablet from './DesktopTablet';
import Mobile from './Mobile';


class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);


        this.state = { windowWidth: window.innerWidth };

    }


    render() {
        return (
            <>
              

                <div className="content">
                    {this.state.windowWidth >= 67 && <DesktopTablet />}

           
                    {this.state.windowWidth < 67 && <Mobile />}
                </div>


            </>
        );
    }
}

export default Home;