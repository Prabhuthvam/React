import React, { Component } from 'react';
import 'bootstrap/js/dist/base-component';
import _ from 'lodash';
import PageNationComponent from './pageNationComponent';
import { getStudentsData } from './services/studentResultData';
class Pagination extends Component {
    state = { 
        perPage : 3,
        currentPage:1,
        studentInfo:getStudentsData()
     }
     pageClicked=pag=>{
        console.log("page Clicked..."+pag)
        this.setState({currentPage:pag})
    }
    pageFilterRecords() {
    const startIndex = ( this.state.currentPage - 1) * this.state.perPage;
    return _(this.state.studentInfo)
      .slice(startIndex)
      .take(this.state.perPage)
      .value();
    }
     render() 
     { 
        return (
            <div>
                <h1>Students Result</h1>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">RollNo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Telugu</th>
                        <th scope="col">Hindi</th>
                        <th scope="col">English</th>
                        <th scope="col">Maths</th>
                        <th scope="col">Science</th>
                        <th scope="col">Social</th>
                        <th scope="col">Result</th>
                    </tr>
                </thead>
            <tbody>
            {
            this.pageFilterRecords().map(
                student=><tr>
                    <td>{student.rollno}</td>
                    <td>{student.name}</td>
                    <td>{student.telugu}</td>
                    <td>{student.hindi}</td>
                    <td>{student.english}</td>
                    <td>{student.maths}</td>
                    <td>{student.science}</td>
                    <td>{student.social}</td>
                    <td>{(student.telugu >= 35 && student.hindi >= 35 && student.english >= 35 && 
                        student.maths >= 35 && student.science >= 35 && student.social >= 35) ? 'Pass' : 'Fail'}</td>
                    </tr>
                )
                }
            </tbody>
            </table>
            <PageNationComponent len={this.state.studentInfo.length} pag={this.state.perPage} pageChange={this.pageClicked} Hanled={this.pageHanlde}></PageNationComponent>
            </div>
        );
    }
}
 
export default Pagination;