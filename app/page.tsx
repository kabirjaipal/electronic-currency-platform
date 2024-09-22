import ContactUs from "@/components/Socials";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AboutUs from "@/components/AboutUs";

// api login => API_XH6UXII05FFTOQL8EH
// api password => VOPSLZI7OOJTMCP7NN

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* About US */}
      <AboutUs />
      {/* Products Page */}
      <div className=" w-full container mx-auto">
        <Products length={5} />
      </div>
      {/* Contact US */}
      <ContactUs />
    </div>
  );
};

export default Home;
