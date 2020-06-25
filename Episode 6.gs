function myFunction() {
  
  let last_24_hours = new Date();
  last_24_hours.setHours(last_24_hours.getHours() - 24);

  const threads = GmailApp.getInboxThreads();
  
  for (thread of threads) {
    if(thread.getLastMessageDate() > last_24_hours) {
      
      thread.getMessages()[0].unstar();
      
    }
  }
}
