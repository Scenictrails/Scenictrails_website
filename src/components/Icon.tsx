import React from 'react';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';
import {
  SunriseIcon,
  CompassIcon,
  MountainIcon,
  CameraIcon,
  CarFrontIcon,
  ClockIcon,
  LandmarkIcon,
  TriangleIcon,
  DropletsIcon,
  WavesIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
  ArrowRightIcon,
  CheckIcon } from
'lucide-react';

const icons = {
  sunrise: SunriseIcon,
  guide: CompassIcon,
  mountain: MountainIcon,
  camera: CameraIcon,
  car: CarFrontIcon,
  clock: ClockIcon,
  bridge: LandmarkIcon,
  cave: TriangleIcon,
  droplets: DropletsIcon,
  waves: WavesIcon,
  pin: MapPinIcon,
  calendar: CalendarIcon,
  users: UsersIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  arrow: ArrowRightIcon,
  check: CheckIcon
};

export type IconName = keyof typeof icons | 'whatsapp';

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.4 }: IconProps) {
  if (name === 'whatsapp') {
    return <SiWhatsapp className={className} aria-hidden="true" />;
  }

  const Glyph = icons[name];
  return <Glyph className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}