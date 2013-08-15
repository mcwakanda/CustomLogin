##Welcome to Wakanda##

Wakanda 5: Example of a custom login routine using a datastore class vs directory.

Notes and learning goals:
- See CustomLogin/boostraps/mainBootstrap.js and CustomLogin Solution/required.js for the key code components of a custom login system.
- The model is created using the JavaScript API. Model.js includes files in the ModelFolder. See inside these files to understand what is happening with respect to the model.
- To see the permissions setup, you will need to view them in the GUI editor when opening the Model.waModel file in Wakanda Studio (displayed just as Model with no extension)
- Notice how the HA1Key is set and validated against in the ModelFolder/User.js (onSet) and the ModelFolder/User-methods.js (validate password).
- Client side, there is some code in the WebFolder/myScripts/app.js file to handle login/logout client side.

Please visit [www.wakanda.org](http://www.wakanda.org "wakanda.org") for more information.
