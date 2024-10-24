## Kap 5
Kapitel 5 handlar väldigt mycket om hur man ska formattera kod. Detta bestäms I den projekt grupp man är i och är väldigt viktigt att alla håller sig till samma delar. Detta brukar innebära var och när man ska använda white spaces, indentation, alignments men även bred och längt på filer. Det är viktigt med formattering för att filer ska bli tydliga och lätta att läsa t.ex använda indentation efter varje metod eller att ha white space efter operators. Men även saker som att inte ha en if statement på samma linje utan bryta ner den.
### indentation
![indentation](/img/Kap3%20b4.png)

### bryta ner statements (t.ex if)
![nedbrytning](/img/Kap5b1.png)

### Team regler
![regler](/img/Kap5b2.png)

## Kap 6
Kapitel 6 handlar om hur det är skillnad på Objekt och data strukturer. Som t.ex ska object använda sig av data med hjälp av metoder medans data strukturer ska ändra datan genom getters och setters. Man skulle kunna påstå att mina views är en typ av data struktur där de endast ger ut info medans t.ex pointSystem är ett objekt. Det är viktigt att försöka dela upp det och inte göra hybrider då det skulle medföra en svårt utveckling både för datan och metoderna.
### objekt
![objekt](/img/Kap6b1.png)

### data struktur typ
![data struktur](/img/Kap6b2.png)

## Kap 7
Kapitel 7 handlar om hur man bör använda sig av fel hantering. En bra teknik är t.ex att skriva tester först så man vet vad det är som kan gå fel och där efter bygga upp en applikation och fel hantering. Vitkigt att hålla felhantering separat för att öka läsbarheten. Det som jag tycker är enkelt att ta upp och arbeta på är såklart att ha tydlig felhantering (Provide context). Men även så små saker som att inte returna/passa Null. Det är vanligt att man behöver arbeta specifikt mot Null pointer exception eller liknande. I mitt fall har jag inte använt mig av try/catch utan if statements för att kunna hitta flera fel om det skulle finnas.
### fel hantering
![fel hantering](/img/Kap7b1.png)

### testning
![testning](/img/Kap7b2.png)

## Kap 8
Det är viktigt att ha en tydlig gräns på t.ex moduler eller api:er. Detta för att de inte ska påverka din applikation på sett som du inte förväntat dig men även för att du ska vara den som har kontroll över det. Med andra ord är det viktigt att man inkapslar eller gömmer det så mycket som möjligt. I mitt fall så använder jag min modul för att ge mig info och svar om beräkningar. De här går inte att ändra på som användare. Om man t.ex vill använda min modul men den saknar någon del som man önskar så kan man använda sig av adapter patterns för att skapa en egen version av det sålänge. 
### inkapsling
![inkapsling](/img/Kap8b1.png)

### egen version
![egen version](/img/Kap8b2.png)