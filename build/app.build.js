({
	appDir: '../app/', // base url for the dev files
	baseUrl: 'scripts', // relative url from the appDir - where are your scripts located
	dir: '../dist', // directory we are building to - this will build the file on the root right outside of the app directory
	mainConfigFile: '../app/scripts/main.js', // where is the main js file
	name: 'main', // name of your main module file
	optimizeCss: 'standard' // gets rid of line-breaks etc...
})