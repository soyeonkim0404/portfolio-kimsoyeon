import React, { useEffect, useRef } from "react";
interface CanvasProps {
  width: number;
  height: number;
}
const DropletEffect = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef?.current;
    const dpr = window.devicePixelRatio;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      const canvasWidth = innerWidth;
      const canvasHeight = innerHeight;

      canvas.style.width = canvasWidth + "px";
      canvas.style.height = canvasHeight + "px";

      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;

      class Particle {
        private x: any;
        private y: any;
        private radius: any;
        private vy: any;
        private acc: any;
        constructor(x: any, y: any, radius: any, vy: any) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.vy = vy;
          this.acc = 1.03;
        }
        update() {
          this.vy *= this.acc;
          this.y += this.vy;
        }
        draw() {
          if (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 360);
            ctx.fillStyle = "orange";
            ctx.fill();
            ctx.scale(dpr, dpr);
          }
        }
      }

      const x = 100;
      const y = 100;
      const radius = 50;
      // @ts-ignore
      const particle = new Particle(x, y, radius);
      const TOTAL = 20;
      const randomNumBetween = (min: any, max: any) => {
        return Math.random() * (max - min + 1) + min;
      };

      let particles: any = [];

      for (let i = 0; i < TOTAL; i++) {
        const x = randomNumBetween(0, canvasWidth);
        const y = randomNumBetween(0, canvasHeight);
        const radius = randomNumBetween(50, 100);
        const vy = randomNumBetween(1, 5);
        const particle = new Particle(x, y, radius, vy);
        particles.push(particle);
      }

      let interval = 1000 / 60;
      let now, delta;
      let then = Date.now();

      // @ts-ignore
      function animate(): void {
        window.requestAnimationFrame(animate);
        now = Date.now();
        delta = now - then;

        if (delta < interval) return;

        ctx!.clearRect(0, 0, canvasWidth, canvasHeight);
        particles.forEach(
          (particle: {
            update: () => void;
            draw: () => void;
            y: number;
            radius: number;
            x: any;
            vy: any;
          }) => {
            particle.update();
            particle.draw();

            if (particle.y - particle.radius > canvasHeight) {
              particle.y = -particle.radius;
              particle.x = randomNumBetween(0, canvasWidth);
              particle.radius = randomNumBetween(50, 100);
              particle.vy = randomNumBetween(1, 5);
            }
          },
        );

        then = now - (delta % interval);
      }

      animate();
    }
  }, []);
  return <canvas ref={canvasRef} width={width} height={height} />;
};

DropletEffect.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight - 100,
};

export default DropletEffect;
