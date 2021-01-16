import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Detail from './Detail';




import Home from './Home';



class In extends React.Component<any, any> {
    constructor(props: any) {
        super(props);


      

    }


    render() {
        return (
            <>
                <Router>
                <div className="header">
                    <div className="logo-lv"><img alt="LV140" title="LV140" src="./img/logo.png" /></div>
                </div>

               
                        <Route exact path="/" component={Home} />
                        
                     
                        <Route exact path="/:id" render={(props) => (
                                <Detail {...props} />
                          
                        )} />
                        



                </Router>
            </>
        );
    }
}

export default In;