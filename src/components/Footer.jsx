import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

 function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
        <div className="container mx-auto px-4">
        <div className="min-h-16">
<div className='flex justify-between items-center flex-col md:flex-row py-10'>
<h2 className='text-4xl font-bold text-white'>Subscribe To Our Newsletter</h2>
<form className='md:w-1/3 w-full mt-8 md:mt-0 relative'>
<input type="email" className='shadow-xl border border-gray-300  rounded-md focus:outline py-3 px-3 w-full text-white'  placeholder='Enter your email...' />
<button className='absolute right-0 top-0 bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-all ease-in-out duration-300'>Subscribe</button>
</form>
</div>
</div>
</div>
        <div className='container mx-auto px-4 text-center py-4 text-white'>
            <p>Copyright@JerryStudios</p>
        </div>
    </footer>
  )
}
export default Footer;

