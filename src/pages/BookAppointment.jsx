import { useState } from 'react';
import Section from '../components/Section';

export default function BookAppointment() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1); // 1: DateTime, 2: Details, 3: Success

  // Mock available dates/times
  const dates = Array.from({length: 14}, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  }).filter(d => d.getDay() !== 0 && d.getDay() !== 6); // Skip weekends

  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && selectedDate && selectedTime) setStep(2);
    else if (step === 2) setStep(3);
  };

  return (
    <main className="pt-24 min-h-screen flex flex-col">
      <Section className="bg-[#1A1A2E] flex-1 py-12 md:py-24" bgColor="#1A1A2E" animationType="fade-in">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-16">

          {/* Left Column: Context */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-black font-display tracking-tighter uppercase mb-6 leading-none text-[#EAEAEA]">
              Initiate <br/><span className="text-transparent [-webkit-text-stroke:1px_#FF6F61] glow-secondary">Contact</span>
            </h1>
            <p className="text-lg text-gray-400 font-body leading-relaxed mb-8">
              Schedule a 45-minute architectural review with our principal engineers. We will analyze your current stack and map out potential automation vectors.
            </p>
            <div className="space-y-4">
               <div className="flex items-start gap-4 text-gray-300 font-body text-sm">
                 <div className="text-[#00FFE7] text-xl">⚡</div>
                 <div>
                   <h4 className="font-bold text-[#EAEAEA] uppercase tracking-widest mb-1">Architecture Audit</h4>
                   <p className="text-gray-500">Deep dive into your existing infrastructure.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4 text-gray-300 font-body text-sm">
                 <div className="text-[#00FFE7] text-xl">🎯</div>
                 <div>
                   <h4 className="font-bold text-[#EAEAEA] uppercase tracking-widest mb-1">Vector Mapping</h4>
                   <p className="text-gray-500">Identify high-ROI automation opportunities.</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:w-2/3 bg-[#0F0E17] border border-white/10 p-8 md:p-12 relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">

            {/* Progress Bar */}
            <div className="flex gap-2 mb-10">
              <div className={`h-1 flex-1 transition-colors duration-500 ${step >= 1 ? 'bg-[#00FFE7]' : 'bg-white/10'}`}></div>
              <div className={`h-1 flex-1 transition-colors duration-500 ${step >= 2 ? 'bg-[#00FFE7]' : 'bg-white/10'}`}></div>
              <div className={`h-1 flex-1 transition-colors duration-500 ${step >= 3 ? 'bg-[#00FFE7]' : 'bg-white/10'}`}></div>
            </div>

            {/* Step 1: Date & Time Picker */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-black font-display uppercase tracking-tighter text-[#EAEAEA] mb-8">Select Transmission Window</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Date Selection */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Available Dates</h4>
                    <div className="grid grid-cols-3 gap-2 h-64 overflow-y-auto pr-2 custom-scrollbar">
                      {dates.map((d, i) => {
                        const isSelected = selectedDate?.toDateString() === d.toDateString();
                        return (
                          <button
                            key={i}
                            onClick={() => setSelectedDate(d)}
                            className={`p-3 border text-center transition-all duration-300 ${
                              isSelected
                                ? 'border-[#00FFE7] bg-[#00FFE7]/10 text-[#00FFE7]'
                                : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                            }`}
                          >
                            <div className="text-xs font-body">{d.toLocaleString('default', { month: 'short' })}</div>
                            <div className="text-xl font-bold font-display">{d.getDate()}</div>
                            <div className="text-[10px] uppercase tracking-wider">{d.toLocaleString('default', { weekday: 'short' })}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div className={`transition-opacity duration-300 ${selectedDate ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Available Times (EST)</h4>
                    <div className="space-y-3">
                      {times.map((t, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedTime(t)}
                          className={`w-full p-4 border text-center font-display tracking-widest text-sm transition-all duration-300 ${
                            selectedTime === t
                              ? 'border-[#FF6F61] bg-[#FF6F61]/10 text-[#FF6F61]'
                              : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={!selectedDate || !selectedTime}
                    className="px-8 py-4 bg-[#00FFE7] text-[#0F0E17] font-bold uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
                  >
                    Continue &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Details Form */}
            {step === 2 && (
              <form onSubmit={handleNext} className="animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                  <h3 className="text-2xl font-black font-display uppercase tracking-tighter text-[#EAEAEA]">Client Details</h3>
                  <div className="text-sm font-body text-[#00FFE7]">
                    {selectedDate?.toLocaleDateString()} at {selectedTime}
                    <button type="button" onClick={() => setStep(1)} className="ml-4 text-xs text-gray-500 hover:text-white underline">Edit</button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="FIRST NAME" required className="bg-black/30 border border-white/10 p-4 text-[#EAEAEA] font-display uppercase tracking-wider focus:outline-none focus:border-[#00FFE7] transition-colors" />
                    <input type="text" placeholder="LAST NAME" required className="bg-black/30 border border-white/10 p-4 text-[#EAEAEA] font-display uppercase tracking-wider focus:outline-none focus:border-[#00FFE7] transition-colors" />
                  </div>
                  <input type="email" placeholder="WORK EMAIL" required className="w-full bg-black/30 border border-white/10 p-4 text-[#EAEAEA] font-display uppercase tracking-wider focus:outline-none focus:border-[#00FFE7] transition-colors" />
                  <input type="text" placeholder="COMPANY NAME" required className="w-full bg-black/30 border border-white/10 p-4 text-[#EAEAEA] font-display uppercase tracking-wider focus:outline-none focus:border-[#00FFE7] transition-colors" />
                  <textarea placeholder="BRIEF OVERVIEW OF YOUR AUTOMATION GOALS" rows="3" required className="w-full bg-black/30 border border-white/10 p-4 text-[#EAEAEA] font-body focus:outline-none focus:border-[#00FFE7] transition-colors resize-none"></textarea>
                </div>

                <div className="mt-10 flex justify-between items-center">
                  <button type="button" onClick={() => setStep(1)} className="text-gray-500 text-sm font-bold uppercase tracking-widest hover:text-white">
                    &larr; Back
                  </button>
                  <button type="submit" className="px-10 py-4 bg-[#FF6F61] text-[#0F0E17] font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Success State */}
            {step === 3 && (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-full border-4 border-[#00FFE7] flex items-center justify-center mx-auto mb-8 text-[#00FFE7]">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-4xl font-black font-display uppercase tracking-tighter text-[#EAEAEA] mb-4">Transmission Secured</h3>
                <p className="text-gray-400 font-body mb-8 max-w-md mx-auto">
                  Your architectural review is confirmed for <span className="text-[#00FFE7]">{selectedDate?.toLocaleDateString()}</span> at <span className="text-[#00FFE7]">{selectedTime}</span>. A calendar invite has been dispatched to your email.
                </p>
                <button onClick={() => window.location.href='/'} className="px-8 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                  Return to Base
                </button>
              </div>
            )}

          </div>
        </div>
      </Section>
    </main>
  );
}
