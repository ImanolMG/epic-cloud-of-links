import React from "react";
import Header from "../components/Header";
import MyLinks from "../components/MyLinks";
import "../assets/stylesheets/Home.css"
class Home extends React.Component{


    render() {
        return(

            <>
                <div id="home">

                    <Header/>
                    <div>
                        <MyLinks/> </div>
                </div>



            </>


        )
    }
}
export default Home;