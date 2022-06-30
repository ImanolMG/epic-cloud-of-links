import React from "react";
import CardLink from "./CardLink";
import APIInvoker from "../utils/APIInvoker";
import "../assets/stylesheets/card_link.css"
import {Link} from "react-router-dom";
class MyLinks extends React.Component {


    constructor(props) {
        super(props);
this.state =
    {
        idlink : '',
        title : '',
        body_link : '',
        category : '',

        my_links : []

    }

        this.my_links = []
        APIInvoker.invokeGET('/links/getAllLinks' , data => {
                this.setState({
                    my_links : data.data

            })
console.log(this.state.my_links)
            }, error => {

                })

    }

    render() {
        return(
                <div id="container-cards-turismo">

                    {this.state.my_links.map(link => <CardLink idlink={link.idlink} title={link.title} category={link.category} body_link={link.body_link} ></CardLink>)}
                {/*<For each="item" index="index" of={this.state.my_links} >*/}
                {/*    */}
                {/*    <CardLink  key={index} value={this.idlink} idlink={item.idlink}  title={item.title} category={item.category} body_link={item.body_link}  />*/}

                {/*    </For>*/}
                </div>
        )
    }
}

export default MyLinks;