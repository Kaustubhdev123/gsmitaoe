import React from "react";
import Image from "next/image";
import Link from "next/link";

const PopupBanner = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg relative shadow-lg text-center animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-center h-7 w-7 text-2xl"
        >
          &times;
        </button>
        
        <div className="mt-4">
          <p className="text-2xl font-bold text-orange-600">
           news !!!!
          </p>
          <p className="text-lg text-gray-700">
           we will satart hiring for team 2024-24 soon .....
          </p>

          
       
          
        </div>
      </div>
    </div>
  );
};

export default PopupBanner;
