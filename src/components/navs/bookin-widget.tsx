'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState<Date>(new Date(2025, 10, 16))
  const [checkOut, setCheckOut] = useState<Date>(new Date(2025, 10, 17))
  const [adults, setAdults] = useState('2')
  const [children, setChildren] = useState('1')

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_0.8fr_0.8fr_1.2fr] gap-3 items-end max-w-7xl mx-auto">
          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Check-In Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-12 border-gray-300 hover:bg-gray-50"
                >
                  <span className="text-2xl font-serif">
                    {format(checkIn, 'yyyy-MM-dd')}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={(date) => date && setCheckIn(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Check-Out Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-12 border-gray-300 hover:bg-gray-50"
                >
                  <span className="text-2xl font-serif">
                    {format(checkOut, 'yyyy-MM-dd')}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={(date) => date && setCheckOut(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Adults */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Adults
            </label>
            <Select value={adults} onValueChange={setAdults}>
              <SelectTrigger className="w-full h-12 border-gray-300">
                <SelectValue>
                  <span className="text-2xl font-serif">{adults}</span>
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

          {/* Children */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Children
            </label>
            <Select value={children} onValueChange={setChildren}>
              <SelectTrigger className="w-full h-12 border-gray-300">
                <SelectValue>
                  <span className="text-2xl font-serif">{children}</span>
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

          {/* Check Availability Button */}
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-white h-12 text-base font-medium tracking-wider"
          >
            CHECK AVAILABILITY
          </Button>
        </div>
      </div>
    </div>
  )
}
