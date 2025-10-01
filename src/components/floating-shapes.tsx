export function FloatingShapes() {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="floating-shape animate-float-1"
          style={{
            width: '400px',
            height: '400px',
            top: '10%',
            left: '15%',
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.5), transparent 70%)',
          }} 
        />
        <div 
          className="floating-shape animate-float-2"
          style={{
            width: '500px',
            height: '500px',
            top: '50%',
            left: '30%',
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.4), transparent 70%)',
          }} 
        />
        <div 
          className="floating-shape animate-float-3"
          style={{
            width: '350px',
            height: '350px',
            top: '25%',
            left: '70%',
            background: 'radial-gradient(circle, hsl(var(--secondary) / 0.6), transparent 70%)',
          }} 
        />
         <div 
          className="floating-shape animate-float-1"
          style={{
            width: '300px',
            height: '300px',
            bottom: '5%',
            right: '10%',
            animationDuration: '35s',
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)',
          }} 
        />
      </div>
    );
  }
  