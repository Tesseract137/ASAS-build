import React, { useEffect, useRef } from 'react';

const AnalyticalFramework: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.offsetWidth || 600;
      canvas.height = canvas.parentElement?.offsetHeight || 500;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Node generation
    const nodes: { x: number; y: number; vx: number; vy: number; highlight: boolean }[] = [];
    const nodeCount = 80;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Increased velocity factor from 0.2 to 1.5 for faster movement
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        highlight: Math.random() > 0.9 // 10% highlighted nodes
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = node.highlight || otherNode.highlight 
                ? `rgba(6, 182, 212, ${1 - dist / 100})` // Cyan connection
                : `rgba(71, 85, 105, ${0.5 - dist / 200})`; // Slate connection
            ctx.lineWidth = node.highlight || otherNode.highlight ? 0.8 : 0.5;
            ctx.stroke();
          }
        });

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.highlight ? 4 : 2, 0, Math.PI * 2);
        ctx.fillStyle = node.highlight ? '#22d3ee' : '#475569';
        
        if(node.highlight) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#22d3ee';
        } else {
            ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="py-24 bg-slate-900 relative border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tech-font">
            The Analytical Framework Pt. 1: <span className="text-cyan-400">Multi-Factor Correlation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-12">
            <div className="flex gap-4 group">
                <div className="mt-2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4] shrink-0 group-hover:scale-150 transition-transform"></div>
                <p className="text-xl text-slate-300 font-light leading-relaxed">
                    The system evaluates <strong className="text-white text-2xl font-bold">497 distinct factors and elements</strong> simultaneously, analyzing the intricate links and connections between them.
                </p>
            </div>

            <div className="flex gap-4 group">
                <div className="mt-2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4] shrink-0 group-hover:scale-150 transition-transform"></div>
                <p className="text-xl text-slate-300 font-light leading-relaxed">
                    A <strong className="text-white text-2xl font-bold">specific weighting</strong> is assigned to each factor to determine its relative importance in any given scenario.
                </p>
            </div>

            <div className="flex gap-4 group">
                <div className="mt-2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4] shrink-0 group-hover:scale-150 transition-transform"></div>
                <p className="text-xl text-slate-300 font-light leading-relaxed">
                    This includes the continuous monitoring of <strong className="text-white text-2xl font-bold">750,000 key social media accounts</strong> to understand influence and narrative.
                </p>
            </div>
          </div>

          {/* Network Visualization */}
          <div className="relative h-[400px] md:h-[500px] w-full bg-slate-950/50 rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 text-xs font-mono text-cyan-500/50 z-10">CORRELATION_MATRIX_ACTIVE</div>
              <canvas ref={canvasRef} className="w-full h-full" />
              {/* Overlay vignette */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.8)_100%)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticalFramework;