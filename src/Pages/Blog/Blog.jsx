

const Blog = () => {
      return (
            <div className="bg-[#244034]">
                  <div className="max-w-7xl mx-auto">
                        <div className="py-10 space-y-6">
                              <div className="bg-[#FFF] p-4 md:p-6 md:py-10 rounded-2xl">
                                    <p className="text-center text-xl font-medium underline">Q1: What is an access token and refresh token? </p>

                                    <div>
                                          <li style={{ fontFamily: 'Playpen Sans' }} className="text-2xl pt-3  font-bold text-[#244034] dark:text-white">Access token!</li>
                                          <p className="pl-7 pt-2 text-gray-600"> An access token is a credential used to access protected resources. It is usually a random string that represents the authorization granted for a specific client to access specific resources. Access tokens have a limited lifespan and are commonly used for short-term access.</p>
                                    </div>
                                    <div>
                                          <li style={{ fontFamily: 'Playpen Sans' }} className="text-2xl pt-3  font-bold text-[#244034] dark:text-white">Refresh token!</li>
                                          <p className="pl-7 pt-2 text-gray-600">  A refresh token is a special kind of token that is used to obtain a new access token after the previous one has expired. It helps in maintaining continuous access without requiring the user to re-authenticate. Refresh tokens are long-lived compared to access tokens.</p>
                                    </div>

                                    <p className="text-center text-xl pt-5 pb-3 font-medium underline">Q2: How do they work and where should we store them on the client-side?</p>
                                    <p className="pl-7 pt-2 text-gray-600">Access tokens and refresh tokens tokens should be securely stored on the client-side. Access tokens, which grant temporary access to specific resources, are commonly stored in the client's memory during a user session to ensure security. Alternatively, if persistence is necessary, they can be stored in local storage, but this approach requires additional security measures to mitigate potential vulnerabilities. On the other hand, refresh tokens, being long-lived and more sensitive, should be stored in a highly secure location. Storing refresh tokens in HTTP-only cookies, By implementing security best practices such as CSRF protection and HTTPS encryption, developers can ensure the safe storage of these tokens and maintain the integrity of user data on the client-side.</p>
                              </div>
                              <div className="bg-[#FFF] p-6 rounded-2xl">
                                    <p className="text-center text-xl font-medium underline">Q3: What is express js?</p>

                                    <div>
                                          <li style={{ fontFamily: 'Playpen Sans' }} className="text-2xl pt-3  font-bold text-[#244034] dark:text-white">Express JS!</li>
                                          <p className="pl-7 pt-2 text-gray-600"> Express.js is a widely used, flexible, and minimal Node.js web application framework that simplifies the development of server-side web applications and APIs. It provides robust features for handling HTTP requests and responses, defining routes, and managing middleware, allowing developers to create scalable and dynamic web applications efficiently. With its lightweight and unopinionated design, Express.js enables developers to customize their applications based on specific requirements, making it a popular choice for building web servers and APIs..</p>
                                    </div>

                                    <p className="text-center text-xl font-medium underline mt-5">Q4: What is Nest JS ? </p>

                                    <div>
                                          <li style={{ fontFamily: 'Playpen Sans' }} className="text-2xl pt-3  font-bold text-[#244034] dark:text-white">Next JS!</li>
                                          <p className="pl-7 pt-2 text-gray-600">NestJS, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is designed to enhance the development of server-side applications by combining the best features of TypeScript and Node.js. NestJS provides a well-organized structure and powerful abstractions that simplify the creation of complex server-side applications, offering support for various libraries, tools, and design patterns. With its emphasis on modularity and extensibility, NestJS enables developers to create highly maintainable and scalable applications, making it a popular framework for building enterprise-grade server-side applications and microservices.</p>
                                    </div>


                              </div>
                              <div className="bg-[#FFF] p-6 rounded-2xl">
                                    <p className="text-center text-xl font-medium underline">Q5: Explain Your Code</p>

                                    <div>
                                          <li style={{ fontFamily: 'Playpen Sans' }} className="text-2xl pt-3  font-bold text-[#244034] dark:text-white">Code explanation!</li>
                                          <p className="pl-7 pt-2 text-gray-600">I make a DevConnectBD full stack website.Where developer can apply or post jobs.Now i simply give a overview how i code for my website.</p>
                                          <p className="pl-7 pt-2 text-gray-600">Firstly i start with server.In sever side i use a node js application framework named Express JS for dynamically create backend api and use mongodb to store data. In client side i use react ,react router dom.Use Axios for fetching data from mongodb.use Firebase for authentication.ii use a css tailwind css framework ,daisyUi and flowbite fir styling.use sweetalert and hit toast to show notification and many more.If you want to know about my website then explore it.</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Blog;