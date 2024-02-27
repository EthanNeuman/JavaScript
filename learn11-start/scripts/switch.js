function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);


    switch (year) {
        case 1924:

        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
            chi = "Rat"
            break;
        case 1913:
        case 1925:
        case 1937:
        case 1949:
        case 1961:
        case 1973:
        case 1985:
        case 1997:
        case 2009:
        case 2021:
            chi = "Ox"
            break;
        case 1914:
        case 1926:
        case 1938:
        case 1950:
        case 1962:
        case 1974:
        case 1986:
        case 1998:
        case 2010:
        case 2022:
            chi = "Tiger"
            break;
        case 1915:
        case 1927:
        case 1939:
        case 1951:
        case 1963:
        case  1975:
        case 1987:
        case 1999:
        case 2011:
        case 2023:
            chi = "Rabbit"
            break;
        case  1916:
        case 1928:
        case 1940:
        case  1952:
        case 1964:
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            chi = "Dragon"
            break;
        case 1917:
        case 1929:
        case 1941:
        case 1953:
        case 1965:
        case 1977:
        case 1989:
        case 2001:
        case 2013:
        case 2025:
            chi = "Snake"
            break;
        case 1918:
        case 1930:
        case 1942:
        case 1954:
        case 1966:
        case 1978:
        case 1990:
        case 2002:
        case 2014:
        case 2026:
            chi = "Horse"
            break;
        case 1919:
        case 1931:
        case 1943:
        case 1955:
        case 1967:
        case 1979:
        case 1991:
        case 2003:
        case 2015:
        case 2027:
            chi = "Sheep"
            break;
        case 1920:
        case 1932:
        case 1944:
        case 1956:
        case 1968:
        case 1980:
        case 1992:
        case 2004:
        case 2016:
        case 2028:
            chi = " Monkey"
            break;
        case 1921:
        case 1933:
        case 1945:
        case 1957:
        case 1969:
        case 1981:
        case 1993:
        case 2005:
        case 2017:
        case 2029:
            chi = "Rooster"
            break;
        case 1922:
        case 1934:
        case 1946:
        case 1958:
        case 1970:
        case 1982:
        case 1994:
        case 2006:
        case 2018:
        case 2030:
            chi = "Dog"
            break;
        case 1923:
        case 1935:
        case 1947:
        case 1959:
        case 1971:
        case 1983:
        case 1995:
        case 2007:
        case 2019:
        case 2031:
            chi = "Pig"
            break;

        default:
            chi = "That year is not included in my list. ";
    }
    const ZodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
        "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
    ];
    const ZodiacIndex = (month * 100) + date;
    let ZodiacSign;
    if ((ZodiacIndex >= 321 && ZodiacIndex <= 419)) {
        ZodiacSign = ZodiacSigns[3]; // Aries
    } else if ((ZodiacIndex >= 420 && ZodiacIndex <= 520)) {
        ZodiacSign = ZodiacSigns[4]; // Taurus
    } else if ((ZodiacIndex >= 521 && ZodiacIndex <= 620)) {
        ZodiacSign = ZodiacSigns[5]; // Gemini
    } else if ((ZodiacIndex >= 621 && ZodiacIndex <= 722)) {
        ZodiacSign = ZodiacSigns[6]; // Cancer
    } else if ((ZodiacIndex >= 723 && ZodiacIndex <= 822)) {
        ZodiacSign = ZodiacSigns[7]; // Leo
    } else if ((ZodiacIndex >= 823 && ZodiacIndex <= 922)) {
        ZodiacSign = ZodiacSigns[8]; // Virgo
    } else if ((ZodiacIndex >= 923 && ZodiacIndex <= 1022)) {
        ZodiacSign = ZodiacSigns[9]; // Libra
    } else if ((ZodiacIndex >= 1023 && ZodiacIndex <= 1121)) {
        ZodiacSign = ZodiacSigns[10]; // Scorpio
    } else if ((ZodiacIndex >= 1122 && ZodiacIndex <= 1221)) {
        ZodiacSign = ZodiacSigns[11]; // Sagittarius
    } else {
        ZodiacSign = ZodiacSigns[0]; // Capricorn
    }
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your  zodiac sign is:" + ZodiacSign

}
