import React, { Component } from 'react';
import { getStudentsData } from './services/studentResultData';
import 'bootstrap/dist/css/bootstrap.min.css';

class Student extends Component {
    state = {
        studentInfo:getStudentsData()
      }
      refresh=()=>{
        const refresh=getStudentsData();
        const allFilterStudents=refresh.filter(std=>std)
        this.setState({studentInfo:allFilterStudents})
       }
    passedStudents=()=>{
        const pass=this.state.studentInfo.filter(std=> std.telugu>=35 && std.hindi>=35 && 
         std.english >=35 && std.maths>=35 && std.science>=35 && std.social>=35 )
        this.setState({studentInfo:pass})
       }
       failedStudents=()=>{
         const allfailed=this.state.studentInfo.filter(std=> std.telugu<=35 || std.hindi<=35 || 
             std.english<=35 || std.maths<=35 || std.science<=35 || std.social<=35 )
         this.setState({studentInfo:allfailed})
       }
      render(){
        return (
            <div>
                <h1>Students Result</h1>
                 <button onClick={()=>this.passedStudents()} className='btn btn-primary m-4'>PassedStudents</button>
                 <button onClick={()=>this.failedStudents()} className='btn btn-danger m-4'>FailedStudents</button>
                 <button onClick={()=>this.refresh()} className='btn btn-warning m-4'>Refresh</button> 
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
            this.state.studentInfo.map(
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
            </div>
            );
      }
    }
export default Student;