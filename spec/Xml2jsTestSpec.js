describe('Xml Builder',  function() {
	var xml2js = require('xml2js');
	var xmlBuild = require('./xml2jsbuild.js');
	var xmlObj = {
		fname: "Walter",
		lname: "O'brien",
		team : "Scorpion"
	};

	it('Normal Xml Object', function() {
		var xmlStr = xmlBuild.buildXml(xml2js, xmlObj);
		// generated xml string is not null
		expect(xmlStr).not.toBe(null);

		// check the xml string contains certain tags
		expect(xmlStr).toContain("<fname>Walter</fname>");
		expect(xmlStr).toContain("<lname>O'brien</lname>");
		expect(xmlStr).toContain("<team>Scorpion</team>");
	});
});