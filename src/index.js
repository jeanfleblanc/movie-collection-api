const express = require('express');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const packageMetadata = require('../package.json');
const routesv1 = require('./routes/routes.v1');

// Attach routes
app.use('/api/v1', routesv1);

// Setup OpenAPI Documentation
const docs = swaggerJsdoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: packageMetadata.name,
            description: packageMetadata.description,
            version: packageMetadata.version,
        },
    },
    apis: ['./src/routes/*.js'], // files containing annotations as above
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(docs, {}));
app.get('/docs.json', (req, res) => {
    res.setHeader('Content-disposition', `attachment; filename=${packageMetadata.name}.OpenAPI.json`);
    res.setHeader('Content-type', 'application/json');
    res.send(docs);
});

// Error handling and formatting
app.use((err, req, res, next) => {
    res.status(500).send({
        code: 'UNKNOWN_ERROR',
        message: err.message,
    });
});

// Starting up the server!
app.listen(3000, () => {
  console.log("Server running on port 3000");
});