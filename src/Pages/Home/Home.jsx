import Banner from "../../Components/Banner/Banner";
import ContactUs from "../../Components/ContactUs/ContactUs";
import JobByCategory from "../../Components/JobByCategory/JobByCategory";
import WhyDevConnect from "../../Components/WhyDevConnect/WhyDevConnect";

const Home = () => {
      return (
            <div>
                  <Banner />

                  {/* job by category */}
                  <div className="bg-[#F5F7FA] ">
                        <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-6xl pt-20 mb-7 font-medium text-center text-[#244034] dark:text-white">Job Listing</h5>
                        <JobByCategory />
                        <ContactUs />
                        <WhyDevConnect />
                  </div>
            </div>
      );
};

export default Home;