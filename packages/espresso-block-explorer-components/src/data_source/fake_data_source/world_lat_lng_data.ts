// Data Format is laid out as follows: city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id, continent, region
// This information was derived from a combination of data sources:
// - https://simplemaps.com/data/world-cities
// - https://cloford.com/resources/codes/index.htm

import { zipWithIterable } from '@/functional/functional';

/**
 * This CityTuple is a City Name, Latitude, Longitude, and then ISO3166 Alpha-2
 * Country Code.
 */
type CityTuple = [string, number, number, string];

const africa: CityTuple[] = [
  [
    'Cairo',
    /* 'Cairo',*/ 30.0444,
    31.2358,
    /*, 'Egypt', */ 'EG' /*, 'EGY', 'Al Qāhirah', 'primary', 20296000, 1818253931, 'Africa', 'Northern Africa'*/,
  ],
  [
    'Lagos',
    /* 'Lagos',*/ 6.455,
    3.3841,
    /*, 'Nigeria', */ 'NG' /*, 'NGA', 'Lagos', 'minor', 16637000, 1566593751, 'Africa', 'Western Africa'*/,
  ],
  [
    'Kinshasa',
    /* 'Kinshasa',*/ -4.3219,
    15.3119,
    /*, 'Congo (Kinshasa)', */ 'CD' /*, 'COD', 'Kinshasa', 'primary', 12836000, 1180000363, 'Africa', 'Central Africa'*/,
  ],
  [
    'Luanda',
    /* 'Luanda',*/ -8.8383,
    13.2344,
    /*, 'Angola', */ 'AO' /*, 'AGO', 'Luanda', 'primary', 9051000, 1024949724, 'Africa', 'Southern Africa'*/,
  ],
  [
    'Johannesburg',
    /* 'Johannesburg',*/ -26.2044,
    28.0456,
    /*, 'South Africa', */ 'ZA' /*, 'ZAF', 'Gauteng', 'admin', 8500000, 1710550792, 'Africa', 'Southern Africa'*/,
  ],
  [
    'Dar es Salaam',
    /* 'Dar es Salaam',*/ -6.8161,
    39.2803,
    /*, 'Tanzania', */ 'TZ' /*, 'TZA', 'Dar es Salaam', 'admin', 7962000, 1834843853, 'Africa', 'Eastern Africa'*/,
  ],
  [
    'Douala',
    /* 'Douala',*/ 4.05,
    9.7,
    /*, 'Cameroon', */ 'CM' /*, 'CMR', 'Littoral', 'admin', 5768400, 1120494607, 'Africa', 'Western Africa'*/,
  ],
  [
    'Giza',
    /* 'Giza',*/ 29.987,
    31.2118,
    /*, 'Egypt', */ 'EG' /*, 'EGY', 'Al Jīzah', 'admin', 5598402, 1818925479, 'Africa', 'Northern Africa'*/,
  ],
  [
    'Abidjan',
    /* 'Abidjan',*/ 5.3167,
    -4.0333,
    /*, 'Côte d’Ivoire', */ 'CI' /*, 'CIV', 'Abidjan', 'primary', 4980000, 1384207980, 'Africa', 'Western Africa'*/,
  ],
  [
    'Cape Town',
    /* 'Cape Town',*/ -33.9253,
    18.4239,
    /*, 'South Africa', */ 'ZA' /*, 'ZAF', 'Western Cape', 'primary', 4770313, 1710680650, 'Africa', 'Southern Africa'*/,
  ],
  [
    'Bamako',
    /* 'Bamako',*/ 12.6392,
    -8.0028,
    /*, 'Mali', */ 'ML' /*, 'MLI', 'Bamako', 'primary', 4227569, 1466965925, 'Africa', 'Western Africa'*/,
  ],
  [
    'Abuja',
    /* 'Abuja',*/ 9.0667,
    7.4833,
    /*, 'Nigeria', */ 'NG' /*, 'NGA', 'Federal Capital Territory', 'primary', 3770000, 1566342270, 'Africa', 'Western Africa'*/,
  ],
  [
    'Ibadan',
    /* 'Ibadan',*/ 7.3964,
    3.9167,
    /*, 'Nigeria', */ 'NG' /*, 'NGA', 'Oyo', 'admin', 3552000, 1566366407, 'Africa', 'Western Africa'*/,
  ],
  [
    'Addis Ababa',
    /* 'Addis Ababa',*/ 9.03,
    38.74,
    /*, 'Ethiopia', */ 'ET' /*, 'ETH', 'Ādīs Ābeba', 'primary', 3041002, 1231824991, 'Africa', 'Eastern Africa'*/,
  ],
  [
    'Mbuji-Mayi',
    /* 'Mbuji-Mayi',*/ -6.15,
    23.6,
    /*, 'Congo (Kinshasa)', */ 'CD' /*, 'COD', 'Kasaï Oriental', 'admin', 2892000, 1180399586, 'Africa', 'Central Africa'*/,
  ],
  [
    'Mogadishu',
    /* 'Mogadishu',*/ 2.0392,
    45.3419,
    /*, 'Somalia', */ 'SO' /*, 'SOM', 'Banaadir', 'primary', 2610483, 1706893395, 'Africa', 'Eastern Africa'*/,
  ],
  [
    'Lusaka',
    /* 'Lusaka',*/ -15.4167,
    28.2833,
    /*, 'Zambia', */ 'ZM' /*, 'ZMB', 'Lusaka', 'primary', 2467563, 1894157390, 'Africa', 'Southern Africa'*/,
  ],
  [
    'Antananarivo',
    /* 'Antananarivo',*/ -18.91,
    47.525,
    /*, 'Madagascar', */ 'MG' /*, 'MDG', 'Antananarivo', 'primary', 2300000, 1450978461, 'Africa', 'Indian Ocean'*/,
  ],
  [
    'Awka',
    /* 'Awka',*/ 6.2069,
    7.0678,
    /*, 'Nigeria', */ 'NG' /*, 'NGA', 'Anambra', 'admin', 2171900, 1566560581, 'Africa', 'Western Africa'*/,
  ],
  [
    'Bamenda',
    /* 'Bamenda',*/ 5.9614,
    10.1517,
    /*, 'Cameroon', */ 'CM' /*, 'CMR', 'North-West', 'admin', 2000000, 1120909610, 'Africa', 'Western Africa'*/,
  ],
];

