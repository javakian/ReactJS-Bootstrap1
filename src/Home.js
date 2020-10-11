import React from 'react';
import { Col, Image } from 'react-bootstrap';

export const Home = () => (
  <div className='card'>
    <div className='card-body'>
    <div className='Container'>
          <div className='text-center margin'>
          <h1>Technology And Times</h1>
          <h3>  Has "Technology" changed your life ? </h3>
          </div>
     <div className='row'>
      <Col>
        <Image
        
          className='img-fluid'
          src={require('../src/assets/splash.png')}
          alt='Technology n Times Index photo'
        />
    

      </Col>
      <Col sm={5}>
        <h5>
          Intellectual property, inventions, and related systems have upgraded people's lives from the beginning of time. Even way before the western civilization, 
          primitive items such as fire, steel, and the wheel effected groups of people all over the world. Fire provided the energy, steel provided a means of foundation, 
          and the wheel provided automobile, and trains ground transportation. Technology has upgraded life especially over the past two hundred years making the United 
          States a major marketing center for the world. Thus as people found new and newer tools for living people, commerce changed making us a major financial engine 
          for the everyone thus improving our lives one at a time nationally.{' '}
          </h5>       
       </Col>
     
      <div className='Container'>
        <div className='row'>
          <Col sm={24}>  <br />
              <h5>  
                From the invention of electricity by Benjamin Franklin every else followed. As people harnessed electricity for themselves, Westinghouse, General Electric, 
                and manufacturers developed even electric vehicles during the early 1900's. Even today the modern day Tesla corporations has transformed the way our vehicles 
                move.  Even today we have the greatest inventions, and you thought everything has already been invented. As far as electricity we have a transformation from 
                electrical energy to electro-mechanical machinery transformations have made homes, business, and 
                everywhere easier.  From purchase of items, the financial community benefited from national marketing. Now we live in a digital world with analog systems 
                still at our primary existence and foundation.  Automobiles, television-radio, computers, and social networks have been modified and still changing every day. 
                The people behind these computing machines of electronics hardware and software personalization, the industry manufacturers and service providers refine the 
                process so consumers get great products. This takes TIME.      {' '}
                </h5>       <br />
            <h5>  
              Thus the efficiency and usefulness is offset by TIME we spend to acquire these, overall it is worth the effort and cost. The end result are computing 
              communications devices with sensors, voice, and cameras that capture and give is life and that is fantastic ! The funny part of all of this, the people who 
              complain about having to learn, is that same people who demand and control people from their behavior and can't stand giving patience to machines that in the 
              long run will help them perform live better !   Basically if people are forced into using technology because from its practical need for creating transactions 
              more and more people see a need to learn to use computers.  {' '}
              </h5>
          <h5>
          <br />
                What has technology done for you ?    </h5><h5>    Has technology hurt you or your world ?       </h5><h5>
                Has it helped to insure everyone has more privacy ?    </h5><h5>        We hope and in turn humanity has benefitted from Technology.      </h5>  <h5>
                </h5>
                <h5> <br ></br>
                ​thank you, </h5>    <br />   <h5>
                James L. Avakian, Engineering Technologist
                Optical Automation, LLC    {' '}  
                </h5> 
              </Col>
            </div> 
          </div>
        </div>
   </div>
  </div>
</div>
 );
