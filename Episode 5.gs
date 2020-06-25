function myFunction() {
  
  const recipient = 'weissdav@sas.upenn.edu';
  const q = GmailApp.search(`from:${recipient}`);
  
  const num = q[1].getMessageCount();
  q[1].getMessages()[num - 1].forward(recipient);
  
}
