import { Radio, Ship, Globe, Wifi, Users, Building2 } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'System', href: '#nerve-system' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Risk Monitor', href: '#risk' },
  { label: 'Contact', href: '#contact' },
];

export const NERVE_SYSTEM_DATA = [
  {
    title: 'Infrastructure',
    icon: Radio,
    details: 'Cell Towers, Fibre Networks, Water & Electrical Grids, Load Shedding, Sabotage Risks.',
  },
  {
    title: 'Transport & Logistics',
    icon: Ship,
    details: 'All Transport Nodes, Road Freight Incidents, Marine Traffic, Live Flights.',
  },
  {
    title: 'National Borders & Entry Points',
    icon: Globe,
    details: '54 Border Posts, 8 Commercial Ports, 75 Tollgates.',
  },
  {
    title: 'Digital & Social Media',
    icon: Wifi,
    details: 'Viral Chatter (11,000,000 data points), 590 High-Risk Wi-Fi Spots.',
  },
  {
    title: 'Social & Community Hubs',
    icon: Users,
    details: '8,760 Taxi Ranks, 493,215 Informal Taverns & Shebeens, 1,679 Hotspot Hostels.',
  },
  {
    title: 'Public Services & Areas',
    icon: Building2,
    details: '17,918 Towns, Cities & Rural Areas, 1,300 SAPS Precincts, All Hospitals.',
  },
];

export const MOCK_CHART_DATA = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  threatLevel: Math.floor(Math.random() * 30) + 40,
  dataPoints: Math.floor(Math.random() * 5000) + 10000,
}));