import Lottie from "lottie-react";
import { useState, useEffect } from "react";

function Loader() {
  const [loaderData, setLoaderData] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/assets/Loader2.json")
      .then((response) => response.json())
      .then((data) => setLoaderData(data))
      .catch((error) => console.error("Error loading Loader2.json:", error));
  }, []); // Empty dependency array means this runs once on mount

  // Render nothing until the data is loaded
  if (!loaderData) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1A1A1A] bg-opacity-80 z-50">
      <Lottie
        animationData={loaderData}
        loop={true}
        className="w-1/2 md:w-1/3 lg:w-1/4"
      />
    </div>
  );
}

export default Loader;