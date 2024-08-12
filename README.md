# movie-collection-api
Allow qerying and returning a list of movies and its metadata

To get setup with local development, first step is installing the dependencies:

```
npm install
```

Once you have done that, you can run the `dev` script:

```
npm run dev
```

## Scripts

### `dev`

Runs the service in a local development mode using nodemon. Logs will be formatted simply for local development instead of the full syslog format.

### `test:unit`

Runs the full unit test suite. It is configured to look for files that match the pattern `*.unit.test.js`.

### `start`

Runs the service. This should only be used when deployed to an environment.
