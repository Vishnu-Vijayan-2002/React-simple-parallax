import './App.css'
import Card from './components/Card'
import Para1 from './components/Para1'
import './bootstrap.min.css'
import Slidde from './components/Slidde'
function App() {
  const slideData=[
    {    images:"https://www.zdnet.com/a/img/resize/0591596b29a037952a07916d328aa4fd4c687e0c/2023/01/19/bd282ca9-21a9-42b4-889c-e59f36042728/screen-shot-2023-01-19-at-2-15-42-pm.png?auto=webp&width=1280"
  },
  {    images:"https://starlust.org/wp-content/uploads/2023/02/an-astronaut-surounded-by-money.webp"
},
{ images:"https://media.licdn.com/dms/image/D4D08AQEUSCf3fy7x3Q/croft-frontend-shrinkToFit1024/0/1696449729253?e=2147483647&v=beta&t=Pv65b1YJp6-rLf8y4G66BnQvyaM_b9quoLdbtHNldKs"},
{ images:"https://blog.mentoria.com/wp-content/uploads/2023/04/2d813486-b1a0-42a0-8b63-7a8bb6a2fbad_cover_web_11zon.jpg"}
,
{ images:"https://tpdedu.s3.ap-southeast-2.amazonaws.com/uploads/2023/10/01213218/World-Famous-Astronauts.jpg"}

  ]
  return (
    <div className='App'>
     <Para1></Para1>
     <Card></Card>
     <Slidde slideData={slideData} ></Slidde>
    </div>
  )
}

export default App
