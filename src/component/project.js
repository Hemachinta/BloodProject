import React, { Component } from 'react'
import logo from './blood.jpg';
import blood from './blood1.jpg';
import donate from './blood2.jpg';
import './Project.css'
export class Hello extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
                    {/* <img class="image"src={logo}/> */}
                    <div className="text2">Share your power</div>
                    <div className="text">Let's save lives together</div>
                    <div className="text1">Register to give blood or plasma</div>
                </div>
            <div className="img1-container">
               <div className="grid item1">
                <p class="para">Blood donation is a vital part of worldwide healthcare. 
                   It allows for blood transfusion as a life-sustaining and life-saving procedure. 
                   Over one hundred million units of blood are donated each year throughout the world. 
                   This activity reviews donor eligibility and selection, adverse effects of donation, 
                   and pathogen reduction and inactivation for donated blood.
                   You must be in good health at the time you donate. 
                   You cannot donate if you have a cold, flu, sore throat, 
                   cold sore, stomach bug or any other infection. 
                   If you have recently had a tattoo or body piercing you cannot donate for 6 months from the date of the procedure.</p>
               </div>
               <div className="grid item2">
                <img className="img1" src={blood}></img></div>
               <div className="grid item3">
                <img className="img2" src={donate}></img>
               </div>
               <div className="grid item4">
                <ul>
                    <li><mark>Rules to Donate Blood</mark></li>
                   <li>Age between 18 and 60 years.</li>
                   <li>Haemoglobin - not less than 12.5 g/Dl</li>
                   <li>Pulse - between 50 and 100/minute with no irregularities</li>
                   <li>Blood Pressure -Systolic 100-180 mm Hg and Diastolic 50 - 100 mm Hg</li>
                   <li>Temperature - Normal (oral temperature not exceeding 37.50C)</li>
                   <li>Body weight - Not less than 45kg</li>
                   <li>Health conditions - Donor should be in a healthy state of mind and body</li>
                   <li>Ever had TB, bronchial asthma or allergic disorder, liver disease, kidney disease, fits or fainting, blue or purple spots on the skin or mucous membranes, received human pituitary - growth hormones etc .</li>
                   </ul>
               </div>
            </div>
           
      </div>
    )
  }
}

export default Hello