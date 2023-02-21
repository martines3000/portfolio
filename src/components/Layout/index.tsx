import Header from '../Header';
import Menu from '../Menu';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex h-full w-full">
      <Menu />
      <main className="flex-1 overflow-hidden">
        <Header />
        <div
          className={
            'relative flex flex-1 overflow-y-auto overflow-x-hidden bg-white [background-image:radial-gradient(rgb(231_231_231)_10%,_transparent_10.4%)] [background-position:8px_8px] [background-size:16px_16px] dark:bg-black dark:[background-image:radial-gradient(rgb(24_24_24)_10%,_transparent_10.4%)]'
          }
        >
          <div className="mx-auto h-fit w-full max-w-4xl px-6 py-12">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
