export const DashboardNavbar = () => {
    return (
      <nav className="h-[96px] bg-[#3A8EF6] flex items-center justify-between px-6">
        {/* Greeting Section */}
        <div>
          <h3 className="text-[#FFFFFF] text-[24px] font-bold">Hi, Tynisha!</h3>
          <p className="text-[#FFFFFF] text-[14px] font-normal">Good Morning!</p>
        </div>
  
        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 outline-none bg-transparent text-gray-600"
            />
          </div>
  
          {/* Notification Icon */}
          <div className="relative">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 7.388 8 9v5.159c0 .538-.214 1.055-.595 1.436L6 17h5m4 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <span className="absolute top-2 right-3 bg-red-500 text-white text-xs w-3 h-3 rounded-full flex items-center justify-center">
              1
            </span>
          </div>
  
        
          <div className="w-10 h-10 rounded-full border-2 border-yellow-400 overflow-hidden">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>
    );
  };
  