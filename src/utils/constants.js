const production = {
    url: process.env.PROD_URL
};

const development = {
    url: process.env.LOCAL_URL
};

export const config =
    (process.env.NODE_ENV === 'development')
        ? development
        : production;