const asia: CityTuple[] = [
  [
    'Tokyo',
    /* 'Tokyo',*/ 35.6897,
    139.6922,
    /*, 'Japan', */ 'JP' /*, 'JPN', 'Tōkyō', 'primary', 37732000, 1392685764, 'Asia', 'East Asia'*/,
  ],
  [
    'Delhi',
    /* 'Delhi',*/ 28.61,
    77.23,
    /*, 'India', */ 'IN' /*, 'IND', 'Delhi', 'admin', 32226000, 1356872604, 'Asia', 'South Asia'*/,
  ],
  [
    'Manila',
    /* 'Manila',*/ 14.5958,
    120.9772,
    /*, 'Philippines', */ 'PH' /*, 'PHL', 'Manila', 'primary', 24922000, 1608618140, 'Asia', 'South East Asia'*/,
  ],
  [
    'Dhaka',
    /* 'Dhaka',*/ 23.7639,
    90.3889,
    /*, 'Bangladesh', */ 'BD' /*, 'BGD', 'Dhaka', 'primary', 18627000, 1050529279, 'Asia', 'South Asia'*/,
  ],
  [
    'Moscow',
    /* 'Moscow',*/ 55.7558,
    37.6172,
    /*, 'Russia', */ 'RU' /*, 'RUS', 'Moskva', 'primary', 17332000, 1643318494, 'Asia', 'Northern Asia'*/,
  ],
  [
    'Ho Chi Minh City',
    /* 'Ho Chi Minh City',*/ 10.7756,
    106.7019,
    /*, 'Vietnam', */ 'VN' /*, 'VNM', 'Hồ Chí Minh', 'admin', 15136000, 1704774326, 'Asia', 'South East Asia'*/,
  ],
  [
    'Xi’an',
    /* 'Xi'an',*/ 34.2611,
    108.9422,
    /*, 'China', */ 'CN' /*, 'CHN', 'Shaanxi', 'admin', 12328000, 1156244079, 'Asia', 'East Asia'*/,
  ],
  [
    'Dongguan',
    /* 'Dongguan',*/ 23.021,
    113.752,
    /*, 'China', */ 'CN' /*, 'CHN', 'Guangdong', 'minor', 10646000, 1156478242, 'Asia', 'East Asia'*/,
  ],
  [
    'Tongshan',
    /* 'Tongshan',*/ 34.204,
    117.284,
    /*, 'China', */ 'CN' /*, 'CHN', 'Jiangsu', 'minor', 9083790, 1156241678, 'Asia', 'East Asia'*/,
  ],
  [
    'Jining',
    /* 'Jining',*/ 35.4151,
    116.5871,
    /*, 'China', */ 'CN' /*, 'CHN', 'Shandong', '', 8357897, 1156504601, 'Asia', 'East Asia'*/,
  ],
  [
    'Cangzhou',
    /* 'Cangzhou',*/ 38.3047,
    116.8387,
    /*, 'China', */ 'CN' /*, 'CHN', 'Hebei', 'minor', 7300783, 1156698069, 'Asia', 'East Asia'*/,
  ],
  [
    'Shaoyang',
    /* 'Shaoyang',*/ 27.2395,
    111.4679,
    /*, 'China', */ 'CN' /*, 'CHN', 'Hunan', '', 6563520, 1156310366, 'Asia', 'East Asia'*/,
  ],
  [
    'Dalian',
    /* 'Dalian',*/ 38.9,
    121.6,
    /*, 'China', */ 'CN' /*, 'CHN', 'Liaoning', '', 5871474, 1156175472, 'Asia', 'East Asia'*/,
  ],
  [
    'Ankara',
    /* 'Ankara',*/ 39.93,
    32.85,
    /*, 'Turkey', */ 'TR' /*, 'TUR', 'Ankara', 'primary', 5503985, 1792572891, 'Asia', 'South West Asia'*/,
  ],
  [
    'Zhangzhou',
    /* 'Zhangzhou',*/ 24.513,
    117.647,
    /*, 'China', */ 'CN' /*, 'CHN', 'Fujian', 'minor', 5054328, 1156241637, 'Asia', 'East Asia'*/,
  ],
  [
    'Changsha',
    /* 'Changsha',*/ 28.228,
    112.939,
    /*, 'China', */ 'CN' /*, 'CHN', 'Hunan', 'admin', 4766296, 1156961497, 'Asia', 'East Asia'*/,
  ],
  [
    'Ürümqi',
    /* 'Urumqi',*/ 43.8225,
    87.6125,
    /*, 'China', */ 'CN' /*, 'CHN', 'Xinjiang', 'admin', 4335017, 1156051276, 'Asia', 'East Asia'*/,
  ],
  [
    'Ningbo',
    /* 'Ningbo',*/ 29.8603,
    121.6245,
    /*, 'China', */ 'CN' /*, 'CHN', 'Zhejiang', 'minor', 4087523, 1156170787, 'Asia', 'East Asia'*/,
  ],
  [
    'Suihua',
    /* 'Suihua',*/ 46.654,
    126.969,
    /*, 'China', */ 'CN' /*, 'CHN', 'Heilongjiang', 'minor', 3756167, 1156235493, 'Asia', 'East Asia'*/,
  ],
  [
    'Deyang',
    /* 'Deyang',*/ 31.127,
    104.398,
    /*, 'China', */ 'CN' /*, 'CHN', 'Sichuan', 'minor', 3456161, 1156127147, 'Asia', 'East Asia'*/,
  ],
];

