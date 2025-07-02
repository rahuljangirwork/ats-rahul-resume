import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    const homepage = "http://localhost:3000/";
    const logo = "http://localhost:3000/assets/logo.png";
    const fevicon = "http://localhost:3000/assets/favicon.svg";

    function isiteJsonLd() {
        return {
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": ${JSON.stringify(homepage)},
              "logo": ${JSON.stringify(logo)},
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9772725637",
                "contactType": "customer service"
              },
              "image": ${JSON.stringify(logo)},
              "description": ${JSON.stringify(description)},
              "founder": "Rahul Jangir",
              "foundingDate": "2025",
              "foundingLocation": "IN",
              "email": "rahuljangir.works@gmail.com",
              "telephone": "+91 9783351443",
              "areaServed": "IN",
              "keywords": ${JSON.stringify(keywords)},
              "mainEntityOfPage": ${JSON.stringify(homepage)},
              "knowsAbout": ${JSON.stringify(keywords)},
              "knowsLanguage": "English",
              "memberOf": "Rahul Jangir",
              "owns": "Rahul Jangir",
              "publishingPrinciples": ${JSON.stringify(homepage)},
              "slogan": "Design. Code. Deliver."
            }`
        };
          
    }


    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href={fevicon} />
            <title>{title}</title>
            <meta type="copyright" content="rahuljangirresume" />
            <meta type="author" content="Rahul Jangir" />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="og:image" content={logo} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}