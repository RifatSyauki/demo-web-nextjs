import Image from 'next/image';
import './page.css';

export default function Home() {
  return (
    <>
      <div className="top">
        <div className="text-top">
          <h1 className="h1-text-top">Welcome to out page</h1>
          <p className="p-text-top">Isinya cuma buat demo</p>
        </div>
      </div>
      <div className="sl1">
        <div className="sl1-text">
          <h1 className="h1-sl1-text">Bagian 1</h1>
          <p className="p-sl1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="sl2">
        <div className="sl2-text">
          <h1 className="h1-sl1-text">Bagian 2</h1>
          <p className="p-sl1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </>
  );
}
