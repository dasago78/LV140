import React from 'react';

class Detail extends React.Component<any, any> {
    constructor(props: any) {
        super(props);


        this.state = {
            id: this.props.match.params.id,
          }

    }


    render() {
        return (
            <>
             

              <div className="content">
              Detail  {this.state.id}
                </div>

          
            </>
        );
    }
}

export default Detail;