const dev = {
  STRIPE_KEY: "pk_test_cVgL1SHgCE4pcgHDcqVtRGiT",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-9fpttbk26fr4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v9gx3l3fa7.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_XJ54yEGL3",
    APP_CLIENT_ID: "13jcsdhj4mo00fg30dmj7php9i",
    IDENTITY_POOL_ID: "us-east-1:7cf66945-40da-416f-b511-effe3c0be768"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_cVgL1SHgCE4pcgHDcqVtRGiT",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-16vjnpzerwnp4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2gavfcvvo4.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_G1z0gVqmQ",
    APP_CLIENT_ID: "3qlak8eu0fmlvb63avlacmb5va",
    IDENTITY_POOL_ID: "us-east-1:24e02071-31fd-40da-91c4-5d54f214b251"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};