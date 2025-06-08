"use strict";

// Data
// Answer 0 => good answer
const questionsJSON = "{"+
                    "   \"questions\": ["+
                    "       {"+
                    "           \"id\" : 1,"+
                    "           \"question\" : \"Z jakiego kraju pochodzi synek Tuliś?\","+
                    "           \"answer_0\" : \"Azerbejdżanu\","+
                    "           \"answer_1\" : \"Chin\","+
                    "           \"answer_2\" : \"Polski\","+
                    "           \"answer_3\" : \"Bangladeszu\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 2,"+
                    "           \"question\" : \"Jaki może być stan pupy?\","+
                    "           \"answer_0\" : \"Podwyższony\","+
                    "           \"answer_1\" : \"Rozszerzony\","+
                    "           \"answer_2\" : \"Szeroki\","+
                    "           \"answer_3\" : \"Obniżony\","+
                    "           \"author\" : \"Monika Jamny\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 3,"+
                    "           \"question\" : \"Czym odpędzałyście razem z Magdą Kopczyńską natrętną pszczołę będąc kiedyś na Kortowie?\","+
                    "           \"answer_0\" : \"Perfumami\","+
                    "           \"answer_1\" : \"Reklamówką\","+
                    "           \"answer_2\" : \"Butem\","+
                    "           \"answer_3\" : \"Piwem\","+
                    "           \"author\" : \"Magda Kopczyńska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 4,"+
                    "           \"question\" : \"Ile polubień na facebooku ma zdjęcie Magdy Kopczyńskiej wykonane przez Ciebie podczas sesji zdjęciowej na dworcu kolejowym?\","+
                    "           \"answer_0\" : \"233\","+
                    "           \"answer_1\" : \"250\","+
                    "           \"answer_2\" : \"302\","+
                    "           \"answer_3\" : \"207\","+
                    "           \"author\" : \"Magda Kopczyńska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 5,"+
                    "           \"question\" : \"Ile piw wypiłaś wraz z Magdą Kopczyńską feralnego wieczoru w którym został utopiony jej telefon?\","+
                    "           \"answer_0\" : \"11\","+
                    "           \"answer_1\" : \"9\","+
                    "           \"answer_2\" : \"10\","+
                    "           \"answer_3\" : \"12\","+
                    "           \"author\" : \"Magda Kopczyńska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 6,"+
                    "           \"question\" : \"Jak nazywa się grupa na facebooku w której zapisujesz z Pawłem Wielga wasze śmieszne powiedzenia?\","+
                    "           \"answer_0\" : \"Myśl\","+
                    "           \"answer_1\" : \"Przekręty\","+
                    "           \"answer_2\" : \"Śmieszne\","+
                    "           \"answer_3\" : \"Cytaty\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 7,"+
                    "           \"question\" : \"Przed jakim krwiożerczym zwierzęciem, z całą pewnością uciekała, dziewczyna w czerwonej sukience?\","+
                    "           \"answer_0\" : \"Indorem\","+
                    "           \"answer_1\" : \"Kogutem\","+
                    "           \"answer_2\" : \"Bykiem\","+
                    "           \"answer_3\" : \"Kaczorem\","+
                    "           \"author\" : \"Efffcik\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 8,"+
                    "           \"question\" : \"Jeden z Twoich listowych przyjaciół, możesz go spotkać także w lesie, zwłaszcza jesienią, to: \","+
                    "           \"answer_0\" : \"Grzybek\","+
                    "           \"answer_1\" : \"Kasztan\","+
                    "           \"answer_2\" : \"Żółty liść\","+
                    "           \"answer_3\" : \"Podgrzybek\","+
                    "           \"author\" : \"Karlin6191\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 9,"+
                    "           \"question\" : \"„Krowy niemowy” to tytuł:\","+
                    "           \"answer_0\" : \"Piosenki\","+
                    "           \"answer_1\" : \"Sonetu\","+
                    "           \"answer_2\" : \"Psalmu\","+
                    "           \"answer_3\" : \"Wiersza\","+
                    "           \"author\" : \"Patrycja Ogrodnik\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 10,"+
                    "           \"question\" : \"Jaką byłaś uczesana w dniu pasowania na ucznia w pierwszej klasie?\","+
                    "           \"answer_0\" : \"Kucyk\","+
                    "           \"answer_1\" : \"Warkoczyki\","+
                    "           \"answer_2\" : \"Kucyki\","+
                    "           \"answer_3\" : \"Koczek\","+
                    "           \"author\" : \"Elżbieta Chruścińska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 11,"+
                    "           \"question\" : \"Co chodziło po łóżku Patrycji Ogrodnik w Augustowie? \","+
                    "           \"answer_0\" : \"Szczypawka\","+
                    "           \"answer_1\" : \"Stonoga\","+
                    "           \"answer_2\" : \"Mucha\","+
                    "           \"answer_3\" : \"Osa\","+
                    "           \"author\" : \"Patrycja Ogrodnik\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 12,"+
                    "           \"question\" : \"Jakie testy kazałaś rozwiązywać Radkowi Romanowskiemu aby sprawdzić czy nadaje się na męża? (Niestety mimo pytań nie otrzymałem widomości z odpowiedziami)\","+
                    "           \"answer_0\" : \"Dobra odpowiedź\","+
                    "           \"answer_1\" : \"Zła odpowiedź\","+
                    "           \"answer_2\" : \"Zła odpowiedź\","+
                    "           \"answer_3\" : \"Zła odpowiedź\","+
                    "           \"author\" : \"Aneta Romanowska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 13,"+
                    "           \"question\" : \"Ilu masz followerów na Insta? (dane z dnia 19.07.2017, godzina 18:00)\","+
                    "           \"answer_0\" : \"242\","+
                    "           \"answer_1\" : \"224\","+
                    "           \"answer_2\" : \"244\","+
                    "           \"answer_3\" : \"214\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 14,"+
                    "           \"question\" : \"Ile masz zdjęć na Insta? (dane z dnia 19.07.2017, godzina 18:00)\","+
                    "           \"answer_0\" : \"256\","+
                    "           \"answer_1\" : \"220\","+
                    "           \"answer_2\" : \"311\","+
                    "           \"answer_3\" : \"249\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 15,"+
                    "           \"question\" : \"W jaki kształt układają się pieprzyki na plecach Łukasza Wielga (stan zmyślony, nie pokrywający się z rzeczywistością)\","+
                    "           \"answer_0\" : \"Świnki Pepy\","+
                    "           \"answer_1\" : \"Statku\","+
                    "           \"answer_2\" : \"Komputera\","+
                    "           \"answer_3\" : \"Niczego\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 16,"+
                    "           \"question\" : \"Duży komputer bez klawiatury to:\","+
                    "           \"answer_0\" : \"Telewizor\","+
                    "           \"answer_1\" : \"Tablet\","+
                    "           \"answer_2\" : \"Monitor\","+
                    "           \"answer_3\" : \"Duży smartfon\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 17,"+
                    "           \"question\" : \"Wytwór uboczy ogrzewania to:\","+
                    "           \"answer_0\" : \"Pierd\","+
                    "           \"answer_1\" : \"Beknięcie\","+
                    "           \"answer_2\" : \"Gorąc\","+
                    "           \"answer_3\" : \"Uf uf uf\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 18,"+
                    "           \"question\" : \"Ile lat ma Niemek Niewiadomek?\","+
                    "           \"answer_0\" : \"5\","+
                    "           \"answer_1\" : \"4\","+
                    "           \"answer_2\" : \"3\","+
                    "           \"answer_3\" : \"12\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 19,"+
                    "           \"question\" : \"Liśnik to:\","+
                    "           \"answer_0\" : \"Język\","+
                    "           \"answer_1\" : \"Licznik prądu\","+
                    "           \"answer_2\" : \"Licznik wody\","+
                    "           \"answer_3\" : \"Nos\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 20,"+
                    "           \"question\" : \"Jak przękręciłaś nazwę miejscowości Rozogi:\","+
                    "           \"answer_0\" : \"Uwaga nogi\","+
                    "           \"answer_1\" : \"Rozłóż nogi\","+
                    "           \"answer_2\" : \"Różowe nogi\","+
                    "           \"answer_3\" : \"Rozłogi\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       }"+
                    "   ]"+
                    "}";

window.questionsJSON = questionsJSON;
