// app/dashboard/loading.tsx  or  components/skeleton/ProductFormSkeleton.tsx

import { Skeleton } from "@/components/ui/skeleton";

export default function ProductFormLoading() {
  return (
    <div className="mx-auto max-w-xl w-full">
      {/* Header Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-7 w-36 mb-2" />
        <Skeleton className="h-4 w-64" />
      </div>

      {/* Card Skeleton */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-5">

          {/* Product Name */}
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-[100px] w-full rounded-lg" />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>

          {/* Divider */}
          <div className="border-t border-border my-1" />

          {/* Buttons */}
          <div className="flex gap-3">
            <Skeleton className="h-10 flex-1 rounded-lg" />
            <Skeleton className="h-10 flex-1 rounded-lg" />
          </div>

        </div>
      </div>
    </div>
  );
}