import React from 'react'
import cars24logo from '../Assets/Images/cars24logo.png'; 
import cars24heropage from '../Assets/Images/cars24heropage.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faChevronDown} from '@fortawesome/free-solid-svg-icons';


export default function Homepage() {
  return (
    <div className='container'>
    <div className='header' style={{height:'80px',width:'100%',display:'flex',justifyContent:'center',overflow:'hidden'}}>
      <div className='innerheader' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',paddingRight:'100px',width:'1200px',marginRight:'0px'}}>
        {/* <div className='headeritems'  style={{display:'flex',justifyContent: 'space-evenly',alignItems:'center',width:'100%'}}> */}
       <div className="headersection1" style={{display:'flex',paddingRight:'60px'}}>
       <div className="Logosection" style={{marginLeft:'5.6px'}}>
        <p>
         <img src={cars24logo}  style={{height:'39px',width:'80px',marginRight:'5px'}}/></p>
        </div>
      <div className='locationsection' style={{display: 'flex',alignItems: 'center',gap: '5px'}} >
        <div className="locationsectionborder" style={{height:'46px',width:'162.46px',borderRadius:"12px",display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#FAFAFA'}}>
          <FontAwesomeIcon icon={faLocationDot} style={{paddingRight:'px',marginRight:'10px'}}/>
          <p style={{fontWeight:'bold',fontFamily:'sans-serif',paddingRight:'15px'}}>  location</p>
            <FontAwesomeIcon icon={faChevronDown} />
            </div>
            </div>
            </div>
            <div className='headersection2'  style={{display:'flex',paddingRight:'60px',flex:5}}>
              <ul className='headermidsection' style={{gap:'20px',display:'flex'}}>
        <div className='buysection'  style={{ display: 'flex',alignItems: 'center',gap: '3px'}}>
        <li style={{fontFamily:'sans-serif',fontSize:'16px',listStyle:'none'}}>Buy used car</li>
        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px', }} />
        </div>
        <div className='sellsection' style={{ display: 'flex',alignItems: 'center',gap: '5px'}}>
        <li style={{fontFamily:'sans-serif',fontSize:'16px',listStyle:'none'}}>Sell Car</li>
        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} />
        </div>
        <div className='carfinancesection' style={{ display: 'flex',alignItems: 'center',gap: '5px'}}>
        <li style={{fontFamily:'sans-serif',fontSize:'16px',listStyle:'none'}}>Car finance</li>
        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} />
        </div>
        <div className='newcarssection' style={{ display: 'flex',alignItems: 'center',gap: '5px'}}>
        <li style={{fontFamily:'sans-serif',fontSize:'16px',listStyle:'none'}}>New cars    </li>
        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} />
        </div>
        <div className='carservicesection' style={{ display: 'flex',alignItems: 'center',gap: '5px'}}>
        <li style={{fontFamily:'sans-serif',fontSize:'16px',listStyle:'none'}}>Car services </li>     
        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} />
         </div>
          </ul>
         </div>
         <div className='headersection3'  style={{display:'flex'}}>
          <div className='loginsection'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <div style={{ width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AccountCircleIcon/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
        <span style={{ fontSize: '14px', color: '#757575', fontFamily: 'sans-serif' }}>Hello, Sign in</span>
        <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#212121', fontFamily: 'sans-serif' }}>Account</span>
      </div>
      <ArrowDropDownIcon/>
    </div>
        </div>
        </div>
        </div>
      {/* </div> */}
    </div>
    <div className='herosection'>
      <img src={cars24heropage} style={{height:'500px',width:'100%',objectFit:'cover'}} alt='heropage'></img>
    </div>
  </div> 

 );
};
