import { InstagramLogo } from "@phosphor-icons/react";
import { Button } from "./components/Button";
import { Link } from "./components/Link";

function App() {
  return (
    <div className="flex flex-col w-full h-dvh">
      <header className="flex w-full  bg-gray-100 ">
        <div className="flex items-center m-auto justify-between w-full max-w-7xl p-4 px-4 gap-6">
          <h1 className="text-xl">Logo</h1>
          <nav>
            <ul className="flex gap-4 items-center">
              <li>
                <Link
                  href="https://caxias.ifma.edu.br/"
                  target="_blank"
                  className="no-underline text-black hover:text-green-500"
                >
                  Institucional
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/ifmacampuscaxias/"
                  target="_blank"
                  className="no-underline text-black hover:text-green-500"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Button variant="outline" size="small">
                  Storybook
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center w-full p-20 gap-8 h-full">
        <div className="flex flex-col items-center ">
          <h1 className="text-dMedium font-bold mb-4">IFMA Design System</h1>
          <p className="text-medium mb-4 max-w-[560px] text-center">
            Promovendo a identidade visual do IFMA com objetivo de melhorar a usabilidade dos sistemas digitais
            desenvolvidos na instituição
          </p>
          <Link href="https://www.instagram.com/ifmacampuscaxias/" target="_blank" className="no-underline">
            <Button>Documentação</Button>
          </Link>
        </div>
      </main>

      <footer className="flex  w-full  bg-gray-100 ">
        <div className="flex flex-col items-center m-auto justify-between w-full max-w-7xl p-4 px-4 gap-4">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl">Logo</h1>
            <div className="flex items-center gap-2">
              <Link href="/storybook" className="no-underline">
                <Button variant="ghost" size="large" noPadding>
                  <InstagramLogo />
                </Button>
              </Link>
            </div>
          </div>
          <hr className="w-full" />
          <p className="text-xSmall text-gray-600">IFMA Caxias 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
