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
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}[] = [
  { href: '/', title: 'Home', icon: HomeIcon },
  { href: '/blog', title: 'Blog', icon: RssIcon },
  { href: '/projects', title: 'Projects', icon: Square3Stack3DIcon },
  { href: '/about', title: 'About', icon: IdentificationIcon },
];
