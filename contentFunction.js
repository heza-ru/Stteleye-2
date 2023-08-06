function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  let highlightedContent = htmlContent;

  // Iterate over each position object in plainTextPositions
  plainTextPositions.forEach(position => {
    let spacesWithinTags = 0;
    let insideTag = false;

    for (let i = 0; i < position.start; i++) {
      if (htmlContent[i] === '<') {
        insideTag = true;
        spacesWithinTags+=2; // Mark that we are inside an HTML tag
      } else if (htmlContent[i] === '>') {
        insideTag = false; // Mark that we have exited the HTML tag
      } else if (insideTag) {
        spacesWithinTags++; // Increment spacesWithinTags if we are inside a tag and encounter a space
      }
    }

    // Highlight the content within the adjusted positions
    let htmlStart = position.start + spacesWithinTags;
    let htmlEnd = position.end + spacesWithinTags;


    highlightedContent = highlightedContent.slice(0, htmlStart) + '<mark>' +
      highlightedContent.slice(htmlStart, htmlEnd) + '</mark>' +
      highlightedContent.slice(htmlEnd);

  });

  return highlightedContent;
}
// Example usage:
const htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';
const plainText = 'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------';
const plainTextPositions = [
  {
    start: 241,
    end: 247,
  },
  {
    start: 518,
    end: 525,
  },
];

const highlightedHTMLContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
console.log(highlightedHTMLContent);
