export default function UserSearchSkeleton() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto px-4 animate-pulse">
      
      {/* Search Bar Skeleton */}
      <div className="h-12 bg-input-bg/50 rounded-xl w-full shadow-md"></div>
      
      {/* User Card Skeleton */}
      <div className="bg-container-bg/60 rounded-xl p-6 shadow-lg space-y-4">
        <div className="w-24 h-24 rounded-full bg-input-bg/40 mx-auto" />
        
        <div className="h-6 bg-input-bg/40 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-input-bg/30 rounded w-2/3 mx-auto" />
        <div className="h-4 bg-input-bg/30 rounded w-1/2 mx-auto" />
        <div className="h-4 bg-input-bg/30 rounded w-3/5 mx-auto" />
      </div>

    </div>
  );
}
