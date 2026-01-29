'use client';

import { useState } from 'react';

const CreateManifestation = () => {
  const [activeTab, setActiveTab] = useState('character');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Create Manifestation
        </h1>
        <p className="text-slate-400">Bring your literary world to life.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-5 space-y-6 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-md">
          
          {/* Asset Type Toggle */}
          <div className="flex bg-slate-800 p-1 rounded-lg">
            {['character', 'location', 'voice'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 rounded-md capitalize transition-all ${
                  activeTab === tab ? 'bg-purple-600 shadow-lg' : 'hover:bg-slate-700 text-slate-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Book Details */}
          <div>
            <label className="block text-sm font-medium mb-2">Book Title / Author</label>
            <input 
              type="text" 
              placeholder="e.g. The Great Gatsby" 
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Quote/Description Box */}
          <div>
            <label className="block text-sm font-medium mb-2">Describe or Paste a Quote</label>
            <textarea 
              rows={5}
              placeholder="Paste the description from the book here..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Generate Button */}
          <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-purple-900/20">
            Generate {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </button>
        </div>

        {/* Right Column: The Canvas (Preview) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[400px] bg-slate-900/30 border-2 border-dashed border-slate-800 rounded-3xl overflow-hidden relative">
          {/* Placeholder or Result */}
          <div className="text-center p-12">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              ✨
            </div>
            <p className="text-slate-500">Your visual manifestation will appear here...</p>
          </div>
          
          {/* Action Overlay (Hidden until generated) */}
          <div className="absolute bottom-6 flex gap-4">
            <button className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition">
              Share to Group
            </button>
            <button className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition">
              Save to Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateManifestation;