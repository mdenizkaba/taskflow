'use client';
import { usePathname } from 'next/navigation';

export function useNextSegmentAfter(baseSegment: string): string | null {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean); // boşları temizler
  const index = segments.indexOf(baseSegment);

  if (index !== -1 && index + 1 < segments.length) {
    return segments[index + 1];
  }
  return "";
}