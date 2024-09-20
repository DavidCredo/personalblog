import { acceptedCategory, type CookieConsentConfig } from 'vanilla-cookieconsent';

export const cookieConsentConfig: CookieConsentConfig = {
    guiOptions: {
        consentModal: {
            layout: 'box',
            position: 'middle center',
            equalWeightButtons: false,
        },
        preferencesModal: {
            layout: 'bar wide',
            position: 'right',
            equalWeightButtons: false,
        }
    },
    onConsent: (preferences) => {
        if (acceptedCategory('analytics')) {
            // load analytics scripts
            window._paq.push(['rememberConsentGiven']);
        } else {
            // disable analytics scripts
            window._paq.push(['forgetConsentGiven']);
        }
    },
    onChange: ({ changedCategories }) => {
        if (changedCategories.includes('analytics')) {
            window._paq.push(['rememberConsentGiven']);
        } else {
            // disable analytics scripts
            window._paq.push(['forgetConsentGiven']);

        }
    },

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true,  // this category cannot be disabled
            services: {
                cookieConsent: {
                    label: 'Cookie Consent'
                }
            }
        },
        analytics: {
            enabled: true,
            readOnly: false,
            services: {
                matomo: {
                    label: 'Matomo'
                }
            }
        }
    },

    language: {
        default: 'de',
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: 'This website uses cookies',
                    description: 'We use cookies to ensure you get the best experience on our website. You can manage your preferences below.',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences',
                    footer: '<a href="/legal">Legal Notice</a>  <a href="/privacy">Privacy Policy</a>',
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    sections: [
                        {
                            title: 'Cookie settings',
                            description: 'You can manage your preferences below.',
                        },
                        {
                            title: 'Strictly Necessary cookies',
                            description: 'These cookies are essential for the proper functioning of the website and cannot be disabled. Specifically, they are used to remember your privacy preferences.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance and Analytics',
                            description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a href="/legal">contact me</a>'
                        },
                        {
                            title: 'Our terms and conditions',
                            description: 'Please read our <a href="/privacy">privacy policy</a> to understand how we use your data.'

                        }
                    ]
                }
            },
            de: {
                consentModal: {
                    title: 'Diese Webseite verwendet Cookies',
                    description: 'Wir verwenden Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten. Sie können Ihre Einstellungen unten verwalten.',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Alle ablehnen',
                    showPreferencesBtn: 'Individuelle Einstellungen',
                    footer: '<a href="/legal">Impressum</a>  <a href="/privacy">Datenschutzerklärung</a>',
                },
                preferencesModal: {
                    title: 'Cookie-Einstellungen verwalten',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Alle ablehnen',
                    savePreferencesBtn: 'Aktuelle Auswahl akzeptieren',
                    closeIconLabel: 'Modal schließen',
                    sections: [
                        {
                            title: 'Cookie-Einstellungen',
                            description: 'Sie können Ihre Einstellungen unten verwalten.',
                        },
                        {
                            title: 'Unbedingt erforderliche Cookies',
                            description: 'Diese Cookies sind für die ordnungsgemäße Funktion der Website unerlässlich und können nicht deaktiviert werden. Insbesondere dienen sie dazu, sich an Ihre Datenschutzeinstellungen zu erinnern.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance und Analyse',
                            description: 'Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen. Alle Daten sind anonymisiert und können nicht verwendet werden, um Sie zu identifizieren.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'Weitere Informationen',
                            description: 'Bei Fragen zu meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten wenden Sie sich bitte an <a href="/legal">mich</a>'
                        },
                        {
                            title: 'Unsere Allgemeinen Geschäftsbedingungen',
                            description: 'Bitte lesen Sie unsere <a href="/privacy">Datenschutzerklärung</a>, um zu verstehen, wie wir Ihre Daten verwenden.'
                        }
                    ]
                }
            }
        }
    }
}