import { useState, useEffect } from "react";

function Home({ start }: { start: string }) {
  const [message, setMessage] = useState("");

  useEffect( () => {

    setMessage(start);
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