const centralAmerica: CityTuple[] = [
  [
    'Mexico City',
    /* 'Mexico City',*/ 19.4333,
    -99.1333,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Ciudad de México', 'primary', 21804000, 1484247881, 'Americas', 'Central America'*/,
  ],
  [
    'Guadalajara',
    /* 'Guadalajara',*/ 20.6767,
    -103.3475,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Jalisco', 'admin', 5525000, 1484950208, 'Americas', 'Central America'*/,
  ],
  [
    'Monterrey',
    /* 'Monterrey',*/ 25.6667,
    -100.3,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Nuevo León', 'admin', 5341171, 1484559591, 'Americas', 'Central America'*/,
  ],
  [
    'Guatemala City',
    /* 'Guatemala City',*/ 14.6133,
    -90.5353,
    /*, 'Guatemala', */ 'GT' /*, 'GTM', 'Guatemala', 'primary', 3014000, 1320197916, 'Americas', 'Central America'*/,
  ],
  [
    'Tijuana',
    /* 'Tijuana',*/ 32.525,
    -117.0333,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Baja California', 'minor', 2002000, 1484708778, 'Americas', 'Central America'*/,
  ],
  [
    'Ecatepec',
    /* 'Ecatepec',*/ 19.6097,
    -99.06,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'México', 'minor', 1929926, 1484003694, 'Americas', 'Central America'*/,
  ],
  [
    'Tegucigalpa',
    /* 'Tegucigalpa',*/ 14.1058,
    -87.2047,
    /*, 'Honduras', */ 'HN' /*, 'HND', 'Francisco Morazán', 'primary', 1682725, 1340344059, 'Americas', 'Central America'*/,
  ],
  [
    'León de los Aldama',
    /* 'Leon de los Aldama',*/ 21.1167,
    -101.6833,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Guanajuato', 'minor', 1579803, 1484811199, 'Americas', 'Central America'*/,
  ],
  [
    'San José',
    /* 'San Jose',*/ 9.9325,
    -84.08,
    /*, 'Costa Rica', */ 'CR' /*, 'CRI', 'San José', 'primary', 1543000, 1188749877, 'Americas', 'Central America'*/,
  ],
  [
    'Panama City',
    /* 'Panama City',*/ 8.9833,
    -79.5167,
    /*, 'Panama', */ 'PA' /*, 'PAN', 'Panamá', 'primary', 1500189, 1591672475, 'Americas', 'Central America'*/,
  ],
  [
    'Juárez',
    /* 'Juarez',*/ 31.745,
    -106.485,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Chihuahua', 'minor', 1321004, 1484840083, 'Americas', 'Central America'*/,
  ],
  [
    'Comayagüela',
    /* 'Comayaguela',*/ 14.098,
    -87.21,
    /*, 'Honduras', */ 'HN' /*, 'HND', 'Francisco Morazán', '', 1250000, 1340762485, 'Americas', 'Central America'*/,
  ],
  [
    'Mexicali',
    /* 'Mexicali',*/ 32.6633,
    -115.4678,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Baja California', 'admin', 1102342, 1484788702, 'Americas', 'Central America'*/,
  ],
  [
    'Nezahualcóyotl',
    /* 'Nezahualcoyotl',*/ 19.4081,
    -99.0186,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'México', 'minor', 1077208, 1484074285, 'Americas', 'Central America'*/,
  ],
  [
    'Managua',
    /* 'Managua',*/ 12.1364,
    -86.2514,
    /*, 'Nicaragua', */ 'NI' /*, 'NIC', 'Managua', 'primary', 1051236, 1558296252, 'Americas', 'Central America'*/,
  ],
  [
    'Morelia',
    /* 'Morelia',*/ 19.7683,
    -101.1894,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Michoacán', 'admin', 1011704, 1484669072, 'Americas', 'Central America'*/,
  ],
  [
    'Aguascalientes',
    /* 'Aguascalientes',*/ 21.876,
    -102.296,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Aguascalientes', 'admin', 934424, 1484666646, 'Americas', 'Central America'*/,
  ],
  [
    'Mérida',
    /* 'Merida',*/ 20.97,
    -89.62,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Yucatán', 'admin', 892363, 1484396779, 'Americas', 'Central America'*/,
  ],
  [
    'Saltillo',
    /* 'Saltillo',*/ 25.4231,
    -100.9919,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Coahuila', 'admin', 864431, 1484107245, 'Americas', 'Central America'*/,
  ],
  [
    'Culiacán',
    /* 'Culiacan',*/ 24.8069,
    -107.3939,
    /*, 'Mexico', */ 'MX' /*, 'MEX', 'Sinaloa', 'admin', 808416, 1484516810, 'Americas', 'Central America'*/,
  ],
];

