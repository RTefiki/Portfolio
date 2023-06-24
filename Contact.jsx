import React from 'react'


const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen text-black bg-gradient-to-r from-slate-300 to-sky-300'>
        <div className="flex flex-col p-4 justify-center items-center max-w-screen-lg mx-auto h-full">
            <div className="pb-4">
                <h1 className="text-4xl font-bold inline border-b-4 items-center justify-center">
                   Contact 
                </h1>
            </div >
               <div className="w-full max-w-lg">
                   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" >
                              Name
                          </label>
                          <input type="text" placeholder="Enter your Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
                      </div>
                      <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-2" >
                              E-Mail
                          </label>
                          <input type="text" placeholder="Enter your E-Mail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />        
                      </div>
                      <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-2" >
                              Messages
                          </label>
                          <textarea rows={10} type="text" placeholder="Write Message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                      <div>
                          <button type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send</button>

                      </div>
                      
                    </form>
                </div>
              
        </div>
          <div className='p-2'>
              <p className='flex font-italic justify-center items-center'> Rinor Tefiki © 2023</p>
          </div>
        
    </div>
  )
}

export default Contact;
