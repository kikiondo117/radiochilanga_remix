import {
  isRouteErrorResponse,
  Link,
  Outlet,
  useRouteError,
} from "@remix-run/react";
import { MusicPlayer } from "~/components/organisms/MusicPlayer/MusicPlayer";

export default function MainLayout() {
  return (
    <div className="">
      <header className="flex justify-between items-center max-w-screen-md mx-auto ">
        <Link to="/" className="flex items-center">
          <img className="h-10" src="/imgs/rc/Logo-b.png" alt="" />
        </Link>
        <nav className="my-8">
          <ul className="flex justify-end gap-4">
            <li>
              <Link className="hover:text-yellow-500" to={"/"}>
                Inicio
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-500" to={"/public/about"}>
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-500" to={"/public/blogs"}>
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="h-[calc(100vh-184px)] max-w-screen-md mx-auto">
        <Outlet></Outlet>
      </main>

      <footer>
        <MusicPlayer />
      </footer>
    </div>
  );
}
