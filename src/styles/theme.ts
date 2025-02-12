import { createTheme, ThemeOptions } from '@mui/material';

// layout spacing
export const SPACING = 4;
export const SPACING_ELEMENT = SPACING * 2;
export const SPACING_BLOCK = SPACING * 3;
export const SPACING_COMPONENT = SPACING * 6;
export const SPACING_LAYOUT = SPACING * 12;
export const ROW_CELL_HEIGHT = SPACING * 20;
export const LEFT_NAV_WIDTH = SPACING * 24;
export const TOP_NAV_HEIGHT = SPACING * 17;
export const INPUT_HEIGHT = SPACING * 11;

// theme
export const COLOR_PRIMARY = '#4D08A8';
export const COLOR_SECONDARY = '#2A7D2A';
export const COLOR_ORANGE = '#ED9C37';
export const COLOR_TEAL = '#21E6BB';
export const COLOR_BLUE = '#4C7FFF';
export const COLOR_RED = '#BD2030';
export const COLOR_RED_LIGHT = '#F7E4E6';
export const COLOR_GREY = '#525965';
export const COLOR_GREY_LIGHT = '#f5f5f5';
export const COLOR_BLACK = '#32373F';
export const COLOR_WHITE = '#ffffff';
export const COLOR_BACKGROUND = '#f5f5f5';
export const COLOR_PAPER_1 = '#F5F0FA';
export const COLOR_PAPER_2 = '#FEEEEE';
export const COLOR_SUCCESS_LIGHT = '#e3f7e4';
export const COLOR_SUCCESS_DARK = '#517c4c';
export const COLOR_FAIL_LIGHT = '#fae4ec';
export const COLOR_FAIL_DARK = '#c73779';
export const FONT_PRIMARY = 'Helvetica';
export const FONT =
	'Helvetica, -apple-system, BlinkMacSystemFont, Arial, Helvetica, sans-serif';
export const FONT_SIZE_BODY = 14;

export const BORDER_SIZE = 1;
export const FORM_BORDER_COLOR = COLOR_GREY_LIGHT;

export const BREAKPOINTS = {
	xs: 728,
	sm: 1024,
	md: 1200,
	lg: 1600,
	xl: 2000,
};

// Notifications
export const NOTIFICATION_TIMEOUT_VISIBILITY = 6000;

