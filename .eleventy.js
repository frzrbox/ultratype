module.exports = function(eleventyConfig) {
    // Add a filter using the Config API
    eleventyConfig.addFilter( "myFilter", function() {});
  
    // You can return your Config object (optional).
    return {
      markdownTemplateEngine: "njk",
      dir: {
        input: "site",
        output: "dist"
      }
    };
  };