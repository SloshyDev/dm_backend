module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  // Permitir host externo para Strapi
  url: env("PUBLIC_URL", "https://api.yokaicdmx.com"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    // Permitir acceso al admin desde el host externo
    serveAdminPanel: true,
    url: "/admin",
  },
});
