import { useEffect, useState } from "react";
function ProgressBar() {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-[90px] left-0 h-[calc(100vh-90px)] w-1 bg-gray-700 z-40">
      <div
        className="bg-green-500 transition-all duration-200"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar
