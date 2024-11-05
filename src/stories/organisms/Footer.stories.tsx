import { InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Button } from "../../components/Button";

export default {
  title: "Organisms/Footer",
  parameters: {
    layout: "fullscreen",
  },
};

export const Footer = () => {
  return (
    <footer className="flex  w-full  bg-gray-100 ">
      <div className="flex flex-col items-center m-auto justify-between w-full max-w-7xl p-4 px-4 gap-4">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-xl">Logo</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="large" noPadding>
              <InstagramLogo />
            </Button>
            <Button variant="ghost" size="large" noPadding>
              <YoutubeLogo />
            </Button>
          </div>
        </div>
        <hr className="w-full" />

        <p className="text-xSmall text-gray-600">© 2021 Company Name</p>
      </div>
    </footer>
  );
};
