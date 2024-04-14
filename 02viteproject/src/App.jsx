import Card from './components/Card'
import './index.css'

function App() {

  return (
    <>
      <h1 className='text-red-600 text-3xl'>Vite + React</h1>
      <p className="text-yellow-500">This is our second project using vite</p>
      <Card heading={"Shivam"} btnText = {"Click Me"} />
      <Card heading={"Ram"} />
    </>
  )
}

export default App
