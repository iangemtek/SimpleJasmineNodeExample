var exports = module.exports = {};

exports.buildXml = function(xml2js, xmlObj) {
	var builder = new xml2js.Builder();
	return builder.buildObject(xmlObj);
};