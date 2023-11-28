import React, { Component } from 'react';
import'bootstrap/js/dist/base-component';
import _ from 'lodash';
class PageNationComponent extends Component {
    state = {  } 
    render() {
        const num=this.props.len/this.props.pag
        const ad= _.range(1,num+1)
                return (
            <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {ad.map( 
                            each=><li onClick={()=>this.props.pageChange(each)} class="page-item"><a class="page-link" href="#">{each}</a></li>
                        )}
                    </ul>
            </nav>
        );
    }
}
 
export default PageNationComponent;