export default function Navbar() {
  return (
    <>
      <form className="px-8">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-pink-100"
            placeholder="Search venues..."
            required
          />
          <button
            type="submit"
            class="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm 
            absolute bottom-2 right-2 px-5 py-2 m-0 bg-pink-500 transition ease-in hover:bg-pink-700 rounded-full text-slate-100"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