const europe: CityTuple[] = [
  [
    'London',
    /* 'London',*/ 51.5072,
    -0.1275,
    /*, 'United Kingdom', */ 'GB' /*, 'GBR', 'London, City of', 'primary', 11262000, 1826645935, 'Europe', 'Western Europe'*/,
  ],
  [
    'Madrid',
    /* 'Madrid',*/ 40.4169,
    -3.7033,
    /*, 'Spain', */ 'ES' /*, 'ESP', 'Madrid', 'primary', 6211000, 1724616994, 'Europe', 'South West Europe'*/,
  ],
  [
    'Berlin',
    /* 'Berlin',*/ 52.52,
    13.405,
    /*, 'Germany', */ 'DE' /*, 'DEU', 'Berlin', 'primary', 4890363, 1276451290, 'Europe', 'Western Europe'*/,
  ],
  [
    'Barcelona',
    /* 'Barcelona',*/ 41.3828,
    2.1769,
    /*, 'Spain', */ 'ES' /*, 'ESP', 'Catalonia', 'admin', 4800000, 1724594040, 'Europe', 'South West Europe'*/,
  ],
  [
    'Athens',
    /* 'Athens',*/ 37.9842,
    23.7281,
    /*, 'Greece', */ 'GR' /*, 'GRC', 'Attikí', 'primary', 3059764, 1300715560, 'Europe', 'South East Europe'*/,
  ],
  [
    'Budapest',
    /* 'Budapest',*/ 47.4925,
    19.0514,
    /*, 'Hungary', */ 'HU' /*, 'HUN', 'Budapest', 'primary', 2997958, 1348611435, 'Europe', 'Central Europe'*/,
  ],
  [
    'Birmingham',
    /* 'Birmingham',*/ 52.48,
    -1.9025,
    /*, 'United Kingdom', */ 'GB' /*, 'GBR', 'Birmingham', '', 2919600, 1826423213, 'Europe', 'Western Europe'*/,
  ],
  [
    'Stuttgart',
    /* 'Stuttgart',*/ 48.7775,
    9.18,
    /*, 'Germany', */ 'DE' /*, 'DEU', 'Baden-Württemberg', 'admin', 2787724, 1276171358, 'Europe', 'Western Europe'*/,
  ],
  [
    'Munich',
    /* 'Munich',*/ 48.1375,
    11.575,
    /*, 'Germany', */ 'DE' /*, 'DEU', 'Bavaria', 'admin', 2606021, 1276692352, 'Europe', 'Western Europe'*/,
  ],
  [
    'Hamburg',
    /* 'Hamburg',*/ 53.55,
    10,
    /*, 'Germany', */ 'DE' /*, 'DEU', 'Hamburg', 'admin', 2484800, 1276041799, 'Europe', 'Western Europe'*/,
  ],
  [
    'Bucharest',
    /* 'Bucharest',*/ 44.4325,
    26.1039,
    /*, 'Romania', */ 'RO' /*, 'ROU', 'Bucureşti', 'primary', 2412530, 1642414442, 'Europe', 'South East Europe'*/,
  ],
  [
    'Vienna',
    /* 'Vienna',*/ 48.2083,
    16.3725,
    /*, 'Austria', */ 'AT' /*, 'AUT', 'Wien', 'primary', 2223236, 1040261752, 'Europe', 'Central Europe'*/,
  ],
  [
    'Stockholm',
    /* 'Stockholm',*/ 59.3294,
    18.0686,
    /*, 'Sweden', */ 'SE' /*, 'SWE', 'Stockholm', 'primary', 2121000, 1752425602, 'Europe', 'Northern Europe'*/,
  ],
  [
    'Minsk',
    /* 'Minsk',*/ 53.9,
    27.5667,
    /*, 'Belarus', */ 'BY' /*, 'BLR', 'Minsk', 'primary', 1995471, 1112348503, 'Europe', 'Eastern Europe'*/,
  ],
  [
    'Warsaw',
    /* 'Warsaw',*/ 52.23,
    21.0111,
    /*, 'Poland', */ 'PL' /*, 'POL', 'Mazowieckie', 'primary', 1860281, 1616024847, 'Europe', 'Eastern Europe'*/,
  ],
  [
    'Valencia',
    /* 'Valencia',*/ 39.47,
    -0.3764,
    /*, 'Spain', */ 'ES' /*, 'ESP', 'Valencia', 'admin', 1595000, 1724981666, 'Europe', 'South West Europe'*/,
  ],
  [
    'Amsterdam',
    /* 'Amsterdam',*/ 52.3728,
    4.8936,
    /*, 'Netherlands', */ 'NL' /*, 'NLD', 'Noord-Holland', 'primary', 1459402, 1528355309, 'Europe', 'Western Europe'*/,
  ],
  [
    'Copenhagen',
    /* 'Copenhagen',*/ 55.6761,
    12.5683,
    /*, 'Denmark', */ 'DK' /*, 'DNK', 'Hovedstaden', 'primary', 1366301, 1208763942, 'Europe', 'Northern Europe'*/,
  ],
  [
    'Porto',
    /* 'Porto',*/ 41.1621,
    -8.622,
    /*, 'Portugal', */ 'PT' /*, 'PRT', 'Porto', 'admin', 1278210, 1620356810, 'Europe', 'South West Europe'*/,
  ],
  [
    'Brussels',
    /* 'Brussels',*/ 50.8467,
    4.3525,
    /*, 'Belgium', */ 'BE' /*, 'BEL', 'Brussels-Capital Region', 'primary', 1235192, 1056469830, 'Europe', 'Western Europe'*/,
  ],
];

