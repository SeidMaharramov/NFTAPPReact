import React from 'react'
import './Section.scss'
import sekil4 from '../../assets/images/sekil4.jpg';
import sekil1 from '../../assets/images/sekil1.jpg';
import sekil2 from '../../assets/images/sekil2.jpg';
import sekil3 from '../../assets/images/sekil3.jpg';
import { FaImages,FaDatabase,FaUserGroup  } from "react-icons/fa6";
const Section = () => {
  return (
    <div className='section'>
      <div className="container">
        <section>
            <div className="sectiontop">
            <p>Vision & Misson</p>
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam illum at hic eveniet eaque fuga ab assumenda, voluptatum quos blanditiis architecto aliquid aut tempore.</p>    
            </div>
            <div className="sectionbottom">
            <p>Vision & Misson</p>
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam illum at hic eveniet eaque fuga ab assumenda, voluptatum quos blanditiis architecto aliquid aut tempore.</p>    
            </div>
        </section>
        <aside>
            <img src={sekil3} alt="" className='orta' />
            <img src={sekil4} alt="" className='yuxsag'/>
            <img src={sekil2} alt="" className='asagsol'/>
            <img src={sekil1} alt="" className='asagsag'/>

        </aside>
      </div>
      <footer>
          <div className='icon'>
            <i><FaUserGroup/></i>
            <h1>100k</h1>
            <p>Registered User</p>
            </div>
            <hr />
          <div className='icon'>
            <i><FaImages/></i>
            <h1>5M</h1>
            <p>Total Assets</p>
            </div>
            <hr />
          <div className='icon'>
            <i><FaDatabase/></i>
            <h1>10B</h1>
            <p>Yearly Trading</p>
            </div>
            <hr />
            <div className="img">

            </div>
        </footer>
    </div>
  )
}

export default Section
