import Navbar from "@/Components/Navbar"
import Head from "next/head"

const home = () => {
    return (
      <>
<Head>
  <title>
    Home Page
  </title>
</Head>


      <Navbar />

      <h1 style={{color:"white",width:"100%"}}>Hello World my home</h1>
      </>
    )
  }
  
  export default home
  