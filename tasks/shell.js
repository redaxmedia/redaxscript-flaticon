module.exports = () =>
{
	'use strict';

	const config =
	{
		prepare:
		{
			command:
			[
				'cd build',
				'for path in *',
				'do mkdir -p ../flaticon/$path',
				'done'
			]
			.join('&&')
		},
		convert:
		{
			command:
			[
				'cd build',
				'for path in */*.svg',
				'do rsvg-convert $path --output=../flaticon/$path --format=svg --height=24 --width=24 --keep-aspect-ratio',
				'echo flaticon/$path',
				'done'
			]
			.join('&&')
		}
	};

	return config;
};
