import { Upload, Calendar, Clock, MapPin } from 'lucide-react';

const Design2 = ({ attendeeData }) => {
  return (
    <div id="poster-preview" className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio: '1/1'}}>
      {/* Background image - very faded */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/src/assets/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
      
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(155, 42, 38, 0.05) 50%, transparent 60%),
            radial-gradient(circle at 20% 20%, rgba(155, 42, 38, 0.08) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.06) 1px, transparent 1px),
            linear-gradient(135deg, rgba(155, 42, 38, 0.02) 25%, transparent 25%, transparent 75%, rgba(155, 42, 38, 0.02) 75%)
          `,
          backgroundSize: '60px 60px, 40px 40px, 30px 30px, 80px 80px'
        }}></div>
      </div>
      
      {/* Decorative corner element - bottom left only */}
      <div className="absolute bottom-4 left-4 w-12 h-12 opacity-10">
        <div className="w-full h-full rounded-full" style={{backgroundColor: '#FFD700'}}></div>
      </div>
      
      <div className="relative h-full flex flex-col p-4 sm:p-5">
        {/* Logo and PRESENTS at top */}
        <div className="text-center mb-4 sm:mb-5">
          <img src="/src/assets/logo.png" alt="ELP Tech Hub Logo" className="h-8 sm:h-10 w-auto mx-auto mb-2" />
          <p className="text-gray-700 uppercase tracking-widest text-xs sm:text-sm font-semibold">P R E S E N T S</p>
        </div>

        {/* Main title */}
        <div className="text-center mb-4 sm:mb-5">
          <h1 className="text-3xl sm:text-4xl leading-none mb-1 sm:mb-2" style={{fontFamily: 'Dancing Script, cursive', fontWeight: '600', color: '#9B2A26'}}>I will be</h1>
          <h2 className="text-4xl sm:text-5xl font-black leading-none" style={{color: '#9B2A26'}}>ATTENDING</h2>
        </div>

        {/* Content section */}
        <div className="flex-1 flex items-start gap-4 sm:gap-5 flex-wrap">
          {/* Left side - Photo with maroon background */}
          <div className="flex-shrink-0">
            <div className="w-32 h-40 sm:w-40 sm:h-52 rounded-3xl relative" style={{background: '#9B2A26'}}>
              {/* Photo positioned in the maroon rectangle */}
              <div className="absolute top-4 sm:top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-yellow-500 overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-2xl">
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
          <div className="flex-1 pt-1 min-w-[240px]">
            <div className="mb-3 sm:mb-4">
              <h3 className="text-2xl sm:text-3xl mb-1 leading-none" style={{fontFamily: 'Dancing Script, cursive', fontWeight: '600', color: '#000000'}}>Annual</h3>
              <h4 className="text-2xl sm:text-3xl font-black leading-tight" style={{color: '#9B2A26'}}>NETWORKING<br/>DINNER</h4>
            </div>

            {/* Event details */}
            <div className="space-y-2 mb-3 sm:mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded shadow-md" style={{backgroundColor: '#9B2A26'}}>
                  <Calendar size={14} className="text-white" strokeWidth={2} />
                </div>
                <p className="font-bold text-gray-800 text-sm">Saturday, 29th Nov 2025</p>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded shadow-md" style={{backgroundColor: '#9B2A26'}}>
                  <Clock size={14} className="text-white" strokeWidth={2} />
                </div>
                <p className="font-bold text-gray-800 text-sm">6:00 PM - 9:00 PM</p>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded shadow-md" style={{backgroundColor: '#9B2A26'}}>
                  <MapPin size={14} className="text-white" strokeWidth={2} />
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
