import { CookieCategory, CookieConsent, CookieCta, CookieData, CookieHero, CookieHistory } from "@/components/cookie-settings";

export default function CookiePage() {
    return (
        <main>
            <CookieHero />
            <CookieConsent />
            <CookieCategory />
            <CookieData />
            <CookieHistory/>
            <CookieCta />
        </main>
    )
}