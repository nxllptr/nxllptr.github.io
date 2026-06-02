function Header({...props}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className="bg-gray-900 text-blue-100 px-8 md:px-12 lg:px-12 py-6 md:py-8 border-b-2 border-blue-300 sticky top-0 z-50" {...props}>
      <h1 className="text-2xl md:text-3xl font-fancy">
        <a href="/" className="text-blue-100 hover:text-blue-300">
          nxllptr
        </a>
      </h1>
    </header>
  );
}

export default Header;