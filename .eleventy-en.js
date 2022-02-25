const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {
  require("./.eleventy.js")(eleventyConfig);

  eleventyConfig.addPassthroughCopy({"./src/en/assets/**/*" : "/"});
  eleventyConfig.addPassthroughCopy({"./src/en/gallery/**/*" : "/"});

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).setLocale('en').toFormat("DDDD");
  });

  return {
    dir: {
      input: "src/en",
      output: "dist/en",
    },
  };
};
