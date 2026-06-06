import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import ImageComponent from './components/Imgcomp'
function App() {
    return (
      <div>
        <Navbar/>
        <MainContent/>
      </div>
    )
  
}

function MainContent(){

  const [count, setCount] = useState(4)
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([
    <ImageComponent setCount={setCount} name="Item 1" price="$19.99" image_url={"https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"}/>,
    <ImageComponent setCount={setCount} name="Item 2" price="$29.99" image_url={"https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"}/>,
    <ImageComponent setCount={setCount} name="Item 3" price="$39.99" image_url={"https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"}/>,
    <ImageComponent setCount={setCount} name="Item 4" price="$49.99" image_url={"https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"}/> 
  ])
  const [cart,setCart] = useState([

  ])
  const [price,setPrice] = useState(0)
  useEffect(()=>{
    setCount(items.length)
  },[])
  return(
      <div className='w-full h-screen grid grid-cols-12 overflow-hidden'>
        <div className='h-full col-span-3 bg-green-400'>
          <p className='text-2xl text-center'>Remaining Items : {count}</p>
        </div>
        <div className='h-full col-span-6  bg-blue-400 shadow-lg grid grid-cols-3 gap-4 p-4' >
          {
            items.map((item,index)=>{
              return(
                <div key={index} className='w-full h-full'>
                  {item}
                  <div className="rounded-2xl bg-gray-400 flex justify-center items-center h-8 m-2" onClick={()=>{
                    setCount((curr)=>curr-1)
                    setItems((curr)=>{  
                      return curr.filter((_,i)=>i!==index)
                    }
                  )
                  setCart((curr)=>curr.concat(item))
                  setTotal((curr)=>curr+1)
                  setPrice((curr)=>curr+parseFloat(item.props.price.slice(1)))
                  }}
                   >+</div>
                </div>
              )
            })
          }
        </div>
        <div className='h-full col-span-3  bg-red-400 shadow-lg  '  >
          <p>Total Items:{total}</p>
          <p>Items in Cart:</p>
          <div>
            {
              cart.map((item,index)=>{
                return(
                  <div key={index} className='w-full h-full'>
                    {item.props.name} - {item.props.price }
                    
                  </div>  

                )
              })
            }
          </div>
          price : {price}
          </div>

      </div>
)
}
export default App
