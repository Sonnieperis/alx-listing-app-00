const Header = () => {
  return (
    <header className="w-full bg-blue-700 text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ALX Listing App</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/posts" className="hover:underline">Posts</a>
          <a href="/users" className="hover:underline">Users</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
