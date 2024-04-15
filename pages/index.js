
import Navbar from "@/Components/Navbar"
import style from "../styles/index.module.css"
import Head from "next/head"

const index = () => {
  return (
    <>

    <Head>
      <title>Index Page</title>
    </Head>

    <Navbar />
   <h1 className={style.head}>
    This is our index page
   </h1>
    </>
  )
}

export default index
