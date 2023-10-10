import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  position: 'left',
  links: [
    {
      text: 'Project updates',
      href: getBlogPermalink(),
    },
  ],
  actions: [],
};

export const footerData = {};
