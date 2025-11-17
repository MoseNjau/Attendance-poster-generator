import { Upload, Calendar, MapPin, Clock } from 'lucide-react';
import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';

const Design1 = ({ attendeeData }) => {
  return (
    <div id="poster-preview" className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio: '1/1'}}>
      {/* Background image with fade */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url(${bg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Gradient overlay for fade effect towards right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/20"></div>
      
      {/* Binary pattern background */}
      <div className="absolute inset-0 opacity-5 text-xs leading-tight p-2 overflow-hidden text-gray-400 font-mono">
        {Array(100).fill('10110010 01101001 10010110 11001010 ').join('')}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-4 sm:p-8">
        {/* Top sponsor bar with logo */}
        <div className="bg-white border-2 border-gray-300 rounded-lg p-2 sm:p-3 mb-4 flex items-center justify-center gap-2 sm:gap-3">
          <img src={logo} alt="Logo" className="h-8 sm:h-12 w-auto" />
        </div>

        {/* Top right badge - moved to avoid overlap */}
        <div className="absolute top-2 right-2 text-white px-3 py-1 rounded-lg shadow-lg transform rotate-2" style={{background: 'linear-gradient(to bottom right, #9B2A26, #7a1f1c)'}}>
          <div className="font-black text-xs leading-tight">Explosive Event!</div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex items-center">
          <div className="flex items-center gap-4 sm:gap-6 w-full flex-wrap">
            {/* Photo with decorative elements */}
            <div className="relative flex-shrink-0">
              {/* Red bow decoration */}
              <div className="absolute -top-6 -left-6 w-20 h-20 z-10">
                <div className="w-12 h-12 transform rotate-45 absolute top-4 left-4" style={{background: 'linear-gradient(to bottom right, #9B2A26, #7a1f1c)'}}></div>
                <div className="w-12 h-12 transform -rotate-45 absolute top-4 left-4" style={{background: 'linear-gradient(to bottom right, #c53030, #9B2A26)'}}></div>
              </div>
              
              {/* Photo circle */}
              <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-yellow-500 overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-xl relative z-0">
                {attendeeData.photo ? (
                  <img src={attendeeData.photo} alt="Attendee" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-yellow-600">
                    <Upload size={32} />
                    <p className="text-xs mt-1">Upload Photo</p>
                  </div>
                )}
              </div>

              {/* Decorative swirl */}
              <svg className="absolute -bottom-2 -right-4 w-16 h-16 text-yellow-500" viewBox="0 0 100 100" fill="none">
                <path d="M10,50 Q30,10 50,30 T90,50" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-[220px]">
              <h1 className="text-2xl sm:text-3xl font-bold leading-none mb-1" style={{color: '#c53030'}}>I will be</h1>
              <h2 className="text-3xl sm:text-4xl font-black leading-none mb-2" style={{color: '#9B2A26'}}>attending</h2>
              <p className="text-base sm:text-lg font-bold text-gray-800 mb-3">Annual Networking Dinner</p>
            </div>
          </div>
        </div>

        {/* Attendee info section */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-3 mb-3 shadow-lg border-l-4" style={{borderLeftColor: '#9B2A26'}}>
          <p className="text-lg font-black text-gray-900 mb-1">{attendeeData.name}</p>
          <p className="text-sm font-semibold text-gray-700">{attendeeData.title}</p>
        </div>

        {/* Event details */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-white p-2 rounded-lg shadow border-l-4" style={{borderLeftColor: '#9B2A26'}}>
            <div className="mb-1" style={{color: '#9B2A26'}}>
              <Calendar size={16} strokeWidth={2} />
            </div>
            <p className="font-bold text-gray-900 text-xs">Saturday, 29th</p>
            <p className="font-black text-sm" style={{color: '#9B2A26'}}>Nov 2025</p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow border-l-4" style={{borderLeftColor: '#9B2A26'}}>
            <div className="mb-1" style={{color: '#9B2A26'}}>
              <MapPin size={16} strokeWidth={2} />
            </div>
            <p className="font-bold text-gray-900 text-xs">BRITAM TOWERS</p>
            <p className="text-gray-700 text-xs">UpperHill</p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow border-l-4" style={{borderLeftColor: '#9B2A26'}}>
            <div className="mb-1" style={{color: '#9B2A26'}}>
              <Clock size={16} strokeWidth={2} />
            </div>
            <p className="font-black text-xs" style={{color: '#9B2A26'}}>6:00 PM - 9:00 PM</p>
            <p className="text-gray-700 text-xs">EAT</p>
          </div>
        </div>

        {/* Hashtags section */}
        <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-center py-2 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-900 flex-wrap">
            <span>#NetworkingDinner</span>
            <span>#ELPTechHub</span>
            <span>#Innovation</span>
            <span>#Connect</span>
            <span>#Grow</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design1;
