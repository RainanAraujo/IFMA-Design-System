import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

export default {
  title: "Organisms/Header",
  parameters: {
    layout: "fullscreen",
  },
};

export const Header = () => {
  return (
    <header className="flex w-full  bg-gray-100 ">
      <div className="flex items-center m-auto justify-between w-full max-w-7xl p-4 px-4 gap-6">
        <h1 className="text-xl">Logo</h1>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Link href="" className="no-underline text-black hover:text-green-500">
                Link
              </Link>
            </li>
            <li>
              <Link href="" className="no-underline text-black hover:text-green-500">
                Link
              </Link>
            </li>
            <li>
              <Link href="" className="no-underline text-black hover:text-green-500">
                Link
              </Link>
            </li>
            <li>
              <Link href="" className="no-underline text-black hover:text-green-500">
                Link
              </Link>
            </li>
            <li>
              <Button variant="outline" size="small">
                Sign Up
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
