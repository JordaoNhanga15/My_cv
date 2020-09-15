import React from 'react'
import '../components/Css/Cv.css'
import 'font-awesome/css/font-awesome.min.css'

function Cv(){
    return(
        
<aside className="profile-info">
            <a href="my_cv.html">   <h1>Jordão De Oliveira</h1></a>
        <p className="about">
Hello, my name is Jordan Nhanga de Oliveira
I'm a programmer and technology lover
I decided to do my cover letter with some of my projects<br></br> "If you  never try, you  never now exactly Value"COLDPLAY</p>
   
    <div className="social-media">
       <a href="https://www.facebook.com/Jordao Nhanga De Oliveira"> <i className="fa fa-facebook" aria-hidden="true"></i></a>
       <a href="https://github.com/JordaoNhanga15"><i className="fa fa-github" aria-hidden="true"></i></a> 
        <a href="https://www.linkedin.com/in/jordao-de-oliveira-11761a1a2/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
    </div> 
    <div className="social">
        <h2>Expertise</h2>
        <div className='expertise_container'>
        <div className="expertise">
        <a href=""> <img src={require('../Assets/transferir.jpg')} alt=""/>
            <p >My second school</p>
            <small>N'jinga Mbande is my second school, for plus information click</small></a>
        </div>
        <div className="expertise">
                <a href=""><img src={require('../Assets/santa.jpg')} alt=""/>
                <p >My therd school</p>
                <small>sta. Ana college is my threty school, i studie puniv </small></a>
            </div>
            <div className="expertise">
                   <a href="www.utanga.co.ao"><img src={require("../Assets/Utanga.jpg")} alt=""/>
                    <p >My new school</p>
                    <small>it is my new school, i am learning, for plus information click </small></a> 
                </div>

                </div>
                <h2>My project work</h2>  
                <div className="project">  
                    <img src={require("../Assets/Captura95.png")} alt=""/>
                  
                </div>   
                <div className="project">
                    <img src={require("../Assets/Captura97.png")} alt=""/>                                       
                </div>  
                <div className="project">
                    <img src={require("../Assets/Captura100.png")} alt=""/>                   
                </div>  
                <div className="project">
                    <img src={require("../Assets/Captura98.png")} alt=""/>                  
                 </div>  
                 <div className="project">
                <img src={require("../Assets/27.jpg")} alt=""/>                  
                </div>  
                <div className="project">
                    <img src={require("../Assets/28.png")} alt=""/>
                </div>  

                <div className="form-box">
                        <h2>contact me</h2>
                    <form action="">
                        
                        <div class="input-group">        
                        <input type="text" placeholder="name" class="nome"/>
                                  
                                  <input type="text" placeholder="Morada" class="card"/>
                                        
                                  <input type="tel" placeholder="(+244)000-000-000" class="phone"/>

                                <input type="email" placeholder="email" class="email"/>
                                     
                                <input type="password" placeholder="password" class="pass"/>
                            </div>
                            <div class="text-area">
                                <textarea name="" id="" rows="4" placeholder="your message"></textarea>
                            </div>
                            <input type="submit" class="submit-bt"  value="send message"/>
                    </form>
                </div>
                <div className="contact">
                   <span><i className="fa fa-envelope-o" aria-hidden="true"></i>jordaonhanga7@gmail.com</span>
                  <span> <i class="fa fa-phone" aria-hidden="true"></i> 949533505</span>
                </div>
    </div>
    
</aside>
       
    )
}
export default Cv;