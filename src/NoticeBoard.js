import logo from './logo.svg';
import Vector from './Vector 169.svg';
import Ell34 from './Ellipse 34.svg';
import Ell39 from './Ellipse 39.svg';
import './NoticeBoard.css'

function NoticeBoard() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='notice'><b>NOTICE BOARD </b></p>

        <div className='view'>View all<img src={Vector} id='arrow'></img></div>
        
        
        <div>
  

          <div className='parent'>
          <img src={Ell34} id='Ell34'></img>
          <img src={Ell39} id='Ell39'></img>
          <p id='text'>17</p>
          </div>
          <p className='noticeheading'> HEADING OF THE NOTICE</p>
          <div className='container'>
          <div className='month'>MAY</div>
          <div className="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui molestiae est, dignissimos laudantium aliquid quidem, voluptas magni expedita repellat odio sit! Numquam eius a nam, ipsa voluptatibus ipsam natus.
          <button className='button'>Register now</button>
          </div>
          </div>
          <hr color="#703364" height="0.125rem"></hr>
          

          <div className='parent'>
          <img src={Ell34} id='Ell34'></img>
          <img src={Ell39} id='Ell39'></img>
          <p id='text'>17</p>
          </div>
          <p className='noticeheading'> HEADING OF THE NOTICE</p>
          <div className='container'>
          <div className='month'>MAY</div>
          <div className="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui molestiae est, dignissimos laudantium aliquid quidem, voluptas magni expedita repellat odio sit! Numquam eius a nam, ipsa voluptatibus ipsam natus.
          </div>
          </div>
          <hr color="#703364" height="0.125rem"></hr>

          <div className='parent'>
          <img src={Ell34} id='Ell34'></img>
          <img src={Ell39} id='Ell39'></img>
          <p id='text'>17</p>
          </div>
          <p className='noticeheading'> HEADING OF THE NOTICE</p>
          <div className='container'>
          <div className='month'>MAY</div>
          <div className="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui molestiae est, dignissimos laudantium aliquid quidem, voluptas magni expedita repellat odio sit! Numquam eius a nam, ipsa voluptatibus ipsam natus.
          
          </div>
          </div>
          <hr color="#703364" height="0.125rem"></hr>

          <div className='parent'>
          <img src={Ell34} id='Ell34'></img>
          <img src={Ell39} id='Ell39'></img>
          <p id='text'>17</p>
          </div>
          <p className='noticeheading'> HEADING OF THE NOTICE</p>
          <div className='container'>
          <div className='month'>MAY</div>
          <div className="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui molestiae est, dignissimos laudantium aliquid quidem, voluptas magni expedita repellat odio sit! Numquam eius a nam, ipsa voluptatibus ipsam natus.
          
          </div>
          </div>
          <hr color="#703364" height="0.125rem"></hr>

          </div>
      </header>
    </div>
  );
}

export default NoticeBoard;
