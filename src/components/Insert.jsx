import React from "react"
function Insert(props){
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.symbol}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>{props.detail}</dd>
        </div>
    );
}
export default Insert;