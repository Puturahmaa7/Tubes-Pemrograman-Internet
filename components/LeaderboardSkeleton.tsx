export function LeaderboardSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-4 bg-gray-100 rounded-xl animate-pulse"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <div className="w-32 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-24 h-3 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
