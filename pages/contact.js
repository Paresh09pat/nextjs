import Navbar from "@/Components/Navbar"
import style from "../styles/contact.module.css"

const contact = () => {
    return (
      <>
      <Navbar />
      <h1 className={style.head}>Hello World contact</h1>

      <h2>Hello World contact</h2>
      <div>Hello World contact div </div>

      <style jsx>
        {`
        h2{
          color:red
        }
        div{
          color:purple;
          font-size: 40px;
          font-weight:bolder
        }
        `}
      </style>
      </>
    )
  }
  
  export default contact
  