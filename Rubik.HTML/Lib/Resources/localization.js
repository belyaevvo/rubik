/// <reference path="LanguageMessages.ts"/>
/// <reference path="language-en.ts"/>
var Rubik;
(function (Rubik) {
    var Resources;
    (function (Resources) {
        const getNavigatorLanguage = () => {
            if (navigator.languages && navigator.languages.length) {
                return navigator.languages[0];
            }
            else {
                return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
            }
        };
        Resources.Localization = {
            currentLocaleValue: "",
            defaultLocaleValue: "en",
            locales: {},
            localeNames: {},
            supportedLocales: [],
            get currentLocale() {
                return this.currentLocaleValue === this.defaultLocaleValue
                    ? ""
                    : this.currentLocaleValue;
            },
            set currentLocale(val) {
                this.currentLocaleValue = val;
            },
            get defaultLocale() {
                return this.defaultLocaleValue;
            },
            set defaultLocale(val) {
                this.defaultLocaleValue = val;
            },
            getString: function (strName) {
                var loc = this.currentLocale
                    ? this.locales[this.currentLocale]
                    : this.locales[this.defaultLocale];
                if (!loc || !loc[strName])
                    loc = this.locales[this.defaultLocale];
                var result = loc[strName];
                if (result === undefined) {
                    result = this.locales["en"][strName];
                }
                return result;
            },
            getLocales: function () {
                var res = [];
                res.push("");
                if (this.supportedLocales && this.supportedLocales.length > 0) {
                    for (var i = 0; i < this.supportedLocales.length; i++) {
                        res.push(this.supportedLocales[i]);
                    }
                }
                else {
                    for (var key in this.locales) {
                        res.push(key);
                    }
                }
                res.sort();
                return res;
            }
        };
        Resources.localizedStrings = Resources.englishStrings;
        Resources.Localization.locales["en"] = Resources.englishStrings;
        Resources.Localization.localeNames["en"] = "english";
        Resources.Localization.currentLocale = getNavigatorLanguage().substr(0, 2);
    })(Resources = Rubik.Resources || (Rubik.Resources = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=localization.js.map