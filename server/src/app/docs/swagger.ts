import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "documentation for my API",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      user: {
        type: "object",
        required: ["username", "password"],
        properties: {
          username: {
            type: "string",
            max: 20,
          },
          password: {
            type: "string",
            max: 100,
          },
        },
      },
      category: {
        type: "object",
        required: ["price", "qty"],
        properties: {
          price: {
            type: "string",
          },
          qty: {
            type: "string",
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/app/router/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
