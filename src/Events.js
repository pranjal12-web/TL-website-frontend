import Vector from './Vector 1691.svg';
import Arrow from './arrow-bottom-left-.svg'
import './Events.css'

function Events() {
  return (

      <div className='body'>
       <p className='events'><b>EVENTS</b></p>

<div className='view'>View all<img src={Vector}></img></div>

<div className='parent'>
<div className='leftpart'>
    <div className='box'>
        <div className='boxleft'>
            <img src='https://xeniumhr.com/wp-content/uploads/2019/05/roundtable-discussion-1080x675.jpg' className='img'></img>
        </div>

         <div id='boxright'>
           <p className='date'>June 18,2018 </p>
            <p className='title'>Smart India Hackathon <br></br> 2018</p>
            <div className='knowMore'>
                <div><img src={Arrow} id='arrow'></img></div>
                <div id='km'>Know more</div>
            </div>
        </div> 
         
        {/* <img src="C:\Users\HP\Documents\TLWebsite\tlwebsite\src\Samplepic.jpg"></img> */}
        
    </div>

    <div className='box'>
        <div className='boxleft'>
            <img src='https://xeniumhr.com/wp-content/uploads/2019/05/roundtable-discussion-1080x675.jpg' className='img'></img>
        </div>

         <div id='boxright'>
           <p className='date'>June 18,2018</p>
            <p className='title'>Smart India Hackathon <br></br> 2018</p>
            <div className='knowMore'>
                <div><img src={Arrow} id='arrow'></img></div>
                <div id='km'>Know more</div>
            </div>
        </div> 
         
        {/* <img src="C:\Users\HP\Documents\TLWebsite\tlwebsite\src\Samplepic.jpg"></img> */}
        
    </div>

    <div className='box'>
        <div className='boxleft'>
            <img src='https://xeniumhr.com/wp-content/uploads/2019/05/roundtable-discussion-1080x675.jpg' className='img'></img>
        </div>

         <div id='boxright'>
           <p className='date'>June 18,2018</p>
            <p className='title'>Smart India Hackathon <br></br> 2018</p>
            <div className='knowMore'>
                <div><img src={Arrow} id='arrow'></img></div>
                <div id='km'>Know more</div>
            </div>
        </div> 
         
        {/* <img src="C:\Users\HP\Documents\TLWebsite\tlwebsite\src\Samplepic.jpg"></img> */}
        
    </div>
</div>

<div className='rightpart'>
    <img src='https://xeniumhr.com/wp-content/uploads/2019/05/roundtable-discussion-1080x675.jpg' className='img1'></img>
    <p className='date1'>June 18,2018</p>
    <p className='title1'>Smart India Hackathon 2018</p>
    <p className='content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consequuntur perspiciatis doloribus excepturi corporis commodi, autem eius pariatur nemo! Porro in debitis veritatis vitae consequuntur dolorem assumenda labore, et consectetur?</p>
    <p className='knowMore1'>Know More</p>
</div>

</div>
 

  </div>        
  );
}

export default Events;
