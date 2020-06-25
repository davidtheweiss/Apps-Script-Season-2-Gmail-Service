function myotherotherFunction() {
  
  const file = DriveApp.getFilesByName('Sample Resume').next();
  
  GmailApp.sendEmail('weissdav@sas.upenn.edu', 'Hello, from Apps Script!', 'This is a test email', {
    attachments: [file],
    cc: 'davidtheweiss7@gmail.com',
    name: 'David The Weiss'
  });
}

/*
attachments	  BlobSource[]
bcc	          String
cc	          String
from	      String
htmlBody	  String
inlineImages  Object
name	      String
noReply	      Boolean
replyTo	      String
*/
