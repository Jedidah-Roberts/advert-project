import { div } from "framer-motion/client";
import React from "react";
import Navbar from "../user/components/Navbar";
import Footer from "../user/components/Footer";


const TermsAndPrivacy = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1670895801174-8278045808f4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cooking"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-4">
            Welcome to <strong>Recipe</strong> and our Terms and Conditions of Service. We are excited to change the way you cook and eat for the better and help you feel more empowered in the kitchen.
          </p>
          <p>At RecipeEase, we are committed to providing a safe, inspiring, and enjoyable experience for all our users. By signing up and using our platform, you agree to provide accurate information and to respect the content and community guidelines. All recipes, tips, and images shared on the app are for personal use only and may not be redistributed or used commercially without permission. <br /> <br /> We protect your privacy by collecting only the data necessary to enhance your experience and improve our services. Any recipes or content you contribute remain your property, but by sharing them, you grant us permission to display them on the platform. Offensive, plagiarized, or harmful content is strictly prohibited and may lead to account suspension. We use cookies to personalize your experience and help us understand how the app is being used. By continuing to use RecipeEase, you agree to abide by these terms and our full Privacy Policy.</p>
          <p className="text-gray-600 mb-4">
            These Terms are important and affect your legal rights, so please read them carefully.
          </p>
          <p className="text-gray-600 mb-4 italic">
            Note: Section 15 governs how disputes are resolved and includes a mandatory agreement to resolve disputes by binding, individual arbitration, subject to certain exceptions.
          </p>
          <p className="text-gray-600 mb-4">
            An amount of <span className="font-semibold text-pink-600">5%</span> will be charged for posting a single ad. Ads will be approved within <span className="font-semibold text-green-600">24 hours</span>.
          </p>
          <p>We may occasionally update our policies, and you will be notified when significant changes occur. Your continued use of RecipeEase after such updates confirms your acceptance of the revised terms.

</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            In addition, your <strong>Recipe</strong> subscriptions will <span className="underline font-medium">automatically renew</span> unless you take steps to prevent them from renewing as explained.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndPrivacy;
