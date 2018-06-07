const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    //BUCKET: "notes-app-2-api-dev-attachmentsbucket-6wbhcogxihbo"
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-9fpttbk26fr4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://iemvlw3tf7.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SrpFYr5z0",
    APP_CLIENT_ID: "1pejfkm0p9ha2bbpk5pnkbkpla",
    IDENTITY_POOL_ID: "us-east-1:4429196e-0398-4b94-98a2-c811218983a8"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
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
    USER_POOL_ID: "us-east-1_jHwjcAVxI",
    APP_CLIENT_ID: "15mlb70tst0pgfbtvf1r48upjj",
    IDENTITY_POOL_ID: "us-east-1:7d55bc5b-0891-466a-8f7f-3826fd2c3aff"
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