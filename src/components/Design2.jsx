import { Upload, Calendar, Clock, MapPin } from 'lucide-react';
import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';

const Design2 = ({ attendeeData }) => {
  return (
    <div id="poster-preview" className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio: '1/1'}}>
      {/* Background image - very faded */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
      
      <div className="relative h-full flex flex-col p-5">
        {/* Logo and PRESENTS at top */}
        <div className="text-center mb-4 sm:mb-5">
          <img src={logo} alt="ELP Tech Hub Logo" className="h-8 sm:h-10 w-auto mx-auto mb-2" />
          <p className="text-gray-700 uppercase tracking-widest text-xs sm:text-sm font-semibold">P R E S E N T S</p>
        </div>

        {/* Main title */}
        <div className="text-center mb-5">
          <h1 className="text-4xl leading-none mb-2" style={{fontFamily: 'Dancing Script, cursive', fontWeight: '600', color: '#9B2A26'}}>I will be</h1>
          <h2 className="text-5xl font-black leading-none" style={{color: '#9B2A26'}}>ATTENDING</h2>
        </div>

        {/* Content section */}
        <div className="flex-1 flex items-start gap-5">
          {/* Left side - Photo with maroon background */}
          <div className="flex-shrink-0">
            <div className="w-40 h-52 rounded-3xl relative" style={{background: '#9B2A26'}}>
              {/* Photo positioned in the maroon rectangle */}
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 rounded-full border-4 border-yellow-500 overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-2xl">
                  {attendeeData.photo ? (
                    <img src={attendeeData.photo} alt="Attendee" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-yellow-600">
                      <Upload size={30} />
                      <p className="text-xs mt-1 font-semibold">Upload</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Event details */}
          <div className="flex-1 pt-1">
            <div className="mb-4">
              <h3 className="text-3xl mb-1 leading-none" style={{fontFamily: 'Dancing Script, cursive', fontWeight: '600', color: '#000000'}}>Annual</h3>
              <h4 className="text-3xl font-black leading-tight" style={{color: '#9B2A26'}}>NETWORKING<br/>DINNER</h4>
            </div>

            {/* Event details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center rounded shadow-md" style={{backgroundColor: '#9B2A26'}}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-bold text-gray-800 text-sm">Saturday, 29th Nov 2025</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center rounded shadow-md" style={{backgroundColor: '#9B2A26'}}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-bold text-gray-800 text-sm">6:00 PM - 9:00 PM</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center rounded shadow-md" style={{backgroundColor: '#9B2A26'}}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-bold text-gray-800 text-sm">BRITAM TOWERS, UpperHill</p>
              </div>
            </div>

            {/* Attendee info pills */}
            <div className="space-y-2">
              <div className="rounded-full px-5 py-2" style={{backgroundColor: '#9B2A26'}}>
                <p className="font-bold text-white text-center text-sm">{attendeeData.name || 'Moses Njau'}</p>
              </div>
              <div className="rounded-full px-5 py-2" style={{backgroundColor: '#9B2A26'}}>
                <p className="font-semibold text-white text-center text-sm">{attendeeData.title || 'Software Engineer'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design2;
