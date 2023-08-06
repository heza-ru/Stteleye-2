const countSpacesWithinTags = require('./your-solution-file'); // Replace with the actual path to your solution file

describe('countSpacesWithinTags', () => {
  it('should count spaces within a simple HTML tag', () => {
    const htmlContent = '<div> This is a simple tag </div>';
    const position = { start: htmlContent.length };
    expect(countSpacesWithinTags(htmlContent, position)).toBe(4);
  });

  it('should count spaces within nested HTML tags', () => {
    const htmlContent = '<div><span> Nested tags </span></div>';
    const position = { start: htmlContent.length };
    expect(countSpacesWithinTags(htmlContent, position)).toBe(6);
  });

  it('should count spaces within multiple HTML tags with attributes', () => {
    const htmlContent = '<a href="#">Link</a><p class="description">Some text</p>';
    const position = { start: htmlContent.length };
    expect(countSpacesWithinTags(htmlContent, position)).toBe(4);
  });

  it('should count spaces within tags with no spaces', () => {
    const htmlContent = '<p>NoSpacesHere</p>';
    const position = { start: htmlContent.length };
    expect(countSpacesWithinTags(htmlContent, position)).toBe(0);
  });

  it('should count spaces within tags with multiple consecutive spaces', () => {
    const htmlContent = '<div>   Multiple   Spaces   </div>';
    const position = { start: htmlContent.length };
    expect(countSpacesWithinTags(htmlContent, position)).toBe(6);
  });

  it('should count spaces within tags when position.start is at the beginning', () => {
    const htmlContent = '<p>Count spaces from the beginning</p>';
    const position = { start: 0 };
    expect(countSpacesWithinTags(htmlContent, position)).toBe(2);
  });

  it('should count spaces within tags when position.start is at the end', () => {
    const htmlContent = '<p>Count spaces until the end</p>';
    const position = { start: htmlContent.length };
    expect(countSpacesWithinTags(htmlContent, position)).toBe(2);
  });

  it('should count spaces within tags when position.start is within the middle', () => {
    const htmlContent = '<p>Count spaces in the middle</p>';
    const position = { start: 12 };
    expect(countSpacesWithinTags(htmlContent, position)).toBe(2);
  });
});
