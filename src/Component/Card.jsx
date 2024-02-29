import React from "react"
const Card = ({ title, imageUrl, description }) => {
  return (
    // <div className="col-md-2">
    //   <div className="card">
    //     <div className="card-body">
    //       <h5 className="card-title">{name}</h5>
    //       <p className="card-text">{surname}</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>
    // </div>

    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )

}
export default Card