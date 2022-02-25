const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {
  require("./.eleventy.js")(eleventyConfig);

  eleventyConfig.addPassthroughCopy({"./src/ar/assets/**/*" : "/"});
  eleventyConfig.addPassthroughCopy({"./src/ar/gallery/**/*" : "/"});

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).setLocale('ar-AE').toFormat("DDDD");
  });

	const arTags = {
		"math": "رياضيات",
		"journal": "تدوينة",
		"code": "برمجة"
	};

	eleventyConfig.addFilter("localizeTag", tag => {
		return arTags[tag] || tag;
	});

  return {
    dir: {
      input: "src/ar",
      output: "dist/ar",
    },
  };
};
