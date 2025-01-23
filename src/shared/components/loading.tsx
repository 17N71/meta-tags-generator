export default function CodeLoading() {
  return (
    <div className="grid min-h-[800px] grid-cols-1 gap-8 p-6 lg:grid-cols-2">
      {/* Left Section */}
      <div className="space-y-6 rounded-xl bg-card p-8">
        <div className="space-y-3">
          <div className="h-10 w-72 animate-pulse rounded-lg bg-muted" />
          <div className="h-6 w-[500px] max-w-full animate-pulse rounded-lg bg-muted" />
        </div>
        <div className="h-[400px] animate-pulse rounded-lg bg-muted" />
        <div className="h-12 w-32 animate-pulse rounded-lg bg-muted" />
      </div>

      {/* Right Section */}
      <div className="space-y-6 rounded-xl bg-card p-8">
        <div className="space-y-3">
          <div className="h-10 w-72 animate-pulse rounded-lg bg-muted" />
          <div className="h-6 w-[400px] max-w-full animate-pulse rounded-lg bg-muted" />
        </div>
        <div className="flex h-[400px] animate-pulse flex-col items-center justify-center rounded-lg bg-muted">
          <div className="h-24 w-24 animate-pulse rounded-lg bg-background" />
          <div className="mt-6 h-6 w-64 animate-pulse rounded-lg bg-background" />
          <div className="mt-3 h-5 w-[500px] max-w-full animate-pulse rounded-lg bg-background" />
          <div className="mt-6 h-10 w-40 animate-pulse rounded-lg bg-background" />
        </div>
      </div>
    </div>
  );
}
