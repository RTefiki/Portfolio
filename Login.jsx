import React from 'react';



const Login = ({setLogin}) => {   
  
    
    return (
        <div className="bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://png.pngtree.com/back_origin_pic/04/48/50/84cd2a9fbc6cbd5522b2f048a56703a8.jpg')" }}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-500 dark:border-gray-700">
                   <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold justify-center flex leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Sign in to your account
                      </h1>
                         <form className="space-y-4 md:space-y-6" action="#">
                             <div>
                                 <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                 <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                             <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                
                                 <button onClick={() => setLogin(false)} type="submit" className="w-1/2 text-white font-md bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-5 pt-2 px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                             </div>
                             <div className="flex items-center justify-between">
                                 <div className="flex items-start">
                                     <div className="flex items-center h-5">
                                         <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                         <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                 </div>
                                <div className="font-medium text-blue-600 hover:underline dark:text-primary-500">Forgot password?</div>
                            </div>
                              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                 Don’t have an account yet? <a href="/home" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Sign up</a>
                             </p>
                        </form>
                    </div>
                </div>
            </div>
 
        </div>
    )
 }


export default Login;