const northAmerica: CityTuple[] = [
  [
    'New York',
    /* 'New York',*/ 40.6943,
    -73.9249,
    /*, 'United States', */ 'US' /*, 'USA', 'New York', '', 18908608, 1840034016, 'Americas', 'North America'*/,
  ],
  [
    'Los Angeles',
    /* 'Los Angeles',*/ 34.1141,
    -118.4068,
    /*, 'United States', */ 'US' /*, 'USA', 'California', '', 11922389, 1840020491, 'Americas', 'North America'*/,
  ],
  [
    'Chicago',
    /* 'Chicago',*/ 41.8375,
    -87.6866,
    /*, 'United States', */ 'US' /*, 'USA', 'Illinois', '', 8497759, 1840000494, 'Americas', 'North America'*/,
  ],
  [
    'Miami',
    /* 'Miami',*/ 25.784,
    -80.2101,
    /*, 'United States', */ 'US' /*, 'USA', 'Florida', '', 6080145, 1840015149, 'Americas', 'North America'*/,
  ],
  [
    'Dallas',
    /* 'Dallas',*/ 32.7935,
    -96.7667,
    /*, 'United States', */ 'US' /*, 'USA', 'Texas', '', 5830932, 1840019440, 'Americas', 'North America'*/,
  ],
  [
    'Philadelphia',
    /* 'Philadelphia',*/ 40.0077,
    -75.1339,
    /*, 'United States', */ 'US' /*, 'USA', 'Pennsylvania', '', 5683533, 1840000673, 'Americas', 'North America'*/,
  ],
  [
    'Atlanta',
    /* 'Atlanta',*/ 33.7628,
    -84.422,
    /*, 'United States', */ 'US' /*, 'USA', 'Georgia', 'admin', 5180179, 1840013660, 'Americas', 'North America'*/,
  ],
  [
    'Boston',
    /* 'Boston',*/ 42.3188,
    -71.0852,
    /*, 'United States', */ 'US' /*, 'USA', 'Massachusetts', 'admin', 4328315, 1840000455, 'Americas', 'North America'*/,
  ],
  [
    'Phoenix',
    /* 'Phoenix',*/ 33.5722,
    -112.0892,
    /*, 'United States', */ 'US' /*, 'USA', 'Arizona', 'admin', 4064275, 1840020568, 'Americas', 'North America'*/,
  ],
  [
    'Detroit',
    /* 'Detroit',*/ 42.3834,
    -83.1024,
    /*, 'United States', */ 'US' /*, 'USA', 'Michigan', '', 3725908, 1840003971, 'Americas', 'North America'*/,
  ],
  [
    'Seattle',
    /* 'Seattle',*/ 47.6211,
    -122.3244,
    /*, 'United States', */ 'US' /*, 'USA', 'Washington', '', 3561397, 1840021117, 'Americas', 'North America'*/,
  ],
  [
    'San Francisco',
    /* 'San Francisco',*/ 37.7558,
    -122.4449,
    /*, 'United States', */ 'US' /*, 'USA', 'California', '', 3364979, 1840021543, 'Americas', 'North America'*/,
  ],
  [
    'San Diego',
    /* 'San Diego',*/ 32.8313,
    -117.1222,
    /*, 'United States', */ 'US' /*, 'USA', 'California', '', 3046560, 1840021990, 'Americas', 'North America'*/,
  ],
  [
    'Minneapolis',
    /* 'Minneapolis',*/ 44.9635,
    -93.2678,
    /*, 'United States', */ 'US' /*, 'USA', 'Minnesota', '', 2892569, 1840007830, 'Americas', 'North America'*/,
  ],
  [
    'Brooklyn',
    /* 'Brooklyn',*/ 40.6501,
    -73.9496,
    /*, 'United States', */ 'US' /*, 'USA', 'New York', '', 2736074, 1840034030, 'Americas', 'North America'*/,
  ],
  [
    'Vancouver',
    /* 'Vancouver',*/ 49.25,
    -123.1,
    /*, 'Canada', */ 'CA' /*, 'CAN', 'British Columbia', '', 2426160, 1124825478, 'Americas', 'North America'*/,
  ],
  [
    'Riverside',
    /* 'Riverside',*/ 33.9381,
    -117.3949,
    /*, 'United States', */ 'US' /*, 'USA', 'California', '', 2332836, 1840020551, 'Americas', 'North America'*/,
  ],
  [
    'Baltimore',
    /* 'Baltimore',*/ 39.3051,
    -76.6144,
    /*, 'United States', */ 'US' /*, 'USA', 'Maryland', '', 2196524, 1840001592, 'Americas', 'North America'*/,
  ],
  [
    'Portland',
    /* 'Portland',*/ 45.5371,
    -122.65,
    /*, 'United States', */ 'US' /*, 'USA', 'Oregon', '', 2095808, 1840019941, 'Americas', 'North America'*/,
  ],
  [
    'Sacramento',
    /* 'Sacramento',*/ 38.5677,
    -121.4685,
    /*, 'United States', */ 'US' /*, 'USA', 'California', 'admin', 1957738, 1840021491, 'Americas', 'North America'*/,
  ],
];

