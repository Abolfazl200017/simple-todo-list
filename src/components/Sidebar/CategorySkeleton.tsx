import { Skeleton } from "@mui/material";

function CategorySkeleton() {
  return (
    <div className="w-full mt-3 px-2 py-3">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} variant="rounded" height={40} sx={{ marginBottom: '15px' }} />
      ))}
    </div>
  );
}

export default CategorySkeleton;