import LoginBackground from "../../assets/img1.jpeg";
export const Login = () => {
  return (
    <div
      className={`   px-8 pt-20  relative`}
      style={{
        backgroundImage: `url(${LoginBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 relative z-20">
        <div className=" w- flex flex-col justify-center items-center text-center p-8">
          <div className="mb-4">
            <img
              src="/path-to-logo.png"
              alt="Logo Here"
              className="w-16 mx-auto"
            />
          </div>

          <h1 className="text-3xl font-bold mb-4 text-white">Document Organizing</h1>
     
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className=" w-[450px] rounded-t-3xl pt-7 h-full flex justify-center items-center bg-white">
          <div className="w-3/4">
            <h2 className="text-xl font-bold mb-4">WELCOME BACK</h2>
            <h3 className="text-lg font-semibold mb-6">
              Log In to your Account
            </h3>
            <form className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johnsondoe@mail.com"
                  className="w-full p-3 border rounded-md"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full p-3 border rounded-md"
                />
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex justify-between items-center text-sm">
                <div>
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </div>
                <a href="#" className="text-blue-500">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button className="w-full bg-black text-white py-3 rounded-md">
                Login
              </button>
            </form>

            {/* Alternative Login */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">Or</p>
              <button className="mt-2 w-full flex items-center justify-center py-3 border rounded-md">
                <img
                  src="/path-to-google-icon.png"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Log in with Google
              </button>
              <button className="mt-2 w-full flex items-center justify-center py-3 border rounded-md">
                <img
                  src="/path-to-facebook-icon.png"
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                Log in with Facebook
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center mt-6 text-sm">
              New User?{" "}
              <a href="#" className="text-blue-500">
                SIGN UP HERE
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
