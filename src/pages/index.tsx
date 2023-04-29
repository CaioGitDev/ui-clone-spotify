import { AlbumCardWide } from '@/Components/ui/AlbumCardWide';
import { Footer } from '@/Components/ui/Footer';
import { Sidebar } from '@/Components/ui/Sidebar';
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <AlbumCardWide url='https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86' name='Lofi beats' />
            <AlbumCardWide url='https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86' name='Lofi beats' />
            <AlbumCardWide url='https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86' name='Lofi beats' />
            <AlbumCardWide url='https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86' name='Lofi beats' />
            <AlbumCardWide url='https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86' name='Lofi beats' />
            <AlbumCardWide url='https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86' name='Lofi beats' />
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Caio Roberto Rosa</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image className='w-full' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="Album" width={120} height={120} />
              <strong className='font-semibold'>Peaceful Piano</strong>
              <span className='text-sm text-zinc-400'>keyblack esquece</span>
            </a>

          </div>
        </main>

      </div>
      <Footer />
    </div>
  )
}
