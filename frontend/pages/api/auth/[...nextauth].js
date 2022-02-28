import NextAuth from "next-auth"
import OktaProvider from "next-auth/providers/okta"

export default NextAuth({
    providers: [
        OktaProvider({
            clientId: process.env.OKTA_CLIENT_ID,
            clientSecret: process.env.OKTA_CLIENT_SECRET,
            issuer: process.env.OKTA_ISSUER,
            userinfo: {
                params: {
                    scope: "openid groups"
                }
            }
        })
    ],
    secret: process.env.AUTH_SECRET
})
