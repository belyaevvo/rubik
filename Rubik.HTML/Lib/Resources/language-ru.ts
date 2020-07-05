/// <reference path="localization.ts"/>
/// <reference path="LanguageMessages.ts"/>

namespace Rubik.Resources {
    export var russianStrings: LanguageMessages = {
        pivotAreaFilters: "Фильтры",
        pivotAreaData: "Значения",
        pivotAreaCols: "Столбцы",
        pivotAreaRows: "Строки"
    }

    Localization.locales["ru"] = Rubik.Resources.russianStrings;
    Localization.localeNames["ru"] = "русский";
}

