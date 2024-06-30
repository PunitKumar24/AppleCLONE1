import React, { useState } from 'react';
import NavBar from './sub-components/NavBar';
import LabelBar from './sub-components/LabelBar';
import AdsAndProduct1 from './sub-components/AdsAndProduct1';
import AdsAndProduct2 from './sub-components/AdsAndProduct2';
import AdsAndProduct3 from './sub-components/AdsAndProduct3';
import AdsAndProduct4 from './sub-components/AdsAndProduct4';
import ipadAir from '../components/images/promo_logo_ipadair__frwnnsqveeye_large.png'
import tradein from '../components/images/logo_tradein__d1fpktgipvki_medium_2x.png';
import './style/WholeThing.css';
import bg1 from '../components/images/promo_ipadair__cu1bnxi7uuwm_large.jpg';
import bg2 from '../components/images/promo_mbp__ek7p477bkp6q_large.jpg';
import bg3 from '../components/images/promo_ipadpro__ch217v9v7no2_large.jpg';
import bg4 from '../components/images/promo_iphone15pro__e48p7n5x3nsm_large.jpg';
import bg5 from '../components/images/promo_iphone15_announce__fmxxi8r9fkuy_large.jpg';
import bg6 from '../components/images/promo_iphone_tradein__bugw15ka691e_large.jpg';
import Carousel from './sub-components/Carousel';
import cbg1 from '../components/images/1960x1102.jpg';
import cbg2 from '../components/images/dse.jpg';
import cbg3 from '../components/images/dw.jpg';
import cbg4 from '../components/images/edw.jpg';
import cbg5 from '../components/images/defr.jpg';
import cbg6 from '../components/images/defrtgy.jpg';
import cbg7 from '../components/images/derft.jpg';
import Footer from './sub-components/Footer';


function WholeThing() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      imgOne: ipadAir,
      title: '',
      subTitle: 'Two sizes. Faster chip. Does it all.',
      imgTwo: '',
      imgThree: bg1
    },
    {
      id: 2,
      imgOne: '',
      title: 'MacBook Pro',
      subTitle: 'Mind-blowing. Head-turning.',
      imgTwo: '',
      imgThree: bg2
    },
    {
      id: 3,
      imgOne: '',
      title: 'iPad Pro',
      subTitle: 'Unbelievably thin. Incredibly powerful.',
      imgTwo: '',
      imgThree: bg3
    }
  ]);

  const [blogs1, setBlogs1] = useState([
    {
      id: 1,
      imgOne: '',
      title: 'iPhone 15 Pro',
      subTitle: 'Titanium. So strong. So light. So Pro.',
      imgTwo: '',
      imgThree: bg4
    },
    {
      id: 2,
      imgOne: '',
      title: 'iPhone 15',
      subTitle: 'New camera. New design. Newphoria.',
      imgTwo: '',
      imgThree: bg5
    },
    {
      id: 3,
      imgOne: tradein,
      title: '',
      subTitle: 'Upgrade and save. It\'s that easy.',
      imgTwo: '',
      imgThree: bg6,
      changeBtn:true
    }
  ]);
  const images = [
    cbg1,
    cbg2,
    cbg3,
    cbg4,
    cbg5,
    cbg6,
    cbg7
  ];

  return (
    <>
      <NavBar />
      <div className='rest'>
        <LabelBar />
        <AdsAndProduct1 />
        <div className="whiteLine"></div>
        <AdsAndProduct2 />
        <div className="whiteLine"></div>
        <AdsAndProduct3 />
        <div className="whiteLine"></div>
        <div className="twoSide">
          <div className="twoside1">
          {blogs.map((blog) => (
            <AdsAndProduct4 key={blog.id} blog={blog} />
          ))}
          </div>
          <div className="twoside2">
          {blogs1.map((blog1) => (
            <AdsAndProduct4 key={blog1.id} blog={blog1} />
          ))}
          </div>
        </div>
        <div className="whiteLine"></div>
        <Carousel images={images} />
        <div className="whiteLine"></div>
        <Footer/>
      </div>
    </>
  );
}

export default WholeThing;
