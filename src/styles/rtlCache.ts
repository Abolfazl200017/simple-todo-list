import createCache from '@emotion/cache'

const rtlCache = createCache({
  key: 'mui-rtl',
  stylisPlugins: [(stylis) => (stylis === 'ltr' ? undefined : stylis.use(require('stylis-plugin-rtl')()))],
});

export default rtlCache;