const theme: ThemeOptions = createTheme({
	breakpoints: {
		values: BREAKPOINTS,
	},
	palette: {
		primary: {
			main: COLOR_PRIMARY,
			contrastText: '#ffffff',
		},
		secondary: {
			main: COLOR_SECONDARY,
			contrastText: '#ffffff',
		},
		error: {
			main: COLOR_RED,
			light: COLOR_RED_LIGHT,
			contrastText: '#ffffff',
		},
		warning: {
			main: COLOR_ORANGE,
			contrastText: '#ffffff',
		},
		info: {
			main: '#4C7FFF',
			contrastText: '#ffffff',
		},
	},
	spacing: SPACING,
	typography: {
		fontFamily: [
			FONT_PRIMARY,
			'-apple-system',
			'BlinkMacSystemFont',
			'Arial',
			'Helvetica',
			'sans-serif',
		].join(','),
		body1: {
			fontSize: FONT_SIZE_BODY,
			color: COLOR_GREY,
		},
		button: {
			fontSize: FONT_SIZE_BODY,
		},
		h1: {
			fontSize: SPACING_LAYOUT,
			margin: `0 auto ${SPACING_COMPONENT}px auto`,
			textAlign: 'left',
			color: COLOR_BLACK,
		},
		h2: {
			fontSize: SPACING_COMPONENT,
			fontWeight: 'bold',
			margin: `0 auto ${SPACING_COMPONENT}px auto`,
			textAlign: 'left',
			color: COLOR_BLACK,
		},
		h3: {
			fontSize: 16,
			fontWeight: 'bold',
			margin: `0 auto ${SPACING_BLOCK}px auto`,
			color: COLOR_BLACK,
		},
		subtitle1: {
			fontSize: 16,
			COLOR_GREY,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@for $i from 1 to 9 {
					.loader:nth-of-type(#{$i}) * { 
						animation:  1s $i * 0.13s opacityLoader infinite, 1s $i * 0.13s scaleLoader infinite,
					}
				}
				@keyframes opacityLoader { to { opacity: 0; } }@keyframes scaleLoader { from { transform: scale(0); } to { transform: scale(1.2); } }

				* {
					padding: 0;
					margin: 0;
					border: 0;
					outline: 0;
				}

				body {
					background-color: ${COLOR_BACKGROUND};
					margin: 0;
					padding: 0;
					border: 0;
					outline: 0;
				}

				a, a:visited, a:link {
					color: ${COLOR_PRIMARY};
				}

				a:focus, a:hover {
					color: ${COLOR_GREY} !important;
				}

				.success {
					height: 24px;
					line-height: 24px;
					font-weight: bold;
					color: green;
					margin-right: ${SPACING}px;
				}

				.failure {
					height: 24px;
					line-height: 24px;
					font-weight: bold;
					color: red;
					margin-right: ${SPACING}px;
				}

				.Mui-focused .MuiOutlinedInput-notchedOutline {
					border-width: ${BORDER_SIZE}px !important;
				}

				.MuiTabPanel-root {
					padding: ${SPACING_COMPONENT}px;
				}

				.highcharts-title {
					font-family: Helvetica;
					font-size: ${SPACING_COMPONENT}px !important;
					fill: ${COLOR_PRIMARY} !important;
				}
			`,
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: '0 0 0',
					height: `${TOP_NAV_HEIGHT}px`,
					borderTop: `${SPACING}px solid ${COLOR_PRIMARY}`,
				},
			},
		},
		MuiAlert: {
			styleOverrides: {
				root: {
					height: `${SPACING_LAYOUT}px`,
					marginBottom: `${SPACING_COMPONENT}px`,
				},
			},
		},
		MuiButtonBase: {
			styleOverrides: {
				root: {
					border: `0px none transparent`,
					height: `auto`,
					lineHeight: 1,
					margin: 0,
					minHeight: 'auto',
					padding: `0 ${SPACING_COMPONENT}px`,
					textTransform: 'uppercase',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: `${SPACING}px`,
					boxShadow: '0 0 0 transparent',
					height: `${INPUT_HEIGHT}px`,
					minHeight: `${INPUT_HEIGHT}px`,
					padding: `0 ${SPACING_COMPONENT}px`,

					'& .MuiAvatar-root': {
						marginRight: `${SPACING}px`,
					},

					'&.DropDown': {
						borderBottom: `${BORDER_SIZE}px solid ${COLOR_GREY_LIGHT}`,
						borderLeft: `${BORDER_SIZE}px solid ${COLOR_GREY_LIGHT}`,
						borderRight: `${BORDER_SIZE}px solid ${COLOR_GREY_LIGHT}`,
						borderTop: `${BORDER_SIZE}px solid ${COLOR_GREY_LIGHT}`,
						backgroundColor: COLOR_WHITE,
						color: COLOR_BLACK,
						textTransform: 'none',

						'&[aria-expanded=true]': {
							borderBottom: `${BORDER_SIZE}px solid transparent`,
						},
					},
				},
				contained: {
					backgroundColor: COLOR_PRIMARY,
					color: COLOR_WHITE,
				},
				containedPrimary: {
					backgroundColor: COLOR_PRIMARY,
					color: COLOR_WHITE,
				},
				containedSecondary: {
					backgroundColor: COLOR_SECONDARY,
					color: COLOR_WHITE,
				},
				containedError: {
					backgroundColor: COLOR_RED,
					color: COLOR_WHITE,
				},
				containedWarning: {
					backgroundColor: COLOR_ORANGE,
					color: COLOR_WHITE,
				},
				containedInfo: {
					backgroundColor: COLOR_BLUE,
					color: COLOR_WHITE,
				},
				outlined: {
					backgroundColor: COLOR_GREY_LIGHT,
					borderColor: COLOR_PRIMARY,
					color: COLOR_PRIMARY,
				},
				outlinedPrimary: {
					backgroundColor: COLOR_GREY_LIGHT,
					borderColor: COLOR_PRIMARY,
					color: COLOR_PRIMARY,
				},
				outlinedSecondary: {
					backgroundColor: COLOR_GREY_LIGHT,
					borderColor: COLOR_SECONDARY,
					color: COLOR_SECONDARY,
				},
				outlinedError: {
					backgroundColor: COLOR_GREY_LIGHT,
					borderColor: COLOR_RED,
					color: COLOR_RED,
				},
				outlinedWarning: {
					backgroundColor: COLOR_GREY_LIGHT,
					borderColor: COLOR_ORANGE,
					color: COLOR_ORANGE,
				},
				outlinedSuccess: {
					backgroundColor: COLOR_GREY_LIGHT,
					borderColor: COLOR_RED,
					color: COLOR_RED,
				},
				outlinedInfo: {
					backgroundColor: COLOR_GREY_LIGHT,
					borderColor: COLOR_BLUE,
					color: COLOR_BLUE,
				},
				text: {
					backgroundColor: COLOR_GREY_LIGHT,
					color: COLOR_PRIMARY,
				},
				textPrimary: {
					backgroundColor: COLOR_GREY_LIGHT,
					color: COLOR_PRIMARY,
				},
				textSecondary: {
					backgroundColor: COLOR_GREY_LIGHT,
					color: COLOR_SECONDARY,
				},
				textError: {
					backgroundColor: COLOR_GREY_LIGHT,
					color: COLOR_RED,
				},
				textWarning: {
					backgroundColor: COLOR_GREY_LIGHT,
					color: COLOR_ORANGE,
				},
				textInfo: {
					backgroundColor: COLOR_GREY_LIGHT,
					color: COLOR_BLUE,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					padding: `${SPACING_COMPONENT}px ${SPACING_COMPONENT}px 0 ${SPACING_COMPONENT}px`,
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: `${SPACING}px`,
					marginRight: `${SPACING_BLOCK}px`,
				},
			},
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
					background: COLOR_WHITE,
					border: '0 none transparent',
				},
			},
		},
		MuiFormControl: {
			styleOverrides: {
				root: {
					margin: `${SPACING_COMPONENT}px auto`,

					'&.DatePicker': {
						'& .MuiInputAdornment-root': {
							borderLeft: `${BORDER_SIZE}px solid ${FORM_BORDER_COLOR}`,
							height: `${SPACING_COMPONENT}px`,

							'& .MuiIconButton-edgeEnd': {
								color: COLOR_PRIMARY,
							},
						},
					},
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					marginLeft: 0,
				},
			},
		},
		MuiGrid: {
			styleOverrides: {
				root: {
					marginTop: '0',
					paddingTop: '0',

					'&>.MuiGrid-item': {},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					height: `${SPACING * 11 - 2}px`,
					marginBottom: `${SPACING}px`,
					backgroundColor: COLOR_WHITE,
					borderRadius: `${SPACING}px`,

					'&::before': {
						borderBottom: '0 none transparent !important',
					},
				},
			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					margin: 0,
					padding: 0,
					borderBottom: `${BORDER_SIZE}px solid ${COLOR_GREY_LIGHT}`,
					borderLeft: `${BORDER_SIZE}px solid ${COLOR_GREY_LIGHT}`,
					borderRight: `${BORDER_SIZE}px solid ${COLOR_GREY_LIGHT}`,
				},
			},
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					lineHeight: `${SPACING * 20}px`,
					height: `${SPACING * 20}px`,
				},
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					height: '100%',
					margin: 0,
					borderRadius: 0,
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				root: {
					color: COLOR_BLACK,
				},
				primary: {
					fontSize: '0.7rem',
					fontWeight: 'bold',
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					fontSize: '0.9rem',
					textTransform: 'none',
					margin: '0',
					padding: `${SPACING_BLOCK}px`,
					borderRadius: '0',

					'& .MuiSvgIcon-root': {
						marginRight: `${SPACING_ELEMENT}px`,
					},
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					minWidth: `${SPACING * 55}px`,
				},
			},
		},
		MuiModal: {
			styleOverrides: {
				root: {
					'& .MuiBox-root': {
						border: `${BORDER_SIZE}px solid ${COLOR_PRIMARY}`,
						padding: `${SPACING_COMPONENT}px ${SPACING_COMPONENT}px 0 ${SPACING_COMPONENT}px`,
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					lineHeight: 1,
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					border: `${BORDER_SIZE}px solid ${FORM_BORDER_COLOR}`,
				},
				root: {
					border: '0px none transparent !important',
					// '& $notchedOutline': {
					// 	borderColor: FORM_BORDER_COLOR,
					// },
					// '&:hover $notchedOutline': {
					// 	borderColor: COLOR_PRIMARY,
					// },
					// '&$focused $notchedOutline': {
					// 	borderColor: COLOR_PRIMARY,
					// },
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					boxShadow: '0 0 0 transparent',
					marginBottom: `${SPACING_COMPONENT}px`,

					'&.MuiCard-root': {
						padding: `${SPACING_COMPONENT}px`,
					},
				},
			},
		},
		MuiPopover: {
			styleOverrides: {
				paper: {},
			},
		},
		MuiSelect: {
			styleOverrides: {
				outlined: {
					fontSize: '0.9rem',
				},
				root: {
					height: `${INPUT_HEIGHT}px`,
					lineHeight: `${INPUT_HEIGHT}px`,
				},
				select: {
					color: COLOR_BLACK,
					minWidth: '80px',
					height: `${INPUT_HEIGHT}px`,
					lineHeight: `${INPUT_HEIGHT}px`,

					'& .MuiSvgIcon-root': {
						marginRight: `${SPACING_ELEMENT}px`,
						position: 'relative',
						top: `${SPACING_ELEMENT}px`,
					},
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					borderRadius: `${SPACING}px`,
					height: 'auto',
					fontWeight: 'bold',
					fontSize: '0.8rem',
					letterSpacing: '1px',
					marginBottom: 0,
					marginLeft: `0`,
					marginRight: `${SPACING_ELEMENT}px`,
					marginTop: 0,
					minHeight: 'auto',
					minWidth: 'auto',
					padding: `${SPACING * 4}px`,
					textTransform: 'none',

					'&.Mui-selected': {
						backgroundColor: COLOR_PRIMARY,
						color: COLOR_WHITE,
					},
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottomColor: COLOR_GREY_LIGHT,
				},
				head: {
					fontWeight: 'bold',
					color: COLOR_BLACK,
				},
			},
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					'&.MuiTableRow-hover:hover': {
						backgroundColor: COLOR_GREY_LIGHT,
					},
				},
			},
		},
		MuiTablePagination: {
			styleOverrides: {
				root: {
					'&:last-child': {
						paddingTop: `${SPACING_COMPONENT}px`,
					},
					'& .MuiIconButton-root:not(.Mui-disabled)': {
						color: COLOR_PRIMARY,
					},
				},
				selectLabel: {
					fontSize: FONT_SIZE_BODY,
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				indicator: {
					display: 'none',
				},
				root: {
					marginBottom: `${SPACING_COMPONENT}px`,
				},
				scroller: {
					margin: `0 0 ${SPACING_COMPONENT}px 0`,
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					marginTop: `${SPACING_ELEMENT}px`,
					'& .MuiOutlinedInput-root': {
						'& fieldset': {},
						'&:hover fieldset': {
							borderColor: COLOR_PRIMARY,
						},
						'&.Mui-focused fieldset': {
							borderColor: COLOR_PRIMARY,
							borderWidth: '2px',
						},
					},
				},
			},
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					backgroundColor: COLOR_GREY_LIGHT,
					marginTop: `${SPACING_ELEMENT}px`,

					'&.Mui-selected': {
						backgroundColor: COLOR_PRIMARY,
						color: COLOR_WHITE,
					},

					'&:hover': {
						backgroundColor: COLOR_PRIMARY,
						color: COLOR_WHITE,
					},
				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				root: {},
			},
		},
	},
});

export default theme;
