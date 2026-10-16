import React from 'react';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const sizeMap = {
    xs: { img: 'w-7 h-7', title: 'text-sm', sub: 'text-[9px]' },
    sm: { img: 'w-9 h-9', title: 'text-base', sub: 'text-[10px]' },
    md: { img: 'w-11 h-11', title: 'text-lg', sub: 'text-[11px]' },
    lg: { img: 'w-16 h-16', title: 'text-2xl', sub: 'text-xs' },
    xl: { img: 'w-24 h-24', title: 'text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 select-none transition-transform ${
        onClick ? 'cursor-pointer hover:opacity-90 active:scale-95' : ''
      } ${className}`}
    >
      {/* Official Medallion Logo */}
      <div className={`relative ${currentSize.img} shrink-0 drop-shadow-sm`}>
        <img
          src="/auravital-logo.svg"
          alt="AuraVital • Hormonal Landscape"
          className="w-full h-full object-contain pointer-events-none rounded-full"
        />
      </div>

      {/* Accompanying Editorial Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <span
            className={`font-headline font-bold text-[#1c1c19] tracking-tight ${currentSize.title}`}
          >
            AuraVital
          </span>
          {showSubtitle && (
            <span
              className={`font-body font-semibold text-[#4f6353] tracking-[0.18em] uppercase ${currentSize.sub}`}
            >
              Hormonal Landscape
            </span>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Dedicated Circular Badge variant (self-contained medallion without side text)
 * Ideal for headers, seals, stamps, cards and fixed corners.
 */
export const OfficialLogoBadge: React.FC<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}> = ({ size = 'md', className = '', onClick }) => {
  const pixelMap = {
    xs: 'w-7 h-7',
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div
      onClick={onClick}
      className={`relative ${pixelMap[size]} shrink-0 drop-shadow-md rounded-full overflow-hidden transition-transform duration-200 ${
        onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
      } ${className}`}
      title="AuraVital • Hormonal Landscape"
    >
      <img
        src="/auravital-logo.svg"
        alt="AuraVital Logo"
        className="w-full h-full object-contain select-none"
      />
    </div>
  );
};
