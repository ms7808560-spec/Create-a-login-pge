import React,{useState} from 'react'
import Button from '../components/Button';

const Service = () => {
  const [count,setCount] = useState(0)
@@ -13,17 +14,19 @@
    }
  }
  return (
    <div>
    <div className='container'>
        <h1> this is service page {count} </h1>
        <p style={{color:"tomato"}}>{errmsg}</p>

        <button onClick={()=> {setCount(count + 1); setErrmsg("")}}>add</button> &nbsp;
        <button onClick={dec}>Subtract</button>

      <h1><pre>hello                      world</pre></h1>

      <Button > abrakadabra</Button>

    </div>
  )
}

export default Service