import { Bath, Brush, BrushCleaning, Camera, Clock, Dog, Droplets, Ear, Eye, Footprints, Heart, PawPrint, Scissors, Sparkles, Trees, Truck, Users, Utensils, Wind } from "lucide-react";

function BowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M11 12c-2.7-3.4-6.2-4.5-8-2.7-1.3 1.3-.9 3.8.8 5.2 2.1 1.7 5 .4 7.2-2.5Z" />
      <path d="M13 12c2.7-3.4 6.2-4.5 8-2.7 1.3 1.3.9 3.8-.8 5.2-2.1 1.7-5 .4-7.2-2.5Z" />
      <path d="M10.3 10.7h3.4v2.6h-3.4z" />
      <path d="m8.2 14.2-1 5.2 3.2-1.3L12 20.5l1.6-2.4 3.2 1.3-1-5.2" />
    </svg>
  );
}

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PawPrint, Footprints, Dog, Ear, Bath, Droplets, Wind, Brush, BrushCleaning, Scissors, BowIcon,
  Trees, Users, Sparkles, Eye, Heart, Camera, Utensils, Clock, Truck,
};
