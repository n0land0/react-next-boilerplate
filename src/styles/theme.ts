import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {},
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: 'wide',
        fontWeight: '',
      },
    },
  },
});

export default theme;
