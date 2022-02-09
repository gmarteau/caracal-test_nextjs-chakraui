import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import Button from './Button';

// ? https://chakra-ui.com/docs/theming/theme#typography
const fonts = {
	body: 'Inter'
};

// ? https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = ['576px', '768px', '992px', '1200px', '1440px'];
breakpoints.base = '0px';
breakpoints.sm = '576px';
breakpoints.md = '768px';
breakpoints.lg = '992px';
breakpoints.xl = '1200px';
breakpoints.xxl = '1440px';

// ? https://chakra-ui.com/docs/theming/theme#colors
const colors = {
	primary: {
		50: '#EDEEFC',
		100: '#D3D4F8',
		200: '#BDBFF5',
		500: '#4F55E3',
		600: '#232ADC',
		700: '#1D24B9',
		800: '#191E9A',
		900: '#12156E'
	},
	gray: {
		50: '#F9FAFB',
		100: '#F2F4F7',
		200: '#E4E7EC',
		300: '#D0D5DD',
		400: '#98A2B3',
		500: '#667085',
		600: '#475467',
		700: '#344054',
		800: '#1D2939',
		900: '#101828'
	},
	warning: {
		300: '#FEC84B'
	}
};

// ? https://chakra-ui.com/docs/theming/theme#spacing
const space = {};

// ? https://chakra-ui.com/docs/features/color-mode
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	fonts,
	breakpoints,
	colors,
	space,
	config,
	styles: {
		global: (props) => ({
			body: {
				fontFamily: 'body',
				color: mode('gray.500', 'whiteAlpha.900')(props),
				bg: mode('white', 'gray.800')(props),
				lineHeight: 'base',
				overflowX: 'hidden'
			},
		}),
	},
	components: {
		Button,
	},
});

export default theme;

// ? https://chakra-ui.com/docs/theming/customize-theme
