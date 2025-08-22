export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-700 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
