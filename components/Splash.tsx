import React from "react";
import { Button } from "./ui/button";

type SplashProps = {
  handleReady: () => void;
};

export const Splash: React.FC<SplashProps> = ({ handleReady }) => {
  return (
    <main
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/tudds-ccd0wn.appspot.com/o/www.reallygreatsite.com_20250209_100550_0002.gif?alt=media&token=90f655ff-2176-403e-9326-cb4f346fefb1')",
      }}
    >
      <Button
        onClick={handleReady}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[50px]"
      >
        Start Now
      </Button>
    </main>
  );
};

export default Splash;