const oceania: CityTuple[] = [
  [
    'Melbourne',
    /* 'Melbourne',*/ -37.8142,
    144.9631,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'Victoria', 'admin', 5031195, 1036533631, 'Oceania', 'Pacific'*/,
  ],
  [
    'Sydney',
    /* 'Sydney',*/ -33.8678,
    151.21,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'New South Wales', 'admin', 4840600, 1036074917, 'Oceania', 'Pacific'*/,
  ],
  [
    'Brisbane',
    /* 'Brisbane',*/ -27.4678,
    153.0281,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'Queensland', 'admin', 2360241, 1036192929, 'Oceania', 'Pacific'*/,
  ],
  [
    'Perth',
    /* 'Perth',*/ -31.9559,
    115.8606,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'Western Australia', 'admin', 2141834, 1036178956, 'Oceania', 'Pacific'*/,
  ],
  [
    'Auckland',
    /* 'Auckland',*/ -36.8406,
    174.74,
    /*, 'New Zealand', */ 'NZ' /*, 'NZL', 'Auckland', 'admin', 1346091, 1554435911, 'Oceania', 'Pacific'*/,
  ],
  [
    'Adelaide',
    /* 'Adelaide',*/ -34.9275,
    138.6,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'South Australia', 'admin', 1295714, 1036538171, 'Oceania', 'Pacific'*/,
  ],
  [
    'Port Moresby',
    /* 'Port Moresby',*/ -9.4789,
    147.1494,
    /*, 'Papua New Guinea', */ 'PG' /*, 'PNG', 'National Capital', 'primary', 700000, 1598685395, 'Oceania', 'Pacific'*/,
  ],
  [
    'Gold Coast',
    /* 'Gold Coast',*/ -28.0167,
    153.4,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'Queensland', '', 607665, 1036153217, 'Oceania', 'Pacific'*/,
  ],
  [
    'Cranbourne',
    /* 'Cranbourne',*/ -38.0996,
    145.2834,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'Victoria', '', 460491, 1036685862, 'Oceania', 'Pacific'*/,
  ],
  [
    'Christchurch',
    /* 'Christchurch',*/ -43.531,
    172.6365,
    /*, 'New Zealand', */ 'NZ' /*, 'NZL', 'Canterbury', 'admin', 383200, 1554377228, 'Oceania', 'Pacific'*/,
  ],
  [
    'Manukau City',
    /* 'Manukau City',*/ -37,
    174.885,
    /*, 'New Zealand', */ 'NZ' /*, 'NZL', 'Auckland', '', 375600, 1554797148, 'Oceania', 'Pacific'*/,
  ],
  [
    'Central Coast',
    /* 'Central Coast',*/ -33.3,
    151.2,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'New South Wales', '', 346596, 1036067845, 'Oceania', 'Pacific'*/,
  ],
  [
    'Wollongong',
    /* 'Wollongong',*/ -34.4331,
    150.8831,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'New South Wales', '', 261896, 1036502269, 'Oceania', 'Pacific'*/,
  ],
  [
    'Ipswich',
    /* 'Ipswich',*/ -27.6144,
    152.7608,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'Queensland', '', 232930, 1036244388, 'Oceania', 'Pacific'*/,
  ],
  [
    'Wellington',
    /* 'Wellington',*/ -41.2889,
    174.7772,
    /*, 'New Zealand', */ 'NZ' /*, 'NZL', 'Wellington', 'primary', 216200, 1554772152, 'Oceania', 'Pacific'*/,
  ],
  [
    'Northcote',
    /* 'Northcote',*/ -36.8019,
    174.7494,
    /*, 'New Zealand', */ 'NZ' /*, 'NZL', 'Auckland', '', 205605, 1554717659, 'Oceania', 'Pacific'*/,
  ],
  [
    'Hobart',
    /* 'Hobart',*/ -42.8806,
    147.325,
    /*, 'Australia', */ 'AU' /*, 'AUS', 'Tasmania', 'admin', 197451, 1036679838, 'Oceania', 'Pacific'*/,
  ],
  [
    'Lae',
    /* 'Lae',*/ -6.7303,
    147.0008,
    /*, 'Papua New Guinea', */ 'PG' /*, 'PNG', 'Morobe', 'admin', 193000, 1598466091, 'Oceania', 'Pacific'*/,
  ],
  [
    'Suva',
    /* 'Suva',*/ -18.1416,
    178.4419,
    /*, 'Fiji', */ 'FJ' /*, 'FJI', 'Rewa', 'primary', 185913, 1242615095, 'Oceania', 'Pacific'*/,
  ],
  [
    'Nouméa',
    /* 'Noumea',*/ -22.2758,
    166.458,
    /*, 'New Caledonia', */ 'NC' /*, 'NCL', 'Province Sud', 'primary', 182341, 1540958092, 'Oceania', 'Pacific'*/,
  ],
];

