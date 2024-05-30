import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import styles from './HospitalPage.module.css';
import tooth from '../images/tooth.png';
import brain from '../images/brain.png';
import lung from '../images/lungs.jpg';
import file from '../images/File.png';
import arrow from '../images/arrow.png';
import docWomen from '../images/womanDoctor.png';
import docMen from '../images/menDoctor.png';
import ambu from '../images/ambu.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import facebook from'../images/facebook.png';
import google from'../images/google.png';
import twitter from'../images/twitter.png';

export default function HospitalPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://admin.tomedes.com/api/v1/get-reviews')
      .then(response => {
        setReviews(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.Container}>
      <nav id='navbar'>
        <div className={styles.heading}>
          <span className={styles.spanHeading1}>Medi</span>
          <span className={styles.spanHeading2}>Care+</span>
        </div>
        <div className={styles.navlinksDiv}>
          <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#news">News</a></li>
          </ul>
          <button className={styles.contactBtn}>Contact</button>
        </div>
      </nav>

      <section id='home'>
        <div className={styles.HomeContainer}>
          <div className={styles.leftHome}>
            <h3 className={styles.WelcomeHeading}>Welcome to MediCare+</h3>
            <h1 className={styles.HeadingHome}>Best Specialists</h1>
            <p className={styles.ParaHome}>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
            <div className={styles.HomeBtn}>
              <button className={styles.AppointBtn}>Make an Appointment</button>
              <button className={styles.DepartmentBtn}>Departments</button>
            </div>
          </div>
          <div className={styles.rightHome}></div>
        </div>
      </section>

      <section id='services'>
        <div className={styles.ServiceConatiner}>
          <h1 className={styles.ServiceHeader}>Our Services</h1>
          <p className={styles.ServicePara}>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
          <div className={styles.ServiceDiv}>
            <div className={styles.toothDiv}>
              <img className={styles.toothImg} src={tooth} alt="toothImg" />
              <p className={styles.servicePara}>Dental Care</p>
              <div className={styles.hoverDiv}>
                <p>LEARN MORE</p>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className={styles.lungDiv}>
              <img className={styles.lungImg} src={lung} alt="lungImg" />
              <p className={styles.lungservicePara}>Pulmonary</p>
              <div className={styles.hoverDiv}>
                <p>LEARN MORE</p>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className={styles.brainDiv}>
              <img className={styles.brainImg} src={brain} alt="brainImg" />
              <p className={styles.servicePara}>Neurological</p>
              <div className={styles.hoverDiv}>
                <p>LEARN MORE</p>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className={styles.fileDiv}>
              <img className={styles.fileImg} src={file} alt="fileImg" />
              <p className={styles.servicePara}>Prediatrics</p>
              <div className={styles.hoverDiv}>
                <p>LEARN MORE</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='about'>
        <div className={styles.aboutDiv}>
          <div className={styles.leftDiv}>
            <h1 className={styles.leftDivHeader}>Clinic With Innovative</h1>
            <p className={styles.leftDivPara}>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
            <button className={styles.leftDivButton}>Learn More</button>
          </div>
          <div className={styles.rightDiv}>
            <div className={styles.womanDiv}>
              <img className={styles.docWomenImg} src={docWomen} alt="" />
              <p className={styles.aboutImgPara}>Qualified Doctors</p>
            </div>
            <div className={styles.menDiv}>
              <img className={styles.docMenImg} src={docMen} alt="" />
              <p className={styles.aboutImgPara}>Emergency Care</p>
            </div>
            <div className={styles.ambuDiv}>
              <img className={styles.ambuImg} src={ambu} alt="" />
              <p className={styles.aboutImgPara}>24 Hours Service</p>
            </div>
          </div>
        </div>
      </section>

      <section id='about'>
        <div className={styles.about2Container}>
          <h1 className={styles.about2Header}>We Have The Best Specialist</h1>
          <p className={styles.about2Para}>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</p>
          <div className={styles.DoctorDiv}>
            <div className={styles.DocDetailsDiv}>
              <p className={styles.DocImg}></p>
              <p className={styles.DocName}>Dr. Awaatif Al</p>
              <span className={styles.DocType}>Dental Care</span>
            </div>
            <div className={styles.DocDetailsDiv}>
              <p className={styles.DocImg}></p>
              <p className={styles.DocName}>Dr. Filipa Gaspar</p>
              <span className={styles.DocType}>Cardiology</span>
            </div>
            <div className={styles.DocDetailsDiv}>
              <p className={styles.DocImg}></p>
              <p className={styles.DocName}>Dr. Sukhmeet Gorae</p>
              <span className={styles.DocType}>Neurological</span>
            </div>
            <div className={styles.DocDetailsDiv}>
              <p className={styles.DocImg}></p>
              <p className={styles.DocName}>Dr. Siri Jakobsson</p>
              <span className={styles.DocType}>Prediatrics</span>
            </div>
          </div>
        </div>
      </section>

      <section id='news'>
  <div className={styles.newsConatiner}>
    <h1 className={styles.newsHeader}>What Our Customers Say</h1>
    <Slider {...settings} className={styles.customerReview}>
      {reviews.map(review => (
        <div key={review.ID} className={styles.reviewWrapper}>
          <div className={styles.quoteCircle}>“</div>
          <div className={styles.reviewCard}>
            <p className={styles.reviewText}>{review.Reviews}</p>
            <p className={styles.reviewName}>{review.Name}</p>
            <p className={styles.reviewPlatform}>{review.Platform}</p>
          </div>
        </div>
      ))}
    </Slider>
    <div className={styles.newsLetterConatiner}>
    <div className={styles.newsLetterSubConatiner}>
      <h2 className={styles.newsLetterHeader}>Subscribe to Newsletter</h2>
      <span className={styles.newsLetterPara}>We have a wide experience in experience design and strategy.</span>
      <div className={styles.newsTextConatiner}>
        <input
        type='text'
        placeholder='Enter your email address' 
        className={styles.newsLetterText}
        />
        <button className={styles.newsLetterBtn}>Send Now</button>
      </div>
    </div>
    </div>

  </div>
  <footer>
  <nav id='navbar'>
        <div className={styles.heading}>
          <span className={styles.spanHeading1}>Medi</span>
          <span className={styles.spanHeading2}>Care+</span>
          <div className={styles.accountImg}>
            <img src={facebook} alt="" />
            <img src={google} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className={styles.navlinksDiv}>
          <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </div>
      </nav>
  </footer>
</section>
    </div>
  );
}
