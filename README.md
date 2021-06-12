npm install

***

then go to src>api>server.js
put your ivp4 in the place of baseURL

then run the following command

json-server db.json --host < Your IPV4 >

The application aims to add points (`Marker`'s) on the map. Something like an application for adding "my favorite places".

At each long click on the map the user must be taken to a different screen where to fill in the data about that point (title, description and any other data they consider
relevant). When saving as changes (and persisting the data in the JSON server), an application must go back to the map screen and present the created markers.

When clicking on an existing bookmark, an application should go to a screen with details of that bookmark and an option to remove it.