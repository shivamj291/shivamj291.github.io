import "./Home.css"
function Home(){
    return(
        <div  id="home">
            <div id="font_heading">
                    <h1 id="h1_first">Hii,</h1> 
                    <h1 id="user-detail-name">I'm Shivam Jaiswal</h1> 
                    <span  id="user-detail-intro">
                    <h3 >Full Stack Developer</h3>
                    <h6 id="h6_first">I am from Raisen, Madhya Pradesh </h6>
                    <h6 className="next">Phone - 9399849603</h6>
                    <h6 className="next"> Email -Shivamj291@gmail.com</h6>
                    </span>
                   
            </div>
            <div id="image">
                  <img src="shivam.jpg" class="home-img"/>
            </div>
            
        </div>
    )
}
export default Home