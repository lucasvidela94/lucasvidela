const Form = () => {
    return (
      <div className="flex content-center justify-center">
        <div className=" w-4/5 text-gray-100 p-8">
          <div className="max-w-screen-xl mt-24 px-8 grid gap-20 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-26 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg justify-between">
            <div className="flex flex-col content-center justify-around">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Wanna contact me?
                </h2>
                <div className="text-gray-700 mt-8">
                  Here's a form in case you wanna chat.
                </div>
              </div>
            </div>
            <div>
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="mt-8">
                <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Form