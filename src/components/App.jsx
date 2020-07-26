import React from "react";
import Insert from "./Insert";
import emojipedia from "../emojipedia";

function create(emoji){
  return(
      <Insert 
      key={emoji.id}
      symbol={emoji.emoji}
      name={emoji.name}
      detail={emoji.meaning} />
  )
}


function App() {
  return (
    <div>
    <h1>
      <span>emojipedia</span>
    </h1>
    <dl className="dictionary">{emojipedia.map(create)}</dl>
    
     </div>
   );
}

export default App;
