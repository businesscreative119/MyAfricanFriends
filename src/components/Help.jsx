import React from 'react'
const Help = () => {
  return (
    <>
     <div className="min-h-screen bg-zinc-900 p-8">
  <div className="max-w-4xl mx-auto text-zinc-200 shadow-md rounded-lg p-6">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-centertext-white">Help & Support</h1>
    
    {/* Getting Started */}
    <div className="mb-8 flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img src="https://cdn0.iconfinder.com/data/icons/female-styles/500/woman-heart-bg-512.png" alt="Getting Started" className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-4 w-[40%]" />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
        <p className=" text-gray-400">
          Welcome to our dating website! To get started, create an account by clicking the "Join Now" button on the top left corner of the homepage.
          Fill in your details and you'll be ready to start meeting new people!
        </p>
      </div>
    </div>

    {/* Creating Your Profile */}
    <div className="mb-8 flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img src="https://cdn0.iconfinder.com/data/icons/human-resources-management-6/64/human_resources__business_and_finance__human_resources__teamwork__job__business__people__arro-512.png" alt="Creating Your Profile" className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-4 w-[40%]" />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">Creating Your Profile</h2>
        <p className="text-gray-400">
          Make sure to complete your profile with accurate information and a clear profile picture. This will help you get better matches and more responses.
        </p>
      </div>
    </div>

    {/* Finding Matches */}
    <div className="mb-8 flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img src="https://cdn2.iconfinder.com/data/icons/casino-126/512/31_Search_See_Finding_Entertainment_View_Eye_Find_Tools-512.png" alt="Finding Matches" className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-4 w-[40%]" />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">Finding Matches</h2>
        <p className="text-gray-400">
          Use the search feature to find potential matches. You can filter by age, location, interests, and more. Send a message to start a conversation with someone you like.
        </p>
      </div>
    </div>

    {/* Safety Tips */}
    <div className="mb-8 flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img src="https://cdn4.iconfinder.com/data/icons/essentials-72/24/027_-_Shield-512.png" alt="Safety Tips" className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-4 w-[40%]" />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">Safety Tips</h2>
        <p className="text-gray-400">
          Your safety is our priority. Never share personal information like your home address or financial details with anyone you meet online. Always meet in public places for your first few dates.
        </p>
      </div>
    </div>

    {/* Contact Support */}
    <div className="mb-8 flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img src="https://cdn3.iconfinder.com/data/icons/support-53/120/Customer_Support_Chat_2-512.png" alt="Contact Support" className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-4 w-[40%]" />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
        <p className="text-gray-400">
          If you have any questions or need further assistance, please reach out to our support team via the "Contact Us" page. We're here to help!
        </p>
      </div>
    </div>
    
  </div>
</div>

    <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-4">Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src="./src/images/help.png" alt="Image description" className="rounded-lg shadow-lg mb-4 w-16 bg-transparent" />
                </div>
                <div>
                    <form className="space-y-4">
                        <div>
                            <input type="text" id="name" name="name" placeholder='Name' className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none p-3" />
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder='Email' className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none p-2" />
                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder='Massage' rows="4" className="mt-1 block w-full  border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none p-3"></textarea>
                        </div>
                        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-zinc-900 hover:bg-[#bb63ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </>
  )
}

export default Help
