import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
    en: {
        test: "testing",
        landing_first_header: "The new face of street performing"
    },
    bg: {
        test: "Тест стринг",
        landing_first_header: "dogg"
    }
});

export default strings;
