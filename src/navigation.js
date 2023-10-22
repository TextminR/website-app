import { getBlogPermalink } from './utils/permalinks';

export const headerData = {
  position: 'left',
  links: [
    {
      text: 'Project Updates',
      href: getBlogPermalink(),
    },
    {
      text: 'Backend',
      href: 'https://textminr-backend.netlify.app/',
    }
  ],
  actions: [],
};

export const footerData = {};
