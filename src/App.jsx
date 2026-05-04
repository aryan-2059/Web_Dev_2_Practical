import { useState, useEffect } from 'react'
function App() {
  const [data, setData]=useState([]);
  const [currentPg, setCurrentPg] = useState(1)

  const itemsPerPage = 4;
  const endIdx = currentPg * itemsPerPage;
  const startIdx = endIdx - itemsPerPage;

  let api ="https://dummyjson.com/products";
  useEffect(()=>{
    fetch(api)
    .then((res)=> res.json())
    .then((json)=> setData(json.products))})
  

  function prevHandler(){
    if (currentPg > 1) {
      setCurrentPg(currentPg - 1);
    }
  }

  function nextHandler(){
    setCurrentPg(currentPg + 1);
  }

  return (
    <>
      <h1>Product Images</h1>
      {
        data.slice(startIdx, endIdx).map((item) => {
          return (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          )
        })
      }
      <button onClick={prevHandler}>Previous</button>
      <button onClick={nextHandler}>Next</button>
    </>
  )
}

export default App
