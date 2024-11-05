import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Footer } from "../organisms/Footer.stories";
import { Header } from "../organisms/Header.stories";

export default {
  title: "Templates/LandingPage",
  parameters: {
    layout: "fullscreen",
  },
};

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-full ">
      <Header />
      <main className="flex  items-center justify-between w-full p-20 gap-8">
        <div className="w-96 h-96">
          <img src="cover" alt="cover" className="w-full h-full bg-gray-300" />
        </div>
        <div>
          <h1 className="text-h1 font-bold">Lorem, ipsum </h1>
          <p className="text-medium mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
          <Button>Lorem, ipsum</Button>
        </div>
      </main>
      <section>
        <h1 className="text-h1 font-bold text-center">Lorem, ipsum</h1>
        <div className="flex flex-wrap justify-center gap-8 p-8">
          <Card title="Lorem, ipsum" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
          <Card title="Lorem, ipsum" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
          <Card title="Lorem, ipsum" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
        </div>
      </section>
      <section className="max-w-7xl p-20">
        <h1 className="text-h1 font-bold text-center">Lorem, ipsum</h1>
        <div className="flex  justify-center gap-8 p-8">
          <img src="cover" alt="cover" className="w-52 h-52 bg-gray-300" />
          <div>
            <h4 className="text-h4 font-bold">Lorem, ipsum </h4>
            <p className="text-medium mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="flex  justify-center gap-8 p-8">
          <img src="cover" alt="cover" className="w-52 h-52 bg-gray-300" />
          <div>
            <h4 className="text-h4 font-bold">Lorem, ipsum </h4>
            <p className="text-medium mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="flex  justify-center gap-8 p-8">
          <img src="cover" alt="cover" className="w-52 h-52 bg-gray-300" />
          <div>
            <h4 className="text-h4 font-bold">Lorem, ipsum </h4>
            <p className="text-medium mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
