'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { useState } from 'react';

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState<Date>(new Date(2025, 10, 16));
  const [checkOut, setCheckOut] = useState<Date>(new Date(2025, 10, 17));
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('1');

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm container ml-auto shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40'>
      <div className='container mx-auto pl-4 '>
        <div className='grid grid-cols-1 divide-x divide-foreground/20 md:grid-cols-[1fr_1fr_0.8fr_0.8fr_1.2fr] gap-3 items-end max-w-7xl mx-auto'>
          <div className='py-4'>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Check-In Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className='w-full justify-start text-left font-normal h-full bg-transparent rounded-none border-none hover:bg-transparent'
                >
                  <span className='text-2xl font-serif'>
                    {format(checkIn, 'yyyy-MM-dd')}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={checkIn}
                  onSelect={(date) => date && setCheckIn(date)}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className='py-4'>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Check-Out Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className='w-full justify-start text-left font-normal bg-transparent rounded-none h-full border-none hover:bg-transparent'
                >
                  <span className='text-2xl font-serif'>
                    {format(checkOut, 'yyyy-MM-dd')}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={checkOut}
                  onSelect={(date) => date && setCheckOut(date)}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className='py-4'>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Adults
            </label>
            <Select value={adults} onValueChange={setAdults}>
              <SelectTrigger className='w-full h-full min-h-12 bg-transparent border-none shadow-none'>
                <SelectValue>
                  <span className='text-2xl font-serif'>{adults}</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={String(num)}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='py-4'>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Children
            </label>
            <Select value={children} onValueChange={setChildren}>
              <SelectTrigger className='w-full min-h-12 border-none shadow-none'>
                <SelectValue>
                  <span className='text-2xl font-serif'>{children}</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <SelectItem key={num} value={String(num)}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            size='lg'
            className=' h-full text-base font-medium tracking-wider font-serif rounded-none'
          >
            CHECK AVAILABILITY
          </Button>
        </div>
      </div>
    </div>
  );
}
