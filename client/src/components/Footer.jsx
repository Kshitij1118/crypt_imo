import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap mt-5 sm:mt-0 w-full">
          <p className="text-white text-base items-center mx-2 cursor-pointer ">
            Market
          </p>
          <p className="text-white text-base items-center mx-2 cursor-pointer ">
            Exchange
          </p>
          <p className="text-white text-base items-center mx-2 cursor-pointer ">
            Tutorials
          </p>
          <p className="text-white text-base items-center mx-2 cursor-pointer ">
            Wallet
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <p className="text-white text-sm items-center">Come Join us</p>
        <p className="text-white text-sm items-center">info@cryptoimo.com</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm items-center">@crypto_imo 2025</p>
        <p className="text-white text-sm items-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
