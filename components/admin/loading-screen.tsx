export function AdminLoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050508]">
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wisematic-FN7FRGx6AadRqwCwc6FXXsHM9GVNFO.png"
          alt="Loading"
          className="h-16 w-16 animate-pulse object-contain"
        />
        <p className="text-sm text-zinc-400">Loading admin panel...</p>
      </div>
    </div>
  );
}
