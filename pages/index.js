export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-green-700">My Plants</h1>
        <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600">
          + Add Plant
        </button>
      </header>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="w-full h-32 bg-gray-200 rounded-md mb-4"></div>
          <h2 className="text-xl font-semibold text-green-800">Plant 1</h2>
          <p className="text-gray-600">Species: Fern</p>
          <p className="text-gray-600">Water: Every 3 days</p>
        </div>

        {/* Another Placeholder Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="w-full h-32 bg-gray-200 rounded-md mb-4"></div>
          <h2 className="text-xl font-semibold text-green-800">Plant 2</h2>
          <p className="text-gray-600">Species: Cactus</p>
          <p className="text-gray-600">Water: Every 7 days</p>
        </div>
      </div>
    </div>
  );
}
