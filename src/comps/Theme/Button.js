// ? This file contains an example of the structure needed to extend a component styles if you intend on using the feature
// ? Bear in mind this is not mandatory for the exercice but a nice bonus if we see that you understand this logic nicely
// ? Read more: https://chakra-ui.com/docs/theming/component-style

const Button = {
	// The styles all button have in common
	baseStyle: {
		borderRadius: '8px',
		fontWeight: 'medium',
	},

	// The sizes, for example `sm` and `md`
	sizes: {
		lg: {
			px: '4',
			fontSize: '16px',
			height: '44px'
		},
		xl: {
			px: '5',
			fontSize: '16px',
			height: '48px'
		}
	},

	// The variants, for example `outline` and `solid`
	variants: {
		solid: {
			bg: 'primary.600',
			color: 'white',
		},
		light: {
			bg: 'primary.50',
			color: 'gray.500'
		},
		white: {
			bg: 'white',
			color: 'gray.700'
		}
	},

	// The default props when you don’t specify any on the Component
	defaultProps: {
		size: 'lg',
		variant: 'solid'
	},
};

export default Button;
