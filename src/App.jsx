// App.jsx
import React, { useState } from 'react';
import { Upload, Download } from 'lucide-react';
import Design1 from './components/Design1';
import Design2 from './components/Design2';
import Design3 from './components/Design3';

export default function AttendingPosterGenerator() {
  const [attendeeData, setAttendeeData] = useState({
    name: 'Your Name Here',
    title: 'Your Title/Position',
    photo: null
  });

  // ✅ Event data is now centrally defined (and can be changed or loaded externally)
  const [eventData] = useState({
    date: '29th Nov 2025',
    venue: 'BRITAM TOWERS, UpperHill',
    time: '6:00 PM - 9:00 PM'
  });

  const [selectedDesign, setSelectedDesign] = useState(1);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAttendeeData({ ...attendeeData, photo: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadPoster = async () => {
    const posterElement = document.getElementById('poster-preview');
    if (!posterElement) {
      alert('Poster not found. Please try again.');
      return;
    }

    try {
      const htmlToImage = await import('https://cdn.skypack.dev/html-to-image@1.11.11');
      
      const toDataURL = (url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/png'));
          };
          img.onerror = () => resolve(url);
          img.src = url;
        });
      };

      const originalStyles = [];
      const images = [];
      const nodes = posterElement.querySelectorAll('*');
      
      nodes.forEach((node) => {
        const computedStyle = window.getComputedStyle(node);
        
        originalStyles.push({
          node,
          backgroundImage: node.style.backgroundImage,
          background: node.style.background,
          filter: node.style.filter,
          webkitFilter: node.style.webkitFilter,
          backdropFilter: node.style.backdropFilter,
          webkitBackdropFilter: node.style.webkitBackdropFilter
        });
        
        if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
          const match = computedStyle.backgroundImage.match(/url\(["']?(.*?)["']?\)/);
          if (match && match[1]) {
            const imgUrl = match[1].replace(/["']/g, '');
            if (!imgUrl.startsWith('data:')) {
              images.push({ node, imgUrl, isBackground: true });
            }
          }
        }
        
        if (node.tagName === 'IMG' && node.src && !node.src.startsWith('data:')) {
          images.push({ node, imgUrl: node.src, isBackground: false });
        }
      });
      
      await Promise.all(images.map(async ({ node, imgUrl, isBackground }) => {
        try {
          const dataUrl = await toDataURL(imgUrl);
          if (isBackground) {
            const currentBg = node.style.backgroundImage;
            node.style.backgroundImage = currentBg.replace(/url\([^)]+\)/, `url(${dataUrl})`);
          } else {
            node.src = dataUrl;
          }
        } catch (e) {
          console.warn('Failed to process image:', imgUrl, e);
        }
      }));
      
      await new Promise(resolve => setTimeout(resolve, 500));

      const dataUrl = await htmlToImage.toPng(posterElement, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: 'white',
        style: {
          transform: 'none',
          opacity: 1,
        },
        filter: (node) => {
          if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') {
            return false;
          }
          return true;
        },
      });

      // Restore original styles
      originalStyles.forEach(({ node, ...styles }) => {
        Object.entries(styles).forEach(([key, value]) => {
          node.style[key] = value || '';
        });
      });
      
      images.forEach(({ node, imgUrl, isBackground }) => {
        if (isBackground) {
          const currentBg = node.style.backgroundImage;
          node.style.backgroundImage = currentBg.replace(/url\([^)]+\)/, `url(${imgUrl})`);
        } else {
          node.src = imgUrl;
        }
      });

      const link = document.createElement('a');
      link.download = `attending-poster-${attendeeData.name.replace(/\s+/g, '-').toLowerCase()}-design${selectedDesign}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to generate poster. Please try again or take a screenshot instead.');
    }
  };

  return (
    <div className="min-h-screen p-3 sm:p-4" style={{background: 'linear-gradient(to bottom right, #1f2937, #9B2A26, #1f2937)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">I Will Be Attending</h1>
          <p className="text-base sm:text-lg text-orange-300">Poster Generator</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
          {/* Editor Panel */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Your Details</h2>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-white text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold">Upload Your Photo</label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-white/10 text-white text-sm sm:text-base border-2 border-orange-500/50 hover:border-orange-500 transition file:mr-3 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-full file:border-0 file:bg-orange-500 file:text-white file:text-xs sm:file:text-sm file:cursor-pointer"
                  />
                </div>
                <p className="text-orange-200 text-xs sm:text-sm mt-1.5 sm:mt-2">Upload a clear, professional photo</p>
              </div>

              <div>
                <label className="block text-white text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold">Your Full Name</label>
                <input
                  type="text"
                  value={attendeeData.name}
                  onChange={(e) => setAttendeeData({ ...attendeeData, name: e.target.value })}
                  className="w-full p-2.5 sm:p-3 rounded-lg bg-white/10 text-white text-sm sm:text-base border-2 border-orange-500/50 focus:border-orange-500 outline-none transition"
                  placeholder="e.g., Eminent Augusta Ihezuo"
                />
              </div>

              <div>
                <label className="block text-white text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold">Your Title/Position</label>
                <input
                  type="text"
                  value={attendeeData.title}
                  onChange={(e) => setAttendeeData({ ...attendeeData, title: e.target.value })}
                  className="w-full p-2.5 sm:p-3 rounded-lg bg-white/10 text-white text-sm sm:text-base border-2 border-orange-500/50 focus:border-orange-500 outline-none transition"
                  placeholder="e.g., Managing Director, Tech Solutions Ltd"
                />
              </div>

              <div>
                <label className="block text-white text-sm sm:text-base mb-1.5 sm:mb-2 font-semibold">Select Design Style</label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    onClick={() => setSelectedDesign(1)}
                    className={`p-2.5 sm:p-4 rounded-lg font-bold text-xs sm:text-base transition transform hover:scale-105 ${
                      selectedDesign === 1
                        ? 'text-white shadow-2xl'
                        : 'bg-white/10 text-white border-2 border-white/20 hover:border-orange-500'
                    }`}
                    style={selectedDesign === 1 ? {background: 'linear-gradient(to bottom right, #f97316, #9B2A26)'} : {}}
                  >
                    Design 1<br/>
                    <span className="text-[10px] sm:text-sm font-normal">Binary Pattern</span>
                  </button>
                  <button
                    onClick={() => setSelectedDesign(2)}
                    className={`p-2.5 sm:p-4 rounded-lg font-bold text-xs sm:text-base transition transform hover:scale-105 ${
                      selectedDesign === 2
                        ? 'text-white shadow-2xl'
                        : 'bg-white/10 text-white border-2 border-white/20 hover:border-orange-500'
                    }`}
                    style={selectedDesign === 2 ? {background: 'linear-gradient(to bottom right, #f97316, #9B2A26)'} : {}}
                  >
                    Design 2<br/>
                    <span className="text-[10px] sm:text-sm font-normal">Professional</span>
                  </button>
                  <button
                    onClick={() => setSelectedDesign(3)}
                    className={`p-2.5 sm:p-4 rounded-lg font-bold text-xs sm:text-base transition transform hover:scale-105 ${
                      selectedDesign === 3
                        ? 'text-white shadow-2xl'
                        : 'bg-white/10 text-white border-2 border-white/20 hover:border-orange-500'
                    }`}
                    style={selectedDesign === 3 ? {background: 'linear-gradient(to bottom right, #f97316, #9B2A26)'} : {}}>
                    Design 3<br/>
                    <span className="text-[10px] sm:text-sm font-normal">Elegant</span>
                  </button>
                </div>
              </div>

              <button
                onClick={downloadPoster}
                className="w-full text-white py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-2xl transition transform hover:scale-105"
                style={{background: 'linear-gradient(to right, #f97316, #9B2A26, #f97316)'}}
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download Your Poster
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Live Preview</h2>
            
            {selectedDesign === 1 && <Design1 attendeeData={attendeeData} eventData={eventData} />}
            {selectedDesign === 2 && <Design2 attendeeData={attendeeData} eventData={eventData} />}
            {selectedDesign === 3 && <Design3 attendeeData={attendeeData} eventData={eventData} />}

            <div className="mt-4 sm:mt-6 bg-orange-500/10 border border-orange-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <p className="text-orange-200 text-xs sm:text-sm text-center font-semibold">
                💡 Click the "Download Your Poster" button to save your poster as a high-quality PNG image
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-4 sm:mt-6 bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">📋 Quick Guide</h3>
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 text-white">
            <div>
              <h4 className="font-bold text-orange-400 mb-1.5 sm:mb-2 text-xs sm:text-sm">How to Create:</h4>
              <ol className="space-y-0.5 sm:space-y-1 list-decimal list-inside text-[11px] sm:text-xs">
                <li>Upload a clear, professional headshot photo</li>
                <li>Enter your full name</li>
                <li>Add your job title or position</li>
                <li>Choose your preferred design style</li>
                <li>Click "Download Your Poster" to save the image</li>
              </ol>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-1.5 sm:mb-2 text-xs sm:text-sm">Tips for Best Results:</h4>
              <ul className="space-y-0.5 sm:space-y-1 list-disc list-inside text-[11px] sm:text-xs">
                <li>Use a high-quality photo with good lighting</li>
                <li>Plain or professional background works best</li>
                <li>Face should be clearly visible</li>
                <li>Keep title concise but descriptive</li>
                <li>Share on social media to announce attendance!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}