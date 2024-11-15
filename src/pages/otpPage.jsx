import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Box, Input } from "@chakra-ui/react";





const OtpPage = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [activeIndex, setActiveIndex] = useState(null);
    const inputRefs = useRef([]);
  
    const handleChange = (value, index) => {
      if (/^\d$/.test(value)) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
  
        
        if (index < otp.length - 1) {
         
          setTimeout(()=>{
            inputRefs.current[index + 1]?.focus();
            setActiveIndex(index + 1);
          }, 200)
        }
      } else if (value === "") {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    };
  
    const handleKeyDown = (event, index) => {
      if (event.key === "Backspace" && otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
        setActiveIndex(index - 1);
      }
    };
  
    const handleFocus = (index) => {
      setActiveIndex(index);
    };
  
    const handleBlur = () => {
       
            setActiveIndex(null);
       
        
    };
  
    const handleSubmit = () => {
      console.log(`Entered OTP: ${otp.join("")}`);
    };
  return (
    <div className="homep">
      <div className="tope flex flex-row items-center justify-start mx-auto max-w-[1200px]">
        <div className="lefte flex flex-row gap-9 items-center">
            <img src="/logo.png" alt="logo" className="w-[144px]" /> <p className="font-promonument text-[46px] font-normal customText">NIKAH.SPACE</p>
        </div>

      </div> 
      <div onClick={()=> window.open('/number', "_current")} className="back max-w-[1200px] mx-auto my-[90px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="57" viewBox="0 0 34 57" fill="none">
  <path d="M13.1704 28.5972L31.8053 9.81473C32.7858 8.82063 33.3361 7.47587 33.3361 6.07417C33.3361 4.67246 32.7858 3.3277 31.8053 2.3336C31.316 1.8363 30.7337 1.44158 30.0923 1.17221C29.4508 0.902842 28.7627 0.76416 28.0678 0.76416C27.3729 0.76416 26.6848 0.902842 26.0434 1.17221C25.4019 1.44158 24.8197 1.8363 24.3303 2.3336L2.01048 24.8301C1.51709 25.3233 1.12547 25.9101 0.858217 26.5567C0.590965 27.2032 0.453369 27.8967 0.453369 28.5972C0.453369 29.2976 0.590965 29.9911 0.858217 30.6376C1.12547 31.2842 1.51709 31.871 2.01048 32.3643L24.3303 55.126C24.8222 55.6178 25.4055 56.0068 26.0469 56.2708C26.6883 56.5349 27.375 56.6687 28.0678 56.6647C28.7606 56.6687 29.4474 56.5349 30.0887 56.2708C30.7301 56.0068 31.3134 55.6178 31.8053 55.126C32.7858 54.1319 33.3361 52.7872 33.3361 51.3854C33.3361 49.9837 32.7858 48.639 31.8053 47.6449L13.1704 28.5972Z" fill="#ACACAC"/>
</svg>
      </div>
   <div className="km">
    <p className="text-[52px] font-normal text-[#5E5E5E] font-mulish max-w-[1200px] mx-auto text-center mb-[80px]">Пожалуйста, введите 4-значный отправлено на +62812 0101 0101</p>
   </div>
      <form className="max-w-[1200px] mx-auto flex flex-col gap-20">
          <Box className="flex justify-center gap-20">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                value={activeIndex === index ? digit : "•"} 
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                maxLength={1}
                textAlign="center"
                className="max-w-[200px] w-full h-[200px] text-[100px] font-mulish font-medium text-[#5E5E5E] border-2 border-[#ACACAC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
              />
            ))}
          </Box>
      </form>
      <div className="eslatma flex flex-col gap-4 mt-20">
        <p className="font-mulish font-normal text-[44px] text-[#5E5E5E] text-center">Никому не сообщай код</p>
        <p className="font-mulish font-normal text-[44px] text-[#5E5E5E] text-center">Истекает через 04:59</p>
      </div>
      <div className="bottomers mt-[160px] mb-10 mx-auto w-full justify-center max-w-[1200px]">
      <Button  onClick={()=> {handleSubmit();window.open('/anketa', "_current")}} colorPalette="teal"
          variant="solid"
          className=" gap-10 shadow-md w-full font-popins font-bold text-white bg-[#634F9E] py-10 h-auto rounded-[19px] px-[100px] text-[53px]">
          Принимаю 
        </Button>
      </div>

      <div className="lase flex flex-col gap-6 mb-10 mt-[100px]">
        <p className="text-[#6A59A7] text-[44px] font-mulish font-normal text-center">
        Условия использования
        </p>
        <p className="text-[#6A59A7] text-[44px] font-mulish font-normal text-center"> 
        Политика конфиденциальности
        </p>
      </div>
   
    </div>
  );
};

export default OtpPage;