const southAmerica: CityTuple[] = [
  [
    'São Paulo',
    /* 'Sao Paulo',*/ -23.55,
    -46.6333,
    /*, 'Brazil', */ 'BR' /*, 'BRA', 'São Paulo', 'admin', 23086000, 1076532519, 'Americas', 'South America'*/,
  ],
  [
    'Buenos Aires',
    /* 'Buenos Aires',*/ -34.6033,
    -58.3817,
    /*, 'Argentina', */ 'AR' /*, 'ARG', 'Buenos Aires, Ciudad Autónoma de', 'primary', 16710000, 1032717330, 'Americas', 'South America'*/,
  ],
  [
    'Rio de Janeiro',
    /* 'Rio de Janeiro',*/ -22.9111,
    -43.2056,
    /*, 'Brazil', */ 'BR' /*, 'BRA', 'Rio de Janeiro', 'admin', 12592000, 1076887657, 'Americas', 'South America'*/,
  ],
  [
    'Lima',
    /* 'Lima',*/ -12.06,
    -77.0375,
    /*, 'Peru', */ 'PE' /*, 'PER', 'Lima', 'primary', 10320000, 1604728603, 'Americas', 'South America'*/,
  ],
  [
    'Bogotá',
    /* 'Bogota',*/ 4.7111,
    -74.0722,
    /*, 'Colombia', */ 'CO' /*, 'COL', 'Bogotá', 'primary', 7968095, 1170483426, 'Americas', 'South America'*/,
  ],
  [
    'Santiago',
    /* 'Santiago',*/ -33.4372,
    -70.6506,
    /*, 'Chile', */ 'CL' /*, 'CHL', 'Región Metropolitana', 'primary', 7171000, 1152554349, 'Americas', 'South America'*/,
  ],
  [
    'Belo Horizonte',
    /* 'Belo Horizonte',*/ -19.9167,
    -43.9333,
    /*, 'Brazil', */ 'BR' /*, 'BRA', 'Minas Gerais', 'admin', 5328000, 1076967355, 'Americas', 'South America'*/,
  ],
  [
    'Fortaleza',
    /* 'Fortaleza',*/ -3.7275,
    -38.5275,
    /*, 'Brazil', */ 'BR' /*, 'BRA', 'Ceará', 'admin', 4167996, 1076567885, 'Americas', 'South America'*/,
  ],
  [
    'Santa Cruz de la Sierra',
    /* 'Santa Cruz de la Sierra',*/ -17.7892,
    -63.1975,
    /*, 'Bolivia', */ 'BO' /*, 'BOL', 'Santa Cruz', '', 3151676, 1068005036, 'Americas', 'South America'*/,
  ],
  [
    'La Paz',
    /* 'La Paz',*/ -16.4958,
    -68.1333,
    /*, 'Bolivia', */ 'BO' /*, 'BOL', 'La Paz', 'primary', 2867504, 1068000064, 'Americas', 'South America'*/,
  ],
  [
    'Guayaquil',
    /* 'Guayaquil',*/ -2.19,
    -79.8875,
    /*, 'Ecuador', */ 'EC' /*, 'ECU', 'Guayas', 'admin', 2650288, 1218802178, 'Americas', 'South America'*/,
  ],
  [
    'Medellín',
    /* 'Medellin',*/ 6.2308,
    -75.5906,
    /*, 'Colombia', */ 'CO' /*, 'COL', 'Antioquia', 'admin', 2529403, 1170680389, 'Americas', 'South America'*/,
  ],
  [
    'Salvador',
    /* 'Salvador',*/ -12.9747,
    -38.4767,
    /*, 'Brazil', */ 'BR' /*, 'BRA', 'Bahia', 'admin', 2418005, 1076923789, 'Americas', 'South America'*/,
  ],
  [
    'Caracas',
    /* 'Caracas',*/ 10.4806,
    -66.9036,
    /*, 'Venezuela', */ 'VE' /*, 'VEN', 'Distrito Capital', 'primary', 2245744, 1862748204, 'Americas', 'South America'*/,
  ],
  [
    'Córdoba',
    /* 'Cordoba',*/ -31.4167,
    -64.1833,
    /*, 'Argentina', */ 'AR' /*, 'ARG', 'Córdoba', 'admin', 2106734, 1032803249, 'Americas', 'South America'*/,
  ],
  [
    'Santos',
    /* 'Santos',*/ -23.9369,
    -46.325,
    /*, 'Brazil', */ 'BR' /*, 'BRA', 'São Paulo', '', 1897551, 1076033299, 'Americas', 'South America'*/,
  ],
  [
    'Curitiba',
    /* 'Curitiba',*/ -25.4297,
    -49.2711,
    /*, 'Brazil', */ 'BR' /*, 'BRA', 'Paraná', 'admin', 1773733, 1076701712, 'Americas', 'South America'*/,
  ],
  [
    'Maracaibo',
    /* 'Maracaibo',*/ 10.6333,
    -71.6333,
    /*, 'Venezuela', */ 'VE' /*, 'VEN', 'Zulia', 'admin', 1551539, 1862072711, 'Americas', 'South America'*/,
  ],
  [
    'Recife',
    /* 'Recife',*/ -8.05,
    -34.9,
    /*, 'Brazil', */ 'BR' /*, 'BRA', 'Pernambuco', 'admin', 1488920, 1076137337, 'Americas', 'South America'*/,
  ],
  [
    'Porto Alegre',
    /* 'Porto Alegre',*/ -30.0331,
    -51.23,
    /*, 'Brazil', */ 'BR' /*, 'BRA', 'Rio Grande do Sul', 'admin', 1332570, 1076658221, 'Americas', 'South America'*/,
  ],
];

