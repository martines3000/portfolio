import {
  HomeIcon,
  IdentificationIcon,
  RssIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/solid';

export const headerLinks: {
  href: string;
  title: string;
  icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }
  >;
}[] = [
  { href: '/', title: 'Home', icon: HomeIcon },
  { href: '/blog', title: 'Blog', icon: RssIcon },
  { href: '/projects', title: 'Projects', icon: Square3Stack3DIcon },
  { href: '/about', title: 'About', icon: IdentificationIcon },
];
