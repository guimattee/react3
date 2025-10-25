
export default function Header({ brand = "<GME>" }) {
  return (
    <header
      role="banner"
      className="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-center">
          <h1 className="text-center text-2xl md:text-3xl font-extrabold tracking-wide text-purple-900 dark:text-purple-300">
            {brand}
          </h1>
        </div>
      </div>
    </header>
  );
}