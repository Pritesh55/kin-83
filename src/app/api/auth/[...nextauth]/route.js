import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

console.log(GITHUB_ID);
console.log(GITHUB_SECRET);

console.log(GOOGLE_ID);
console.log(GOOGLE_SECRET);

const handler = NextAuth({

    providers: [
        GitHubProvider({
            clientId: GITHUB_ID,
            clientSecret: GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET
        }),
    ]
})

export { handler as GET, handler as POST }