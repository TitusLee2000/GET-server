# GET-server

## Get
Implement your very first API server ( well a GET server).

Develop a server side nodejs service to get your name you sent via the browser's address bar,  greet you and return the current time of the server ( entire message in blue)*. You need to host it remotely**  

In your browser, you want to send your name to the server from the address bar of the browser (GET call)

Example:  

an API request like this one at the browser's address bar

https://yourDomainName.xyz/COMP4537/labs/3/getDate/?name=John**

Shall return this message in blue:

Hello John, what a beautiful day. Server current date and time is *  Wed Sept 01 2023 12:52:14 GMT-0800 (Pacific Standard Time)

*: whatever the current date and time of the server is. So it has to come from the server, not from your browser. 

## Write and Read

https://yourDomainName.xyz/COMP4537/labs/3/writeFile/?text=BCIT*

which appends a new line with text BCIT to the text file file.txt

You need to append the text (which includes in the url) to the exiting file (file.txt ). Do not re-create the file every time the user sends the request, just append to the exiting one. 
Append means:
if the file does not exist, create it and then store the text to it
if the file exists already, just add ( append) the text of query string to the bottom of the existing file.


https://yourDomainName.xyz/COMP4537/labs/3/readFile/file.txt*

which reads the entire content of the updated file file.txt and returns it back to the browser and displays it on the browser's page ( it must not download the file, it has to display its content)

If the file does not exist, a 404 error message including the file name the user had entered will be returned

## How to use:


