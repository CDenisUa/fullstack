// Core
import {PropsWithChildren} from "react";
import type {Metadata, NextPage} from "next";
// Styles
import "./globals.css";
// Providers
import {Providers} from "@/app/providers";
// Helpers
import {
    geistSans,
    geistMono,
} from '@/helpers/fonts';
// Components
import NavBar from "@/components/nav-bar/NavBar";
import AppContainer from "@/components/app-container/AppContainer";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const RootLayout: NextPage<Readonly<PropsWithChildren>> = ({children}) =>
    <html
        lang="en"
    >
        <body
            suppressHydrationWarning={true}
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Providers>
                <AppContainer>
                    <NavBar />
                    {children}
                </AppContainer>
            </Providers>
        </body>
    </html>

export default RootLayout;