import { Link } from "@remix-run/react"
import categoryImg from '../../public/img/list-img.png'


const Category = () => {
  return (
    <div className='flex items-center mb-12'>
        <div className=" lg:w-1/4 mr-6 flex items-top">
            <img src={categoryImg} alt="Imagen de la categoria"  className=""/>
        </div>
        <div className="pr-4 text-2xl">
            <h1 className="text-2xl font-extrabold mb-2">Using Abstract</h1>
            <p className="mb-2">Abstract lets you manage, version, and document your designs in one place.</p>
            <Link to='/' className="hover:underline text-accent relative">Learn More <i className='bx bx-right-arrow-alt bx-md absolute text-accent'></i></Link>
        </div>
        
    </div>
  )
}

export default Category