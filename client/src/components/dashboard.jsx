import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Cloth from '../components/Cloth'
import Education from "../components/Education";
import Admin from "../components/Admin";

function Dashboard(){

    const [part,setPart] = React.useState("cloth");

    function dashpart(){
        if(part === "cloth"){
            return <Cloth />
        }
        if(part === "children"){
            return <Education />
        }
        if(part === "admin"){
            return <Admin />
        }
    }


    return <div className="dashboard">
        <div className="dashleft" style={{position:"fixed"}}>
            <button onClick={()=>{
                setPart("cloth")
            }}>
                Donate Clothes
            </button>
            <button onClick={()=>{
                setPart("children")
            }}>
                Chalk Slate n Rise
            </button>
            <button onClick={()=>{
                setPart("admin")
            }}>
                Admin
            </button>
        </div>
        <div className="dashright">
            {dashpart()}
        </div>
    </div>
}

export default Dashboard;