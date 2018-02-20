module.exports = () =>
{
	'use strict';

	const config =
	{
		flaticon:
		{
			src:
			[
				'flaticon/**/*.svg'
			],
			expand: true
		},
		options:
		{
			plugins:
			[
				{
					convertPathData: false
				},
				{
					removeViewBox: false
				}
			]
		}
	};

	return config;
};
