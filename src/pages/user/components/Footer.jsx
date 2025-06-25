import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">

        
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold mb-4">Recipe</h3>
          <p className="text-sm text-gray-400">
            Helping you cook better, eat smarter, and showcase your best recipes.
          </p>
        </div>

       
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/login" className="hover:text-pink-400">Login</Link></li>
            <li><Link to="/sign-up" className="hover:text-pink-400">Sign Up</Link></li>
            
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-pink-400">Terms of Service</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-pink-400">Privacy Policy</Link></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-4">Opening Hours</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-2">Subscribe for recipe tips and app updates</p>
          <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="hover:text-pink-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

     
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4 border-gray-700">
        &copy; {new Date().getFullYear()} Recipe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;