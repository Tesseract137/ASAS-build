import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_CHART_DATA } from '../constants';

const LiveMonitor: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2 tech-font uppercase">
                Analytical Engine Output
                </h2>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-cyan-400 text-sm uppercase tracking-widest">
                        Live Data Stream • 20 Million Data Points / 24h
                    </p>
                </div>
            </div>
            <div className="mt-4 md:mt-0">
                 <div className="text-right">
                    <div className="text-4xl font-bold text-white tech-font">20,000,000+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Processed Objects</div>
                 </div>
            </div>
        </div>

        <div className="h-[400px] w-full bg-slate-950/50 border border-slate-800 p-4 rounded-lg relative">
             <div className="absolute top-4 right-4 z-10 flex gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-3 h-3 bg-cyan-500/20 border border-cyan-500 rounded-sm"></div>
                    Data Volume
                </div>
             </div>

            <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={MOCK_CHART_DATA}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                    dataKey="time" 
                    stroke="#475569" 
                    tick={{fill: '#64748b', fontSize: 12, fontFamily: 'monospace'}}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis 
                    stroke="#475569" 
                    tick={{fill: '#64748b', fontSize: 12, fontFamily: 'monospace'}}
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#0e7490', color: '#e2e8f0' }}
                    itemStyle={{ color: '#22d3ee' }}
                />
                <Area 
                    type="monotone" 
                    dataKey="dataPoints" 
                    stroke="#06b6d4" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorData)" 
                    animationDuration={2000}
                />
            </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default LiveMonitor;