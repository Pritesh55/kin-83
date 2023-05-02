import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { config } from "../../../../utils/constants";


const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: config.GITHUB_ID,
            clientSecret:  config.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId:  config.GOOGLE_ID,
            clientSecret:  config.GOOGLE_SECRET
        }),
    ]
})

export { handler as GET, handler as POST }