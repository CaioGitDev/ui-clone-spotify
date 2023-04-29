import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className='flex items-center gap-3'>
        <Image src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="Album" width={56} height={56} />
        <div className='flex flex-col '>
          <strong className='font-normal'>Andromeda</strong>
          <span className='text-xs text-zinc-400'>Esquece</span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-6'>
          <Shuffle size={20} className='text-zinc-200' />
          <SkipBack size={20} className='text-zinc-200' />
          <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
            <Play />
          </button>
          <SkipForward size={20} className='text-zinc-200' />
          <Repeat size={20} className='text-zinc-200' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:55</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='h-1 rounded-full w-40 bg-zinc-200'></div>
          </div>
          <span className='text-xs text-zinc-400'>3:06</span>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className='flex items-center gap-2'>
          <Volume size={20} />
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
            <div className='h-1 rounded-full w-10 bg-zinc-200'></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}