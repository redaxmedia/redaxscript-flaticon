module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		shell: require('./tasks/shell')(grunt),
		svgmin: require('./tasks/svgmin')(grunt)
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'svgresize',
		'svgmin'
	]);
	grunt.registerTask('svgresize',
	[
		'shell:prepare',
		'shell:convert'
	]);
};
