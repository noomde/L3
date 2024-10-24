## Kap 9
För att hålla tester funktionella så bör man ha de korta och precisa. Det är något jag vill påstå att jag har lyckats med under modulen. Det innebär att test bör testa en sak och inte flera saker. Detta tillåter mig som utvecklare att smidigt och snabbt kunna testa koden för att veta om den reagerar som jag förväntar mig. Även om mina tester endast testar t.ex en array i taget så kollar den upp en massa olika fel för att se så att den hittar rätt fel. Man skulle typ kunna säga att mina testfall kollar så att modulen kan hantera konstig indata på ett bra sätt. Dessa testfall ska bli automatiska men under skrivandet så har jag inte skapat det ännu.
### metod tester
![metoder](/img/Kap9b1.png)

### arrays att testa
![arrays](/img/Kap9b2.png)

## kap 10
För att hålla klasser bra och effektiva så är det viktigt att när man skaper en klass så har den ett mål. T.ex som i sum.js så finns den för att dela ut data till rätt plats eller som pointSystem som lägger till ett poäng när rätt event skickas (single responsibility). Något som jag har gjort dåligt är även sum.js eller mer precis statisticalComponent där den skickar ett event med window. Alltså allt får tillgång till det. Detta är dåligt då det bidrar till bägge dålig sammanhållning och koppling men även dåligt inkapsling. 
### ett ansvar
![ansvar](/img/Kap10b1.png)

### dålig inkapsling
![inkapsling](/img/Kap10b2.png)

## kap 11
För att ett system ska vara så funktionellt som möjligt så bör det vara "modulärt". Det vill säga precis som det är skrivet i boken så måste saker delas upp för att det ska funka. vi kan inte ha en stor fil med alla info där för det kommer rasa efter ett tag precis som en stad. Det förklaras även hur man bör börja litet och skala upp det. I mitt fall t.ex så har jag valt att ha det extremt simpelt men även då gjort det lätt att utveckla applikationen under senare tillfälle (scaling up). Håll det simpelt och modulärt för att kunna fortsätta utveckla systemet så mycket som möjligt.
### modulärt
![modulärt](/img/Kap11b1.png)

### simpelt
![simpelt](/img/Kap11b2.png)