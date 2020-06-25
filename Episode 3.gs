function myFunction() {
  
  const inbox_threads = GmailApp.getInboxThreads();
  
  const messages = inbox_threads[2].getMessages();
  
  Logger.log(messages[0].getFrom());
  Logger.log(messages[0].getDate());
  Logger.log(messages[0].getSubject());
  Logger.log(messages[0].getPlainBody());
}
