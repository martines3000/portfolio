// https://simpleicons.org/
import Github from './Icons/github.svg';
import Twitter from './Icons/twitter.svg';
import LinkedIn from './Icons/linkedin.svg';
import Mail from './Icons/mail.svg';

type ICON_KEYS = 'github' | 'twitter' | 'linkedin' | 'mail';

const Icons: Record<ICON_KEYS, any> = {
  github: Github,
  twitter: Twitter,
  linkedin: LinkedIn,
  mail: Mail,
};

type SocialIconProps = {
  icon: ICON_KEYS;
  href: string;
};

const SocialIcon = ({ icon, href }: SocialIconProps) => {
  const Icon = Icons[icon];

  return (
    <a
      aria-label={`link to ${icon}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={`h-[32px] w-[32px] fill-current`} />
    </a>
  );
};

export default SocialIcon;
