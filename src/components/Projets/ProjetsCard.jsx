import React from "react";

const ProjetsCard = (props) => {
    
    const {imgUrl, title, url,description} = props.item;

    return (
         <div className="single__course__item">
            <div className="course__img">
                <img src={imgUrl} className='w-100' alt="" />
            </div>

            <div className="course__details">
                <h6 className="course__title mb-1">
                    {title}
                </h6>

                <div className="lesson d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                        {description}
                    </p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                        <a href={url}>
                            <button className=" p-2 px-3 btn">
                            Voir Code
                            </button>
                        </a>
                </div>
            </div>
         </div>
    )
}

export default ProjetsCard;