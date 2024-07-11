
import { RiHomeOfficeFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { BsAirplane, BsFillPersonFill } from "react-icons/bs";
import { MdContentPasteSearch } from "react-icons/md";

const WhyDevConnect = () => {
      return (
            <div className="pb-20">
                  <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-4xl md:text-6xl mb-10 font-medium text-center text-[#244034] dark:text-white">Why DevConnect.BD??</h5>
                  <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-[#FFF] p-6 border-2 hover:border-[#D2F34C]">
                              <div className="flex items-center gap-4 mb-4 text">
                                    <RiHomeOfficeFill className="text-4xl text-[#D2F34C]"></RiHomeOfficeFill>
                                    <p className="text-2xl font-medium">Search Millions of Jobs</p>
                              </div>
                              <p className="text-[#AAB1B7]">Job search engines and online job portals offer a comprehensive range of job listings, from entry-level positions to executive roles</p>
                        </div>

                        <div className="bg-[#FFF] p-6 border-2 hover:border-[#D2F34C]">
                              <div className="flex items-center gap-4 mb-4 text">
                                    <ImLocation2 className="text-4xl text-[#D2F34C]"></ImLocation2>
                                    <p className="text-2xl font-medium">Location Search</p>
                              </div>
                              <p className="text-[#AAB1B7]">Job search engines and online job portals offer a comprehensive range of job listings, from entry-level positions to executive roles</p>
                        </div>

                        <div className="bg-[#FFF] p-6 border-2 hover:border-[#D2F34C]">
                              <div className="flex items-center gap-4 mb-4 text">
                                    <BsAirplane className="text-4xl text-[#D2F34C]"></BsAirplane>
                                    <p className="text-2xl font-medium">Top Careers</p>
                              </div>
                              <p className="text-[#AAB1B7]">Job search engines and online job portals offer a comprehensive range of job listings, from entry-level positions to executive roles</p>
                        </div>
                        <div className="bg-[#FFF] p-6 border-2 hover:border-[#D2F34C]">
                              <div className="flex items-center gap-4 mb-4 text">
                                    <BsFillPersonFill className="text-4xl text-[#D2F34C]"></BsFillPersonFill>
                                    <p className="text-2xl font-medium">Search Expert Candidates</p>
                              </div>
                              <p className="text-[#AAB1B7]">Job search engines and online job portals offer a comprehensive range of job listings, from entry-level positions to executive roles</p>
                        </div>
                        <div className="bg-[#FFF] p-6 border-2 hover:border-[#D2F34C]">
                              <div className="flex items-center gap-4 mb-4 text">
                                    <MdContentPasteSearch className="text-4xl text-[#D2F34C]"></MdContentPasteSearch>
                                    <p className="text-2xl font-medium">Easy To Manage Jobs</p>
                              </div>
                              <p className="text-[#AAB1B7]">Job search engines and online job portals offer a comprehensive range of job listings, from entry-level positions to executive roles</p>
                        </div>
                        <div className="bg-[#FFF] p-6 border-2 hover:border-[#D2F34C]">
                              <div className="flex items-center gap-4 mb-4 text">
                                    <BsFillPersonFill className="text-4xl text-[#D2F34C]"></BsFillPersonFill>
                                    <p className="text-2xl font-medium">Online Reviews</p>
                              </div>
                              <p className="text-[#AAB1B7]">Job search engines and online job portals offer a comprehensive range of job listings, from entry-level positions to executive roles</p>
                        </div>


                  </div>
            </div>
      );
};

export default WhyDevConnect;