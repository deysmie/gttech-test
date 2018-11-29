//Code to generate a JSON string of the JUST IN news on Punch on Nov 29-2018

topstories = document.querySelectorAll('h3')
let response ={};
for(let count = 0; count < topstories.length; count++){
	response[count] = topstories[count].textContent;
}
document.write(JSON.stringify(response));

//OUTPUT IN JSON

{"0":"UNESCO adds reggae music to global cultural heritage list",
"1":"Salome Zurabishvili elected as Georgia’s first woman president",
"2":"BREAKING: Lagos CP orders posthumous trial of F-SARS operative who killed LASTMA official",
"3":"Akume never wanted me to sign anti-open grazing law — Ortom",
"4":"ICYMI: Bricklayer jailed for assaulting commercial sex worker",
"5":"Gabon president leaves Saudi hospital",
"6":"Police reopen Anambra House of Assembly",
"7":"US life expectancy drops again as drug overdose deaths climb",
"8":"ICYMI: Woman protests after rapist was granted parental access to her son",
"9":"Power supply tops Nigerians’ complaints list, says CPC",
"10":"UEFA Champions League top scorers",
"11":"Five ways to manage joint account with your spouse",
"12":"Investors lobby as PFAs invest N17bn pension funds in infrastructure",
"13":"Port Harcourt building collapse: Police arrest property owner",
"14":"Ex-Eagles star, Etuhu, stands trial in Sweden over match-fixing","15":"Punch Games"}


//Code to generate a JSON string of the TRENDING news on Punch on Nov 29-2018
trending = document.querySelectorAll('h1')
let result ={};
for(let count = 0; count < trending.length; count++){
	result[count] = trending[count].textContent;
}
document.write(JSON.stringify(result));







//OUTPUT IN JSON
{"0":"Senate okays higher institutions for President’s hometown, nine others",
"1":"Senate okays higher institutions for President’s hometown,",
"2":"EFCC hands over 116 cars, 20 houses to First Bank ",
"3":"Suspected F-SARS operative shoots LASTMA official dead",
"4":"Metele attack: Army confirms 23 soldiers killed, 31 others…",
"5":"UEFA Champions League top scorers",
"6":"Brothers behead 10-year-old for N200,000 in Lagos",
"7":"Arrest Aregbesola for forging police report, PDP tells IGP",
"8":"Metele attack: No army can have enough equipment for…",
"9":"Punch videos",
"10":"Incase you missed it",
"11":"Interviews",
"12":"Sports",
"13":"Interactive",
"14":"Education",
"15":"Entertainment",
"16":"Health",
"17":"Special Features",
"18":"Information Technology",
"19":"Editorial",
"20":"Opinion",
"21":"Sex & Relationship"}

