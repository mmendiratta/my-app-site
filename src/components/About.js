import React, { Component } from 'react';

class About extends Component {
  render() {

    // if(this.props.data){
    //   var name = this.props.data.name;
    //   var occupation= this.props.data.occupation;
    //   var description= this.props.data.description;
    //   var city= this.props.data.address.city;
    //   var networks= this.props.data.social.map(function(network){
    //     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    //   })
    // }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="Mendiratta Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Bio</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Manav Mendiratta</span><br />
						   <span>street<br />
						         city state, zip
                   </span><br />
						   <span>phone</span><br />
                     <span>email</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a  className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;