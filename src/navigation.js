import { getBlogPermalink } from './utils/permalinks';

export const headerData = {
  position: 'left',
  links: [
    {
      text: 'Project Updates',
      href: getBlogPermalink(),
    },
  ],
  actions: [],
};

export const footerData = {};
