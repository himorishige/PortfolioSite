import 'destyle.css';
import 'src/styles/global.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    // storySort: {
    //   order: ['components', ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages']],
    // },
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
