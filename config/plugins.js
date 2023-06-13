module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
 
  
});
module.exports = ({ env }) => ({
  // ...
  "strapi-paypal": {
    enabled: true,
    config: {
      paypalSandBoxUrl:
        env("PAYPAL_SANDBOX_API_URL") || "https://api-m.sandbox.paypal.com",
      paypalLiveUrl: env("PAYPAL_LIVE_API_URL") || "https://api-m.paypal.com",
    },
  },
  // ...
});

