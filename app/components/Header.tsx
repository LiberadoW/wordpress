const Header = () => {
  return (
    <div className="sticky flex h-20  w-full items-center ">
      <div className="container flex items-center px-4 text-white">
        <div className="text-2xl font-bold text-white">Restauracja</div>
        <nav className="ml-auto">
          <ul className="flex gap-6 ">
            <li className="hover:text-sky-500">O nas</li>
            <li>Pub</li>
            <li>Restauracja</li>
            <li>Menu</li>
            <li>Kontakt</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
