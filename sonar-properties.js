const sonarqubeScanner = require('sonarqube-scanner');
	     sonarqubeScanner({
	       serverUrl: 'http://20.213.56.165:9000',

	       options : {
	       'sonar.sources': '.',
	       'sonar.login': '1780cbd3e46c28add4d144c2d390d6cc90194931',
	       'sonar.inclusions' : 'src/**' // Entry point of your code
	       }
	     }, () => {});
