import { getOrigin } from './getOrigin';

const ogImage = ({ url, title }: { url?: string; title?: string }) => {
  if (url?.startsWith('https:')) {
    return url;
  }

  if (url?.startsWith('local:')) {
    return `${getOrigin()}/images/${url.replace('local:', '')}`;
  }

  const ogUrl = `${getOrigin()}/api/og`;

  if (title) return `${ogUrl}?title=${encodeURIComponent(title)}`;
  return `${ogUrl}`;
};

export default ogImage;