const westIndies: CityTuple[] = [
  [
    'Havana',
    /* 'Havana',*/ 23.1367,
    -82.3589,
    /*, 'Cuba', */ 'CU' /*, 'CUB', 'La Habana', 'primary', 2089532, 1192752771, 'Americas', 'West Indies'*/,
  ],
  [
    'San Juan',
    /* 'San Juan',*/ 18.3985,
    -66.061,
    /*, 'Puerto Rico', */ 'PR' /*, 'PRI', 'Puerto Rico', 'primary', 1814587, 1630035577, 'Americas', 'West Indies'*/,
  ],
  [
    'Santiago',
    /* 'Santiago',*/ 19.4572,
    -70.6889,
    /*, 'Dominican Republic', */ 'DO' /*, 'DOM', 'Cibao Norte', 'admin', 1343423, 1214985348, 'Americas', 'West Indies'*/,
  ],
  [
    'Santo Domingo',
    /* 'Santo Domingo',*/ 18.4667,
    -69.95,
    /*, 'Dominican Republic', */ 'DO' /*, 'DOM', 'Ozama', 'primary', 1128678, 1214636202, 'Americas', 'West Indies'*/,
  ],
  [
    'Port-au-Prince',
    /* 'Port-au-Prince',*/ 18.5333,
    -72.3333,
    /*, 'Haiti', */ 'HT' /*, 'HTI', 'Ouest', 'primary', 987310, 1332401940, 'Americas', 'West Indies'*/,
  ],
  [
    'Santo Domingo Este',
    /* 'Santo Domingo Este',*/ 18.4855,
    -69.8734,
    /*, 'Dominican Republic', */ 'DO' /*, 'DOM', 'Ozama', 'admin', 948855, 1214664832, 'Americas', 'West Indies'*/,
  ],
  [
    'Kingston',
    /* 'Kingston',*/ 17.9714,
    -76.7931,
    /*, 'Jamaica', */ 'JM' /*, 'JAM', 'Kingston', 'primary', 580000, 1388709177, 'Americas', 'West Indies'*/,
  ],
  [
    'Carrefour',
    /* 'Carrefour',*/ 18.5344,
    -72.4094,
    /*, 'Haiti', */ 'HT' /*, 'HTI', 'Ouest', '', 511345, 1332000098, 'Americas', 'West Indies'*/,
  ],
  [
    'Santiago de Cuba',
    /* 'Santiago de Cuba',*/ 20.0217,
    -75.8294,
    /*, 'Cuba', */ 'CU' /*, 'CUB', 'Santiago de Cuba', 'admin', 451528, 1192766111, 'Americas', 'West Indies'*/,
  ],
  [
    'Pétion-Ville',
    /* 'Petion-Ville',*/ 18.5128,
    -72.2864,
    /*, 'Haiti', */ 'HT' /*, 'HTI', 'Ouest', '', 359615, 1332051873, 'Americas', 'West Indies'*/,
  ],
  [
    'Holguín',
    /* 'Holguin',*/ 20.8869,
    -76.2592,
    /*, 'Cuba', */ 'CU' /*, 'CUB', 'Holguín', 'admin', 350191, 1192920574, 'Americas', 'West Indies'*/,
  ],
  [
    'Gonaïves',
    /* 'Gonaives',*/ 19.4456,
    -72.6883,
    /*, 'Haiti', */ 'HT' /*, 'HTI', 'Artibonite', 'admin', 324043, 1332384588, 'Americas', 'West Indies'*/,
  ],
  [
    'Camagüey',
    /* 'Camaguey',*/ 21.3839,
    -77.9075,
    /*, 'Cuba', */ 'CU' /*, 'CUB', 'Camagüey', 'admin', 321992, 1192667983, 'Americas', 'West Indies'*/,
  ],
  [
    'Puerto Plata',
    /* 'Puerto Plata',*/ 19.8,
    -70.6833,
    /*, 'Dominican Republic', */ 'DO' /*, 'DOM', 'Cibao Norte', 'minor', 318419, 1214279422, 'Americas', 'West Indies'*/,
  ],
  [
    'Croix-des-Bouquets',
    /* 'Croix-des-Bouquets',*/ 18.5761,
    -72.2269,
    /*, 'Haiti', */ 'HT' /*, 'HTI', 'Ouest', '', 284812, 1332000065, 'Americas', 'West Indies'*/,
  ],
  [
    'Nassau',
    /* 'Nassau',*/ 25.0781,
    -77.3386,
    /*, 'Bahamas, The', */ 'BS' /*, 'BHS', '', 'primary', 274400, 1044318561, 'Americas', 'West Indies'*/,
  ],
  [
    'Fort-de-France',
    /* 'Fort-de-France',*/ 14.6,
    -61.0667,
    /*, 'Martinique', */ 'MQ' /*, 'MTQ', '', 'primary', 253995, 1474969110, 'Americas', 'West Indies'*/,
  ],
  [
    'Higüey',
    /* 'Higuey',*/ 18.6167,
    -68.7,
    /*, 'Dominican Republic', */ 'DO' /*, 'DOM', 'Yuma', 'minor', 251243, 1214313712, 'Americas', 'West Indies'*/,
  ],
  [
    'Santa Clara',
    /* 'Santa Clara',*/ 22.4069,
    -79.9649,
    /*, 'Cuba', */ 'CU' /*, 'CUB', 'Villa Clara', 'admin', 247436, 1192329773, 'Americas', 'West Indies'*/,
  ],
  [
    'Bayamo',
    /* 'Bayamo',*/ 20.3817,
    -76.6428,
    /*, 'Cuba', */ 'CU' /*, 'CUB', 'Granma', 'admin', 235107, 1192297857, 'Americas', 'West Indies'*/,
  ],
];

export const regions = [
  centralAmerica,
  westIndies,
  africa,
  asia,
  europe,
  northAmerica,
  oceania,
  southAmerica,
];

export const regionRatios = [0, 0, 5, 26, 28, 26, 9, 6];

export const totalRegionRatiosSum = regionRatios.reduce((acc, r) => acc + r, 0);

const regionRollingSums = regionRatios.reduce((acc: number[], r) => {
  const last = acc[acc.length - 1] ?? 0;
  acc.push(last + r);
  return acc;
}, []);

export const ratiosAndRegions = Array.from(
  zipWithIterable(
    regionRollingSums,
    regions,
    (neededRoll, region) => [neededRoll, region] as const,
  ),
);
