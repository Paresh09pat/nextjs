import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <nav>
   <ul>
     <Link href="/">
   index
    </Link>
    <br/>

     <Link href="/home">
    home
    </Link>
    <br/>

    <Link href="/contact">
    contact
    </Link> <br/>

    <Link href="/blog">
    blog
    </Link> <br/>

    <Link href="/about">
     About
    </Link> <br/>

    <Link href="/blog/blog1">
     blog1
    </Link>
   </ul>
   </nav>
    
    </>
  )
}

export default Navbar