import CTA from "./component/CTA";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Searchbar from "./component/Searchbar";

export default function Home() {
  return (
    <>
    <div className=" container">

  
    <div className="relative mb-8">

    <Navbar />
    <div className="absolute z-[9999] min-w-[60vw] bottom-[0px] translate-y-1/2 left-[50%] -translate-x-[50%]" >
    <Searchbar />

    </div>
    </div>
    <Hero />
    <CTA /> 
    <Footer />
      </div>
    </>
  );
}
