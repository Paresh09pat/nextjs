import Navbar from "@/Components/Navbar"
import styles from "../styles/about.module.css"
import Image from 'next/image'

const about = () => {
    return (
      <>
      <Navbar />
      <h1 className={styles.mainabout}>Hello World about</h1>

     <Image src="/shiva.jpg" width="190" height="300"></Image>

     {/* <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Focean%2F&psig=AOvVaw036hD4Y4UBHFHh5OrqBveN&ust=1712643410344000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLD704L8sYUDFQAAAAAdAAAAABAE" alt="" width="190" height="300"></Image> */}
      </>
    )
  }
  
  export default about
  