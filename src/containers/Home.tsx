import { useState, useEffect } from "react";
import * as f from '../assets/scripts/functions';

interface props {
  start: string
}

function Home(props: props) {
  const [message, setMessage] = useState("");

  useEffect( () => {

    console.log(f.concatStrings(props.start, props.start));
    setMessage(props.start);
  }, [])
  
  return (
    <>
      {/* header */}
      {/* body */}
      <h1>{ message }</h1> 
      {/* footer */}
    </>
  )
}

export default Home;
