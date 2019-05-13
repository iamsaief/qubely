import './style.scss'
import Edit from './Edit'
import Save from './Save';
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType('qubely/heading', {
	title: __('Heading'),
	description: 'Make headlines/titles that attract users with Qubely Heading.',
	category: 'qubely',
	icon: <img src={qubely_admin.plugin + 'assets/img/blocks/block-heading.svg'} alt={__('Heading Block')} />,
	supports: { align: false },
	keywords: [__('heading'), __('head'), __('title')],
	attributes: {
		uniqueId: { type: 'string', default: '' },
		spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },
		content: { type: 'string', default: 'Qubely - A Full-fledged Gutenberg Builder' },
		alignment: {
			type: 'object',
			default: {},
			style: [
				{ selector: '{{QUBELY}}{text-align: {{alignment}}; }' }
			],
		},
		typography: {
			type: 'object',
			default: { openTypography: 1, size: { md: 24, unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-block-heading .qubely-heading-selector' }]
		},
		separatorStyle: {
			type: 'string',
			default: '',
			style: [
				{
					condition: [{ key: 'separatorStyle', relation: '!=', value: '' }],
					selector: '{{QUBELY}} .qubely-block-heading .qubely-separator-type-css {border-top-style: {{separatorStyle}};}'
				}
			],
		},
		separatorPosition: { type: 'string', default: 'top' },
		separatorColor: {
			type: 'string',
			default: '#5D7FEB',
			style: [
				{
					condition: [{ key: 'separatorStyle', relation: '!=', value: '' }],
					selector: '{{QUBELY}} .qubely-block-heading .qubely-separator-type-svg svg .qubely-separator-stroke {stroke: {{separatorColor}};} {{QUBELY}} .qubely-block-heading svg .qubely-separator-fill {fill: {{separatorColor}};} {{QUBELY}} .qubely-separator-type-css {border-top-color: {{separatorColor}};}'
				}
			],
		},
		separatorStroke: {
			type: 'number',
			default: 3,
			style: [
				{
					condition: [{ key: 'separatorStyle', relation: '!=', value: '' }],
					selector: '{{QUBELY}} .qubely-block-heading .qubely-separator-type-svg svg .qubely-separator-stroke {stroke-width: {{separatorStroke}}px;} {{QUBELY}} .qubely-block-heading .qubely-separator-type-css {border-top-width: {{separatorStroke}}px;}'
				}
			]
		},
		separatorWidth: {
			type: 'object',
			default: { md: 60 },
			style: [
				{
					condition: [{ key: 'separatorStyle', relation: '!=', value: '' }],
					selector: '{{QUBELY}} .qubely-block-heading .qubely-separator-type-css {width: {{separatorWidth}}px;} {{QUBELY}} .qubely-block-heading .qubely-separator-type-svg svg {width: {{separatorWidth}}px;}'
				}
			]
		},
		separatorSpacing: {
			type: 'object',
			default: { md: 10 },
			style: [
				{
					condition: [{ key: 'separatorStyle', relation: '!=', value: '' }],
					selector: '{{QUBELY}} .qubely-separator-position-left .qubely-separator {margin-right: {{separatorSpacing}}px;} {{QUBELY}} .qubely-separator-position-right .qubely-separator {margin-left: {{separatorSpacing}}px;} {{QUBELY}} .qubely-separator-position-leftright .qubely-separator-before {margin-right: {{separatorSpacing}}px;} {{QUBELY}} .qubely-separator-position-leftright .qubely-separator-after {margin-left: {{separatorSpacing}}px;} {{QUBELY}} .qubely-separator-position-top .qubely-separator {margin-bottom: {{separatorSpacing}}px;} {{QUBELY}} .qubely-separator-position-bottom .qubely-separator {margin-top: {{separatorSpacing}}px;}'
				}
			],
		},

		subHeading: { type: 'boolean', default: 0 },
		subHeadingLevel: { type: 'number', default: 3 },
		subHeadingContent: { type: 'string', default: 'Pre Heading' },
		subHeadingTypography: {
			type: 'object',
			default: { openTypography: 1, size: { md: 16, unit: 'px' } },
			style: [
				{
					selector: '{{QUBELY}} .qubely-block-heading .qubely-sub-heading-selector'
				}
			],
		},
		subHeadingColor: {
			type: 'string', default: '#333',
			condition: [{ key: 'subHeading', condition: '==', value: 1 }],
			style: [
				{
					selector: '{{QUBELY}} .qubely-block-heading .qubely-sub-heading-selector {color: {{subHeadingColor}};}'
				}
			],
		},
		subHeadingSpacing: {
			type: 'object', default: { md: 10, unit: 'px' },
			condition: [{ key: 'subHeading', condition: '==', value: 1 }],
			style: [
				{
					selector: '{{QUBELY}} .qubely-block-heading .qubely-sub-heading-selector {margin-top: {{subHeadingSpacing}};}'
				}
			],
		},

		selector: { type: 'string', default: 'h2' },
		textColor: {
			type: 'string', default: '',
			style: [
				{
					selector: '{{QUBELY}} .qubely-block-heading .qubely-heading-selector { color:{{textColor}}; }'
				}
			],
		},
		showGlobalSettings: { type: 'boolean', default: true },
	},
	edit: Edit,
	save: Save,
});