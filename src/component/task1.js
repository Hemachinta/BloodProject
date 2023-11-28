import React, { Component } from 'react'
import i1 from './accident1.jpg';
import i2 from './surgery1.jpg';
import i3 from './stomach-ulcer.jpg';
import i4 from './img5.jpg';
import i5 from './anemia.jpg';
import i6 from './hemochromatosis1.jpg';
import i7 from './iron_deficiency.png';
import i8 from './immune.jpg';
import './task1.css'
export class Task1 extends Component {
  render() {
    return (
      <div className='g'>
        <div className='flip'>
            <div className='inner'>
                <div className='front'>
                    <img className='a' src={i1} alt='accident'/>
                </div>
                <div className='back'>
                <p className="p2"><span className='abc'>Accident : </span>This kind of trauma happens when a body part collides with something else, usually at high speed. Blood vessels inside the body are torn or crushed either by shear forces or a blunt object. Examples are car accidents, physical assaults, and falls.</p>
                <button className='btn'>Get Info</button>
                </div>
            </div>
        </div>
        <div className='flip'>
            <div className='inner'>
                <div className='front'>
                    <img className='a' src={i2} alt='accident'/>
                </div>
                <div className='back'>
                <p className="p2"><span className='abc'>Surgery : </span>Although all types of blood loss may cause complications, it is the large and rapid blood losses that occur during surgery and trauma that are most likely to cause severe complications or death.The amount of blood loss that may lead to the diseases.</p>
                <button className='btn'>Get Info</button>
                </div>
            </div>
        </div>
        <div className='flip'>
            <div className='inner'>
                <div className='front'>
                    <img className='a' src={i3} alt='accident'/>
                </div>
                <div className='back'>
                <p className="p2"><span className='abc'>Stomach Ulcer :</span> Left untreated, peptic ulcers can result in: Internal bleeding. Bleeding can occur as slow blood loss that leads to anemia or as severe blood loss that may require hospitalization or a blood transfusion. </p>
                <button className='btn'>Get Info</button>
                </div>
            </div>
        </div>
        <div className='flip'>
            <div className='inner'>
                <div className='front'>
                    <img className='a' src={i4} alt='accident'/>
                </div>
                <div className='back'>
                <p className="p2"><span className='abc'>Blood Pressure : </span>These blood vessels leak into surrounding tissues. Your skin may appear red, purple, blue or black. Bleeding into the skin may cause only discoloration, or the spot may be swollen and tender to the touch.</p>
                <button className='btn'>Get Info</button>
                </div>
            </div>
        </div>
        <div className='flip'>
            <div className='inner'>
                <div className='front'>
                    <img className='a' src={i5} alt='accident'/>
                </div>
                <div className='back'>
                <p className="p2"><span className='abc'>Anemia : </span>Anaemia occurs when the body doesn't have enough iron, leading to the decreased production of red blood cells. Red blood cells carry oxygen around the body. Too little iron in the body causes this most common type of anemia. Bone marrow needs iron to make hemoglobin.</p>
                <button className='btn'>Get Info</button>
                </div>
            </div>
        </div>
        <div className='flip'>
            <div className='inner'>
                <div className='front'>
                    <img className='a' src={i7} alt='accident'/>
                </div>
                <div className='back'>
                <p className="p2"><span className='abc'>Iron Deficiency : </span> Iron deficiency is when the stores of iron in your body are too low. Common causes of iron deficiency include not getting enough iron in your diet, chronic blood loss, pregnancy and vigorous exercise.Some people become iron deficient to absorb iron.</p>
                <button className='btn'>Get Info</button>
                </div>
            </div>
        </div>
        <div className='flip'>
            <div className='inner'>
                <div className='front'>
                    <img className='a' src={i6} alt='accident'/>
                </div>
                <div className='back'>
                <p className="p2"><span className='abc'>Haemochromatosis : </span>Haemochromatosis is caused by a faulty gene that can be passed on to a child by their parents. Most cases are linked to a fault in a gene called HFE, which affects your ability to absorb iron from food. Normally, your body maintains a steady level of iron.</p>
                <button className='btn'>Get Info</button>
                </div>
            </div>
        </div>
        <div className='flip'>
            <div className='inner'>
                <div className='front'>
                    <img className='a' src={i8} alt='accident'/>
                </div>
                <div className='back'>
                <p className="p2"><span className='abc'>Immune thrombocytopenia : </span>It usually happens when the immune system makes a mistake.It attacks and destroys the cells that help blood clot,also known as platelets.In adults, an infection with HIV,hepatitis or the bacteria that causes stomach ulcers,known as H.</p>
                <button className='btn'>Get Info</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Task1
