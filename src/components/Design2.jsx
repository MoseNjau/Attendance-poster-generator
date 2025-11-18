// components/Design2.jsx — Slightly Reduced Text & Spacing (All Elements)

import { Upload, Calendar, Clock, MapPin } from 'lucide-react';
import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';

const Design2 = ({ attendeeData, eventData }) => {
  return (
    <div id="poster-preview" className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
      {/* Faded background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
      
      <div className="relative h-full flex flex-col p-4 sm:p-5">
        {/* Logo and PRESENTS */}
        <div className="text-center mb-3 sm:mb-4">
          <img src={logo} alt="ELP Tech Hub Logo" className="h-7 sm:h-9 w-auto mx-auto mb-1.5" />
          <p className="text-gray-700 uppercase tracking-widest text-[11px] sm:text-xs font-semibold">P R E S E N T S</p>
        </div>

        {/* Main title */}
        <div className="text-center mb-4">
          <h1 className="text-3xl sm:text-4xl leading-none mb-1.5" style={{ fontFamily: 'Dancing Script, cursive', fontWeight: '600', color: '#9B2A26' }}>I will be</h1>
          <h2 className="text-4xl sm:text-5xl font-black leading-none" style={{ color: '#9B2A26' }}>ATTENDING</h2>
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          {/* Photo with maroon background */}
          <div className="flex-shrink-0">
            <div className="w-36 sm:w-40 h-48 sm:h-52 rounded-3xl relative" style={{ background: '#9B2A26' }}>
              <div className="absolute top-4 sm:top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-full border-3 sm:border-4 border-yellow-500 overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-xl">
                  {attendeeData.photo ? (
                    <img src={attendeeData.photo} alt="Attendee" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-yellow-600">
                      <Upload size={24} className="sm:w-7 sm:h-7" />
                      <p className="text-[10px] sm:text-xs mt-0.5 font-semibold">Upload</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Event & attendee info */}
          <div className="flex-1 pt-0 sm:pt-1">
            <div className="mb-3">
              <h3 className="text-2xl sm:text-3xl mb-1 leading-none" style={{ fontFamily: 'Dancing Script, cursive', fontWeight: '600', color: '#000000' }}>Annual</h3>
              <h4 className="text-2xl sm:text-3xl font-black leading-tight" style={{ color: '#9B2A26' }}>NETWORKING<br />DINNER</h4>
            </div>

            {/* Event details — now using eventData props */}
            <div className="space-y-1.5 mb-3">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 flex items-center justify-center rounded shadow-sm" style={{ backgroundColor: '#9B2A26' }}>
                  <Calendar size={12} className="text-white" />
                </div>
                <p className="font-bold text-gray-800 text-[12px] sm:text-sm">{eventData.date}</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 flex items-center justify-center rounded shadow-sm" style={{ backgroundColor: '#9B2A26' }}>
                  <Clock size={12} className="text-white" />
                </div>
                <p className="font-bold text-gray-800 text-[12px] sm:text-sm">{eventData.time}</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 flex items-center justify-center rounded shadow-sm" style={{ backgroundColor: '#9B2A26' }}>
                  <MapPin size={12} className="text-white" />
                </div>
                <p className="font-bold text-gray-800 text-[12px] sm:text-sm">{eventData.venue}</p>
              </div>
            </div>

            {/* Attendee info pills */}
            <div className="space-y-1.5">
              <div className="rounded-full px-4 py-1.5" style={{ backgroundColor: '#9B2A26' }}>
                <p className="font-bold text-white text-center text-[12px] sm:text-sm">
                  {attendeeData.name || 'Moses Njau'}
                </p>
              </div>
              <div className="rounded-full px-4 py-1.5" style={{ backgroundColor: '#9B2A26' }}>
                <p className="font-semibold text-white text-center text-[11px] sm:text-sm">
                  {attendeeData.title || 'Software Engineer'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design2;