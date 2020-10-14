# My Portfolio site

## Instructions for installing and running this project:

1. `npm install` in both frontend and backend directories
2. NOTE!!! Be aware that after cloning this repo, you need to delete the upload folder and its contents in the strapi backend.
3. In the backend run `npm run develop`
4. In your backend recreate the folder upload under extensions, then in the upload folder create the config folder, in the config folder create settings.json file with the following structure.
5. `{`
   `"provider": "cloudinary",`
   `"providerOptions": { "cloud_name": "xxxx",`
   `"api_key": "xxxxxx",`
   `"api_secret": "xxx" }`
   `}`
   Replace the content of cloud_name, api_key and api_secret with your own credentials from Cloudinary
6. NOTE!!! In your frontend, change settings for my-portfolio-gatsby-webdev/portfolio-frontend/src/pages/contact.js, the settings for form action must be specifically be yours that you recieved from fromspree
7. In the frontend run `gatsby develop`
8. To use the git make file, please ensure that there are only tabs and no spaces. You can control this with the following add-on "Space Cadet"


Following are swedish notes for the exam:

## TENTA-UPPGIFT 4:

- Som jag tolkade uppgiften (den 4:e) så skulle vi låta någon se igenom hemsidan och ge feedback.
- Jag valde att länka sidan i ett e-mail till Angelika (utbildningsledare) och hon gav följande
feedback:

"Hej Christian
Så roligt med egen sida!
Kikat igenom den lite snabbt och den var skoj framförallt då den innehåller en hel del nyttig information men även roliga delar som inte hör ihop med programmering men som ändå är sådan som kan vara bra att veta.
Det jag hade föredragit är lite mer kontraster mellan text och bakgrund då vissa texter var nästintill omöjliga att urskilja och med tanke på olika ljusinställningar hos användaren kan det bli mörkare än det du själv ser på din skärm.
Delarna på första sidan var så perfekt inpassade på min skärm så det var bara en slump som gjorde att jag råkade scrolla ner och såg att där fanns mer info, kanske kan du sammankoppla dom?
Jättetrevligt med ljuseffekterna och jättebra att man kan ladda ner ditt CV som dessutom ser riktigt bra ut."

- Efter denna feedback ändrade jag om ganska ordentligt i just kontrasterna, som var en av de viktigaste
synpunkterna från henne. Har även dragit ihop sektionerna lite på sidan, så man förhoppningsvis lättare
ser att man kan bläddra nedåt.

- Jag fick även feedback från Sohail under online-lektion. Skrev upp alla punkter som togs upp, och
ändrade utifrån dem:

v Uppdatera Validator card (twitter-img.png)
v Ändra WebDev-iconen: gör en egen i Photoshop t.ex. och ersätt!
v Ta bort required på fält som inte behöver vara det (url:er osv)
v Fixa en 'normal' bild till hemsidan!
v En fjärde artikel som inte visas under Latest articles! Precis som i featured för projects
v Fixa rubriker i de enskilda Bloggarna, de ska inte vara så stora (H1) utan mindre rubriker..
v Mer info i vissa sektioner - fyll ut med info i de 'korta' texterna!
(v) MY CV, där ska det vara mer ett utdrag av CV't, inte bara en mening.

- Jag ändrade alla punkter, förutom möjligtvis den sista; där jag själv valt att inte skriva ut
hela mitt CV på sidan, utan håller det väldigt enkelt i texten, och hänvisar till att man
kan ladda ner hela CV:t precis nedanför.

Egna reflektioner kring användarvändlighet: väldigt nyttigt och givande att ta emot feedback
från utomstående, och man kan enkelt hålla med om alla punkter som tas upp, och fixa dem
en efter en. Efter detta känns sidan mycket helare, renare och tydligare. Är personligen
mycket nöjd med resultatet!

Jag vet inte om jag behvöer gå in i detalj varför man motiverar vissa val i designen
för att underlätta användarvänligheten, men några punkter jag kan nämna som jag
jobbat med är:

- tydliga kontraster i designen
- tydlig färgkodning för förgrundsobjekt (text m.m) respektive bakgrund
- tydlig ordning och upplägg på teman och innehåll,
- tydlig navigation
- tydlig enhetlighet genom sidan
- smidiga snitt och avstånd för designmässig klarhet

Det var allt, än så länge.

/ Christian Romedahl 2020-10-14
SYNE19, TUC, Jönköping