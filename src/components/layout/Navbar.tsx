'use client';

export function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          ManifestTOK
        </div>
        
        <div className="flex gap-8">
          <a href="/explore" className="text-slate-300 hover:text-purple-400 transition">
            Explore
          </a>
          <a href="/create" className="text-slate-300 hover:text-purple-400 transition">
            Create
          </a>
          <a href="/authors" className="text-slate-300 hover:text-purple-400 transition">
            Authors
          </a>
          <a href="/groups" className="text-slate-300 hover:text-purple-400 transition">
            Groups
          </a>
        </div>
      </div>
    </nav>
  );
}
