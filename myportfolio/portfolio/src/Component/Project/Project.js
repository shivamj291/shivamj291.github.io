import "./Project.css"
function Project(){
   
    return(
        <div id="projects">
              
            <h1 id="pheading" style={{textDecoration:"underline" }}>Project</h1>
        
         <div  class="project-card" >
            
                            <img src="lovoda.gif"/>
                    <div id="lovoda_text">
                            <h1 class="project-title">Lovoda</h1>
                            <p>LOVODA® Accessories</p>
                            <p> Jewelry/watches</p>
                            <p>We complete you ♥️ Stunning accessories styled for you.</p>
                            <a href="https://comfy-speculoos-0dfe32.netlify.app/" class="project-deployed-link"><p>Check from here</p></a>
                            
                    </div>
         
           </div>
           
          
          <div  class="project-card">
         
            <img src="indiamartAnim.gif"/>
                <div id="lovoda_text">
                        <h1 class="project-title">Indiamart</h1>
                        <p>We connect Buyers & Sellers</p>
                        <p> End all your business worries with IndiaMART</p>
                        <p> IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.</p>
                    
                        <a href="https://astonishing-smakager-1c8cc9.netlify.app/"><p>Check from here</p></a>
                        
                </div>
    
            </div>
          
           
        </div>
    )
}
export default Project