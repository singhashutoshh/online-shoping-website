import { useEffect, useState } from "react"

const UseHookType1 = () => {


// video starts from 46:10 

   const [time, setTime ] = useState( new Date().toUTCString());
  // const [count, setCount ] = useState(0);
  // const [total, setTotal ] = useState(0);

  //   useEffect(()=>{
  //     console.log("will run on only 1st time when component is mounted ");
      
  //  },[]) //empty array as dependency


  // useEffect(()=>{
  //    console.log("will run on every render");
     
  // })  //will run on every render


  // useEffect(()=>{
  //   console.log("will run on every render");
    
  // },[count]);

  //  useEffect(()=>{
  //    console.log("will run on every render");
     
  //  },[count,total]);


  useEffect(()=>{
     
    console.log("component mounted (clock started)! ");
    
   let clock = start();

   return() => {
    console.log(" component unmounted (clock stopped)!");
    stopClock(clock);
   }

  },[])


  function start() {
    
    return setInterval(() => {
      setTime(new Date().toUTCString())
    }, 1000);

  }

  function stopClock(clock) {
    clearInterval(clock);
  }

  function reset() {
    return
  }



  // function updateCount() 
  // {
  //   setCount(count+1);
  // }

  return (
     <>
      {/* <h1 className="text-center"> Count:{count} total:{total} </h1>
      <div className="flex justify-center">
      <button onClick={updateCount} className="btn btn-success" >increment count</button> &nbsp;
      <button onClick={()=>setTotal(total+1)} className="btn btn-secondary " >increment total</button>
       </div> */}

      <h1 className="text-center" >{time}</h1>
      <div className="flex justify-center">
      <button onClick={start} className="btn btn-success" >start </button> &nbsp;
      <button onClick={stopClock} className="btn btn-secondary " >stopClock </button>
      <button onClick={reset} className="btn btn-warning " >reset </button>
       </div> 

        
    </>
  )

}

export default UseHookType1
