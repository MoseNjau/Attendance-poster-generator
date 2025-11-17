import { Upload, Calendar, MapPin, Clock } from 'lucide-react';

const Design3 = ({ attendeeData }) => {
  return (
    <div id="poster-preview" className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio: '1/1', backgroundImage: 'url(/src/assets/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="relative h-full flex flex-col p-4 sm:p-6">
        {/* Top section with logo on left */}
        <div className="flex justify-between items-start mb-6">
          <div className="text-left">
            <img src="/src/assets/logo.png" alt="Logo" className="h-12 w-auto mb-3" />
            <p className="text-gray-800 uppercase tracking-widest text-xs font-semibold">P R E S E N T S</p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-5xl text-black leading-none -mb-2" style={{fontFamily: 'Dancing Script, cursive', fontWeight: '600'}}>Annual</h1>
            <h2 className="text-3xl sm:text-5xl font-black leading-none -mb-1" style={{color: '#9B2A26'}}>Networking</h2>
            <h2 className="text-3xl sm:text-5xl font-black leading-none mb-3 sm:mb-4" style={{color: '#9B2A26'}}>Dinner</h2>
            <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1.5 sm:px-6 sm:py-2 rounded-full shadow-lg">
              <p className="font-bold text-xs sm:text-sm">Innovate. Connect. Grow</p>
            </div>
          </div>

          {/* Photo and attendee info */}
          <div className="flex items-center gap-4 sm:gap-8 flex-wrap">
            <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-yellow-500 overflow-hidden bg-yellow-100 shadow-2xl flex-shrink-0">
              {attendeeData.photo ? (
                <img src={attendeeData.photo} alt="Attendee" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-yellow-600">
                  <Upload size={40} />
                  <p className="text-sm mt-2 font-semibold">Upload</p>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-[220px]">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">I will be attending</h3>
                <h4 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1 sm:mb-2 drop-shadow-lg">{attendeeData.name || 'Your Name Here'}</h4>
                <p className="text-base sm:text-lg text-gray-200 italic drop-shadow-lg">{attendeeData.title || 'Your Title/Position'}</p>
              </div>
            </div>
          </div>

          {/* Event details - compact inline chips */}
          <div className="mt-3 sm:mt-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 shadow border border-white/50 max-w-full">
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] font-semibold flex-wrap" style={{color: '#9B2A26'}}>
                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  <Calendar size={12} strokeWidth={2} />
                  <span>29th Nov 2025</span>
                </span>
                <span className="opacity-40">•</span>
                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  <MapPin size={12} strokeWidth={2} />
                  <span>BRITAM TOWERS, UpperHill</span>
                </span>
                <span className="opacity-40">•</span>
                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  <Clock size={12} strokeWidth={2} />
                  <span>6:00 PM - 9:00 PM</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design3;
