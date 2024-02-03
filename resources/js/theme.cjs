/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');

const themeColors = [
    'primary',
    'secondary',
    'neutral',
    'success',
    'warning',
    'error'
];

const theme = plugin.withOptions(function (options = {}) {
    return function({ theme, addBase, addComponents }) {

        addBase({
            ':root': {
                // component outline neutral
                '--background': theme('colors.white'),
                '--background-hover': theme('colors.neutral.light'),
                '--foreground': theme('colors.neutral.darkest'),
                '--border': theme('colors.neutral.DEFAULT'),
                '--border-focus': theme('colors.neutral.dark'),
                '--rounded': theme('borderRadius.md'),

                // outline on focus
                '--outline': 'theme(colors.primary.DEFAULT / 30%)',
                '--outline-offset': theme('outlineOffset')[0],
                '--outline-width': '.2rem',

                // button
                '--btn-rounded': 'var(--rounded)',

                // slider
                '--thumb-border': theme('colors.primary.dark'),

                // floating
                '--floating-border': 'var(--border)',

                // input
                '--input-placeholder': theme('colors.neutral.DEFAULT'),
                '--input-border-focus': theme('colors.primary.DEFAULT'),

                // checkbox
                '--checkbox-foreground': theme('colors.primary.DEFAULT'),

                // radio
                '--radio-foreground': theme('colors.primary.DEFAULT'),

                // size-md
                '--padding': `${theme('spacing')[1.5]} ${theme('spacing')[3]}`,
                '--font-size': '.875rem',
                '--leading': '1.25rem',
            },
            // error state
            '.component-outline-error': {
                '--input-placeholder': theme('colors.error.DEFAULT'),
                '--input-border-focus': theme('colors.error.DEFAULT'),
                '--outline': 'theme(colors.error.DEFAULT / 30%)',
            }
        })

        themeColors.forEach((color) => {
            addComponents({
                [`.component-fill-${color}`] : {
                    '--background': theme(`colors.${color}.dark`),
                    '--background-hover': theme(`colors.${color}.DEFAULT`),
                    '--foreground': theme('colors.white'),
                    '--border': 'transparent',
                    '--border-focus': 'transparent',

                    '--thumb-border': theme(`colors.${color}.dark`),

                    '--floating-border': theme(`colors.${color}.DEFAULT`)
                },
                [`.component-outline-${color}`] : {
                    '--background': theme('colors.white'),
                    '--background-hover': theme(`colors.${color}.lightest`),
                    '--foreground': theme(`colors.${color}.darkest`),
                    '--border': theme(`colors.${color}.light`),
                    '--border-focus': theme(`colors.${color}.DEFAULT`),

                    '--floating-border': theme(`colors.${color}.light`)
                },
                [`.component-soft-${color}`] : {
                    '--background': theme(`colors.${color}.lightest`),
                    '--background-hover': theme(`colors.${color}.light`),
                    '--foreground': theme(`colors.${color}.darkest`),
                    '--border': 'transparent',
                    '--border-focus': 'transparent',

                    '--floating-border': theme(`colors.${color}.light`)
                },
                [`.component-ghost-${color}`] : {
                    '--background': 'transparent',
                    '--background-hover': theme(`colors.${color}.lightest`),
                    '--foreground': theme(`colors.${color}.darkest`),
                    '--border': 'transparent',
                    '--border-focus': 'transparent',

                    '--floating-border': 'transparent'
                },
                [`.component-link-${color}`] : {
                    '--background': 'transparent',
                    '--background-hover': 'transparent',
                    '--foreground': theme(`colors.${color}.darkest`),
                    '--border': 'transparent',
                    '--border-focus': 'transparent',

                    '--floating-border': 'transparent'
                },
            })
        });

        addComponents({
            '.size-sm': {
                '--padding': `${theme('spacing')[1]} ${theme('spacing')[2]}`,
                '--font-size': '.75rem',
                '--line-height': '1rem',
            },
            '.size-lg': {
                '--padding': `${theme('spacing')[2]} ${theme('spacing')[4]}`,
                '--font-size': '1.125rem',
                '--line-height': '1.75rem',
            },
            '.size-xl': {
                '--padding': `${theme('spacing')[3]} ${theme('spacing')[5]}`,
                '--font-size': '1.25rem',
                '--line-height': '1.75rem',
            },
        })
    }
}, (options) => {
    return {
        safelist: [
            {
                pattern: /component-(fill|outline|soft|ghost|link)-(primary|secondary|neutral|success|warning|error)/,
            },
            {
                pattern: /size-(sm|md|lg|xl)/,
            },
        ],
        theme: {
            extend: {
                colors: {
                    primary: {
                        lightest: colors.sky[100],
                        light: colors.sky[300],
                        DEFAULT: colors.sky[400],
                        dark: colors.sky[500],
                        darkest: colors.sky[700],
                    },
                    secondary: {
                        lightest: colors.gray[200],
                        light: colors.gray[300],
                        DEFAULT: colors.gray[600],
                        dark: colors.gray[800],
                        darkest: colors.gray[900],
                    },
                    neutral: {
                        lightest: colors.slate[100],
                        light: colors.slate[300],
                        DEFAULT: colors.slate[400],
                        dark: colors.slate[500],
                        darkest: colors.slate[700],
                    },
                    success: {
                        lightest: colors.green[100],
                        light: colors.green[200],
                        DEFAULT: colors.green[500],
                        dark: colors.green[600],
                        darkest: colors.green[600],
                    },
                    warning: {
                        lightest: colors.yellow[100],
                        light: colors.yellow[200],
                        DEFAULT: colors.yellow[500],
                        dark: colors.yellow[600],
                        darkest: colors.yellow[600],
                    },
                    error: {
                        lightest: colors.red[100],
                        light: colors.red[200],
                        DEFAULT: colors.red[400],
                        dark: colors.red[600],
                        darkest: colors.red[600],
                    },
                },
            },
        },
    }
})

module.exports = theme;
