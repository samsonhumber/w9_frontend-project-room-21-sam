import "./biography.css"
// import {useState} from "react"


function Biography (){
    return (
        <div className ='main-container'>
        <div className= "div-Container">
     <img className="bootcamper-picture"src = 'https://www.singleton-associates.org/wp-content/uploads/2010/08/Free.jpg' alt='bio for bootcampers'/>
        <p className= 'name'>name</p>
        <p className= 'profession'>profession</p>
        <p className= 'bio'>bio</p>
        <a href="https://www.google.com/">link</a>
        </div>
     </div>
    )
}
export default Biography