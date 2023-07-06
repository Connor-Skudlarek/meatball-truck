## meatball-truck

# About
This project is intended to replace the website [gotballstruck.com](https://www.gotballstruck.com/)https://www.gotballstruck.com/

They want their website to be fully in-house rather than use Squarespace.

# How to get started
Super simple.

After downloading, navigate to the client folder in the terminal and run:

```npm install```

Then build the react app:

```npm run build```

Navigate to the the server directory.

From in the server directory, run:

```touch .env```

Then open the .env file in vim by running ```vim .env``` and enter insert mode.
Setup the .env file by adding ```MONGODB_URI=***your mongodb information***``` and once done type ```:w + enter``` then ```:q! + enter```.

Finally, start the server:

```npm install```
```npm run start```

You can now navigate to your browser and go to localhost.
