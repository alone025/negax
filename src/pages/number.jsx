import { Button } from "../components/ui/button";

import { useState } from "react";
import {  Input } from "@chakra-ui/react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";



const Number = () => {


    const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

 
  const countryOptions = countryList().getData();


  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="homep">
      <div className="tope flex flex-row items-center justify-start mx-auto max-w-[1200px]">
        <div className="lefte flex flex-row gap-9 items-center">
            <img src="/logo.png" alt="logo" className="w-[144px]" /> <p className="font-promonument text-[46px] font-normal customText">NIKAH.SPACE</p>
        </div>

      </div> 
      <div className="back max-w-[1200px] mx-auto my-[90px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="57" viewBox="0 0 34 57" fill="none">
  <path d="M13.1704 28.5972L31.8053 9.81473C32.7858 8.82063 33.3361 7.47587 33.3361 6.07417C33.3361 4.67246 32.7858 3.3277 31.8053 2.3336C31.316 1.8363 30.7337 1.44158 30.0923 1.17221C29.4508 0.902842 28.7627 0.76416 28.0678 0.76416C27.3729 0.76416 26.6848 0.902842 26.0434 1.17221C25.4019 1.44158 24.8197 1.8363 24.3303 2.3336L2.01048 24.8301C1.51709 25.3233 1.12547 25.9101 0.858217 26.5567C0.590965 27.2032 0.453369 27.8967 0.453369 28.5972C0.453369 29.2976 0.590965 29.9911 0.858217 30.6376C1.12547 31.2842 1.51709 31.871 2.01048 32.3643L24.3303 55.126C24.8222 55.6178 25.4055 56.0068 26.0469 56.2708C26.6883 56.5349 27.375 56.6687 28.0678 56.6647C28.7606 56.6687 29.4474 56.5349 30.0887 56.2708C30.7301 56.0068 31.3134 55.6178 31.8053 55.126C32.7858 54.1319 33.3361 52.7872 33.3361 51.3854C33.3361 49.9837 32.7858 48.639 31.8053 47.6449L13.1704 28.5972Z" fill="#ACACAC"/>
</svg>
      </div>
      <form className="max-w-[1200px] mx-auto flex flex-col gap-20">
      <div  className="flex flex-col gap-10">
          <label className="text-[44px] text-[#5E5E5E] font-mulish font-normal">Страна</label>
          <Select
            options={countryOptions}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select a country"
            required
          />
        </div>
        <div  className="flex flex-col gap-10">
          <label className="text-[44px] text-[#5E5E5E] font-mulish font-normal">Номер телефона</label>
     
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry={selectedCountry?.value}
              international
              inputComponent={Input}
              required
              className="py-10 px-20 cursor-pointer border-2 text-[67px] font-mulish text-[#5E5E5E] font-medium border-[#ACACAC] rounded-2xl"
            />
        
        </div>
      </form>
      <div className="bottomers mt-[160px] mb-10 mx-auto w-full justify-center max-w-[1200px]">
      <Button  onClick={()=> window.open('/otp', "_current")} colorPalette="teal"
          variant="solid"
          className=" gap-10 shadow-md w-full font-popins font-bold text-white bg-[#634F9E] py-10 h-auto rounded-[19px] px-[100px] text-[53px]">
          Продолжить 
        </Button>
      </div>
   
    </div>
  );
};

export default Number;
