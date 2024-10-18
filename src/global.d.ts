declare namespace NodeJS {
    interface ProcessEnv {
        ID: string;
        SECRET: string;
        SANDBOX_URL: string;
        TEST_BRN: string;
        TEST_TIN: string;
    }
}