function myFunction() {
  
  const q = GmailApp.search('from:YouTube', 0, 1);
  Logger.log(q);
  
}
