import React from "react";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";


function App(){
  return(
   
    <>
    <Navbar/>
    

  {/* <div className="row">
  <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div> */}


  <div className="container ">
      <div className="row mt-5">
        <div className="col-md-4 ">
          <Card 
            title="Card Title 1"
            imageUrl=""
            description="This is a description for card 1."
          />
        </div>
        <div className="col-md-4">
          <Card 
            title="Card Title 2"
            imageUrl=""
            description="This is a description for card 2."
          />
        </div>
        <div className="col-md-4">
          <Card 
            title="Card Title 3"
            imageUrl=""
            description="This is a description for card 3."
          />
        </div>
      </div>
    </div>

    </>
   

  )
}
export default App