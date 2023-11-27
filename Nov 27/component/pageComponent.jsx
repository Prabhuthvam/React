import React, { Component } from 'react';
class PageComponent extends Component {
    state = { 
        counter:this.props.pageValue,
        course:this.props.name
     } 
    render() { 
        return (
            <div>
                <span className='bg bg-warning m-4'>{this.state.course}</span>
                <span className='bg bg-warning m-4'>{this.state.course}</span>
                <span className='bg bg-warning m-4'>{this.props.children}</span>

                <button className='btn btn-danger'>+</button>


            </div>
        );
    }
}
 
export default PageComponent;