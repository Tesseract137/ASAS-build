import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, FastForward, Rewind, Mic, Upload, AlertTriangle } from 'lucide-react';

const PodcastPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [audioSrc, setAudioSrc] = useState('/briefing.mp3');
  const [isError, setIsError] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Toggle Play/Pause
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => {
        console.error("Playback failed", e);
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Handle Time Update
  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (progressBarRef.current) {
        progressBarRef.current.value = audioRef.current.currentTime.toString();
        progressBarRef.current.style.setProperty(
            '--range-progress', 
            `${(audioRef.current.currentTime / duration) * 100}%`
        );
      }
    }
  };

  // Handle Metadata Loaded
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsError(false); // Clear error if metadata loads successfully
      if (progressBarRef.current) {
        progressBarRef.current.max = audioRef.current.duration.toString();
      }
    }
  };

  // Handle Audio Error
  const handleError = () => {
    setIsError(true);
    setIsPlaying(false);
  };

  // Handle Progress Bar Change
  const changeRange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Skip Forward/Backward
  const skip = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  // Format Time
  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  // Volume Control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Handle File Upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
        const url = URL.createObjectURL(file);
        setAudioSrc(url);
        // Reset state
        setIsError(false);
        setIsPlaying(false);
        setCurrentTime(0);
        // Optional: Auto play
        setTimeout(() => {
            if(audioRef.current) {
                audioRef.current.play().catch(e => console.log("Auto-play prevented", e));
                setIsPlaying(true);
            }
        }, 100);
    }
  };

  return (
    <section id="briefing" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Info Side */}
            <div className="lg:w-1/3">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-cyan-950/30 border border-cyan-500/30">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-cyan-400 text-xs uppercase tracking-widest font-bold">Audio</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tech-font uppercase">
                    Intelligence <br/> <span className="text-cyan-400">Briefing</span>
                </h2>
                <h3 className="text-xl md:text-2xl text-slate-300 tech-font uppercase mb-4">
                    Understanding ASAS
                </h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8">
                    Executive Summary
                </p>
                
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                        <div className="flex items-center gap-2">
                            <Mic className="w-4 h-4" />
                            <span>SOURCE: ANALYST_ALPHA</span>
                        </div>
                        <span>|</span>
                        <span>ENCRYPTION: AES-256</span>
                    </div>

                    {/* File Upload Trigger */}
                    <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept="audio/*"
                        className="hidden"
                    />
                    <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="group flex items-center gap-3 text-xs font-mono text-cyan-500 hover:text-cyan-300 transition-colors w-fit border border-cyan-900/50 bg-cyan-950/20 px-4 py-2 rounded uppercase tracking-wider"
                    >
                        <Upload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                        Upload Audio Source
                    </button>
                </div>
            </div>

            {/* Right Player Side */}
            <div className="lg:w-2/3 w-full">
                <div className="bg-slate-900/50 border border-cyan-900/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative group overflow-hidden">
                    {/* Error Overlay */}
                    {isError && (
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md text-center p-6 transition-all duration-300">
                            <div className="bg-red-500/10 p-4 rounded-full mb-4 border border-red-500/20">
                                <AlertTriangle className="w-8 h-8 text-red-500" />
                            </div>
                            <h4 className="text-white font-bold uppercase tracking-wider mb-2 text-lg tech-font">Source Not Found</h4>
                            <p className="text-slate-400 text-sm mb-6 max-w-xs font-light">
                                The default briefing file was not detected. Please upload a local audio file to initialize the player.
                            </p>
                            <button 
                                onClick={() => fileInputRef.current?.click()}
                                className="px-6 py-3 bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-900/50 transition-colors rounded uppercase text-xs font-bold tracking-widest flex items-center gap-2"
                            >
                                <Upload className="w-4 h-4" />
                                Select Manual Source
                            </button>
                        </div>
                    )}

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
                        <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
                        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-cyan-500/20"></div>
                    </div>

                    {/* Audio Element */}
                    <audio 
                        ref={audioRef} 
                        src={audioSrc} 
                        preload="metadata"
                        onTimeUpdate={onTimeUpdate}
                        onLoadedMetadata={onLoadedMetadata}
                        onEnded={() => setIsPlaying(false)}
                        onError={handleError}
                    />

                    <div className={`flex flex-col gap-6 transition-opacity duration-300 ${isError ? 'opacity-20 blur-sm pointer-events-none' : 'opacity-100'}`}>
                        {/* Waveform Visualization (Simulated CSS Animation) */}
                        <div className="h-16 flex items-center justify-center gap-1 opacity-80">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div 
                                    key={i}
                                    className={`w-1 md:w-1.5 bg-cyan-500/50 rounded-full transition-all duration-75 ease-in-out ${isPlaying ? 'animate-pulse' : ''}`}
                                    style={{
                                        height: isPlaying 
                                            ? `${Math.max(20, Math.random() * 100)}%` 
                                            : `${20 + Math.sin(i * 0.5) * 10}%`,
                                        animationDelay: `${i * 0.05}s`
                                    }}
                                />
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="relative group/range">
                            <input 
                                type="range" 
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:shadow-[0_0_10px_#22d3ee] hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                                ref={progressBarRef}
                                defaultValue="0"
                                onChange={changeRange}
                            />
                        </div>

                        {/* Controls Row */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            
                            {/* Time Display */}
                            <div className="font-mono text-cyan-400 text-sm w-24">
                                {calculateTime(currentTime)} <span className="text-slate-600">/</span> {duration && !isNaN(duration) ? calculateTime(duration) : "00:00"}
                            </div>

                            {/* Main Buttons */}
                            <div className="flex items-center gap-6">
                                <button onClick={() => skip(-10)} className="text-slate-400 hover:text-white transition-colors">
                                    <Rewind className="w-6 h-6" />
                                </button>
                                
                                <button 
                                    onClick={togglePlay}
                                    className="w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
                                >
                                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                                </button>

                                <button onClick={() => skip(10)} className="text-slate-400 hover:text-white transition-colors">
                                    <FastForward className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Volume */}
                            <div className="flex items-center gap-2 w-24 sm:w-32">
                                <button onClick={() => setIsMuted(!isMuted)} className="text-slate-400 hover:text-cyan-400">
                                    {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                                <input 
                                    type="range" 
                                    min="0" max="1" step="0.05"
                                    value={isMuted ? 0 : volume}
                                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastPlayer;