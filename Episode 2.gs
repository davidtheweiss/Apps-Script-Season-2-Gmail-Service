function myFunction() {
  
  const inbox_threads = GmailApp.getInboxThreads(0, 2);
  const starred_threads = GmailApp.getStarredThreads();
  const spam_threads = GmailApp.getSpamThreads();
  const trash_threads = GmailApp.getTrashThreads();
  const chat_threads = GmailApp.getChatThreads();
  const misc_threads = GmailApp.getUserLabelByName('Misc').getThreads();
  
  Logger.log(`Inbox Length: ${inbox_threads.length}. ${inbox_threads}`);
  Logger.log(`Starred Length: ${starred_threads.length}. ${starred_threads}`);
  Logger.log(`Spam Length: ${spam_threads.length}. ${spam_threads}`);
  Logger.log(`Trash Length: ${trash_threads.length}. ${trash_threads}`);
  Logger.log(`Chat Length: ${chat_threads.length}. ${chat_threads}`);
  Logger.log(`Misc Length: ${misc_threads.length}. ${misc_threads}`);
  
}













/*
  Logger.log(`Inbox Length: ${inbox_threads.length}. ${inbox_threads}`);
  Logger.log(`Starred Length: ${starred_threads.length}. ${starred_threads}`);
  Logger.log(`Spam Length: ${spam_threads.length}. ${spam_threads}`);
  Logger.log(`Trash Length: ${trash_threads.length}. ${trash_threads}`);
  Logger.log(`Chat Length: ${chat_threads.length}. ${chat_threads}`);
  Logger.log(`Misc Length: ${misc_threads.length}. ${misc_threads}`);
*/
