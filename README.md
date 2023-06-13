# ProjectRSMN 

## **[My Linkedin Profile :speech_balloon:	](https://www.linkedin.com/in/kkapuscinska/)**

Welcome to the "ProjectRSMN" repository! This project aims to create and execute a set of automated tests for the **[Rossmann](https://www.rossmann.pl)** web application. 
The main goal of this project is to improve my proficiency in test automation by utilizing the powerful **Cypress** testing framework. 
It has been developed solely by me, showcasing my skills and expertise in test automation.


Test scenarios
Below are some sample test scenarios that have been automated in this project:


## Login tests (5)


Test case 1 - Incorecct Login and Password
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Enter incorrect login and password
3. Click 'Zaloguj się' button
4. Verify error message

Test case 2 - Incorecct Password
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Enter correct login and incorrect password
3. Click 'Zaloguj się' button
4. Verify error message

Test case 3 - Too Short Login
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Enter one letter into the login and password fields
3. Click 'Zaloguj się' button
4. Verify error message

Test case 4 - Empty Fields
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Click 'Zaloguj się' button without entering any crudentials
3. Verify error messages

Test case 5 - Show Password Functionality
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Enter password
3. Click 'show password' option
4. Verify that the password visibility is toggled correctly


## Profile tests (29)

### Profile tab:

Test case 1 - User without any favourite products - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with empty user account
3. Go to 'Settings' page and select 'Profile' tab
4. Verify that favourite products list is empty and visible
5. Verify that Payments logos module is visible

Test case 2 - User with favourite products - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with user account that has favourite products
3. Go to 'Settings' page and select 'Profile' tab
4. Verify that only three favourite products are visible
5. Verify that Payments logos module is visible

Test case 3 - Redirecting to the list of favorite products.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Login user with user account that has favourite products
3. Go to 'Settings' page and select 'Profile' tab
4. Verify that empty favorite products list is not visible
5. Click 'Zobacz wszystkie' button
6. Verify url

### Purchase history tab:

Test case 1 - User without any orders - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with an empty user account
3. Go to Settings page and click on History tab
4. Verify visibility of the empty list and Payments logos module
5. Verify invisibility of purchase history cards

Test case 2 - User with order - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a user account that has purchase history
3. Go to Settings page and click on History tab
4. Verify visibility of payments history card and Payments logos module
5. Verify invisibility of empty list


### Favorite tab:

Test case 1 - User without any favorite products - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with an empty user account
3. Go to Settings page and click on Favourite tab
4. Verify visibility of empty list, info about 0 products and Payments logos module

Test case 2 - User with favorite products - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a user account that has favorite products
3. Go to Settings page and click on Favourite tab
4. Verify visibility of 'Dodaj produkty do koszyka' button, info about limit of favourite products, category list, promotion switch and Payments logos module
5. Verify invisibility of empty list

Test case 3 - Displaying only promotional products.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a user account that has favorite products
3. Go to Settings page and click on Favourite tab
4. Click 'Tylko w promocji' switch
5. Verify the display of promotional prices and omnibus info on all products


### Rossne tab:

Test case 1 - Non-Rossnę! Program User Checks Profile for Rossnę! Tab Absence.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with non-rossne user
3. Go to the Settings page
4. Verify invisibility of Rossne tab

Test case 2 - Rossnę! Program User - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Verify visibility of nsl rossne box, rossne program box and Payments logos module

Test case 3 - Subscribe Rossne! newsletter without confirmation checkbox check.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Click 'Zapisuję się' button in nsl rossne box
5. Verify error message

Test case 4 - Subscribe Rossne! newsletter.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Click on checkbox in nsl rossne box
5. Click 'Zapisuję się' button in nsl rossne box
6. Verify of success toast message

Test case 5 - Unsubscribe Rossnę! newsletter, cancel confirmation.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Click 'Rezygnuję' button in nsl rossne box
5. Click 'Jeszcze to przemyślę' button in resignation confirmation window
6. Verify no changes

Test case 6 - Unsubscribe Rossnę! newsletter.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Click 'Rezygnuję' button in nsl rossne box
5. Click 'Rezygnuję' button in resignation confirmation window
6. Verify of success toast message

Test case 7 - Resignation from the Rossnę! program, cancel confirmation.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Click 'Rezygnuję' button in rossne program box
5. Click 'Jeszcze to przemyślę' button in resignation confirmation window
6. Verify no changes

### Settings tab:

Test case 1 - Plain user - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with empty user account
3. Go to 'Settings' page 
4. Verify content of header and button in 'Twój sklep' module
5. Verify visibility of the 'Moje dane', 'Zmień hasło', 'Adresy' modules and 'Usuń konto' button
6. Verify that the nsl KR checkbox is unchecked 
7. Verify KR module header 

Test case 2 - User in Rossmann Club - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in as a user in Rossmann Club
3. Go to the Settings page
4. Verify visibility of 'Twój sklep', 'Moje dane', 'Zmień hasło' modules and 'Usuń konto' button
5. Verify content of headers in Rossmann Club box and Rossmann Club nsl box 
6. Verify visibility of 'Rezygnuję' button in Rossmann Club box

Test case 3 - Opening the Your Shop edition - user without Your Shop selected.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with empty user account
3. Go to 'Settings' page
4. Click 'Wybierz sklep' button in 'Twój sklep' module
5. Verify url and header of new page
6. Type city name in search field
7. Check if the list of stores is visible
8. Click 'Wróć do ustawień' button
9. Verify setting url

Test case 4 - Opening the Your Shop edition - user with Your Shop selected.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a user account that has selected a store in the 'Twój sklep' module
3. Go to Settings page 
4. Verify visibility of shop opening hourn and adress in 'Twój sklep' module
5. Click 'Edytuj' button in 'Twój sklep' module
6. Verify url and header of new page
7. Type city name in search field
8. Verify visibility of the list of stores
9. Click 'Wróć do ustawień' button
10. Verify visibility of random setting module

Test case 5 - Password Change - Validation of Password Field: Length, Letters, Numbers, Empty Fields, and Mismatched New Passwords.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to Settings page 
4. Click 'Edytuj' button in 'Zmień hasło' module
6. Verify url
7. Verifi validation for Empty Password Fields
8. Verifi validation for Invalid New Password Confirmation
9. Verifi validation for Password Length < 8 Characters
10. Verifi validation for Password Length > 64 Characters
11. Verifi validation for Password with Only Numbers
12. Verifi validation for Password with Only Letters

Test case 6 - Password Change - Toggle Password Visibility.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to Settings page 
4. Click 'Edytuj' button in 'Zmień hasło' module
6. Verify url
7. Enter value in the password fields
8. Click on the eye icon button in ech password field
9. Verify visibility of password values

Test case 7 - Adding and removing new address. 
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to Settings page 
4. Click 'Dodaj nowy adres' in 'Adresy' module
5. Verify url
6. Complete form and click 'Zapisz adres' button
7. Verify visibility of card with new adress
8. Click 'X' button in adress card
9. Verify invisibility of card with new adress

Test case 8 - Subscribe rossmann.pl newsletter without confirmation checkbox check.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in
3. Go to the Settings page
4. Click on 'Zapisuję się' button in rossmann.pl nsl box
5. Verify of validation message

Test case 9 - Subscribe rossmann.pl newsletter.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to the Settings page
4. Check checkbox and 'Zapisuję się' button in rossmann.pl nsl box
5. Verify of success toast message

Test case 10 - Subscribe Special Club newsletter without confirmation checkbox check.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in
3. Go to the Settings page
4. Click on 'Zapisuję się' button in Special Club box
5. Verify of validation message

Test case 11 - Subscribe Special Club newsletter.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to the Settings page
4. Check checkbox and 'Zapisuję się' button in Special Club box
5. Verify of success toast message

Test case 12 - Unsubscribe Special Club newsletter, cancel confirmation.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to the Settings page
4. Click 'Rezygnuję' button in Special Club nsl box
5. Click 'Jeszcze to przemyślę' button in resignation confirmation window
6. Verify no changes

Test case 13 - Unsubscribe Special Club newsletter.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to the Settings page
4. Click 'Rezygnuję' button in Special Club nsl box
5. Click 'Jeszcze to przemyślę' button in resignation confirmation window
6. Verify of success toast message

Test case 14 - Unsubscribe rossmann.pl newsletter, cancel confirmation.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to the Settings page
4. Click 'Rezygnuję' button in rossmann.pl nsl box
5. Click 'Jeszcze to przemyślę' button in resignation confirmation window
6. Verify no changes

Test case 15 - Unsubscribe rossmann.pl newsletter.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to the Settings page
4. Click 'Rezygnuję' button in rossmann.pl nsl box
5. Click 'Rezygnuję' button in resignation confirmation window
5. Verify of success toast message

Test case 16 - Resignation from the Rossmann Club, cancel confirmation.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in 
3. Go to the Settings page
4. Click 'Rezygnuję' button in Rossmann Club box
5. Click 'Jeszcze to przemyślę' button in resignation confirmation window
6. Verify no changes

### Payments tab:

Test case 1 - Sending a blank form for adding a payment card.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with empty user account
3. Go to the Settings page and select the Payments tab
4. Click on 'Karty płatnicze' card and verify url
5. Click on 'Dodaj kartę kredytową lub debetową' card and verify url
6. Verify visibility of fields: 'Numer karty', 'MM/RR' and 'CVV'
7. Click 'Dodaj kartę płatniczą' button
8. Verify error toast message



## Rossne tests (9)

### Rossne Page tests:

Test case 1 - The Rossnę! page - appearance.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Verify content of headers in Top tile and Benefit module
4. Verify visibility of 3 photos and text under photos in 'Program Rossnę! jest dla:' module
5. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Rossne Page redirects - Top tile:
Test case 1 - Redirecting to the Rossnę! promotion.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Zobacz produkty w promocji' button in 'Promocje' box in top tile
4. Verify url
5. Verify that 'Promocje Rossnę!' checkbox in Filters is checked
6. Verify display of rossne label and omnibus info on all products

Test case 2 - Redirecting to the "Oferty specjalne" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Zobacz Benefity' button in 'Benefity' box in top tile
4. Verify url
5. Verify page header
6. Verify visibility of 3 products img
7. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Test case 3 - Redirecting to the "Stera wiedzy" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Przejdź do Strefy wiedzy' button in 'Strefa wiedzy' box in top tile
4. Verify url
5. Verify page header
6. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Test case 4 - Redirecting to the "Czyściochowo" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Przejdź do Czyściochowa' button in 'Czyściochowo dla dzieci' box in top tile
4. Verify url
5. Verify page header
6. Verify visibility of 6 animation heroes
7. Verify visibility of Rossne social module, Czyściochowa akademia module and FAQ


### Rossne Page redirects - Benefits module:

Test case 1 - Redirecting to the Rossnę! promotion.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Zobacz produkty w promocji' button in 'Promocje' in 'Benefity programu' module
4. Verify url
5. Verify that the 'Promocje Rossnę!' checkbox in Filters is checked
6. Verify the display of rossne label and omnibus info on all products

Test case 2 - Redirecting to the "Oferty specjalne" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Zobacz oferty specjalne' button in 'Oferty specjalne' in 'Benefity programu' module
4. Verify url
5. Verify page header
6. Verify visibility of 3 products img
7. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Test case 3 - Redirecting to the "Stera wiedzy" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Przejdź do Strefy wiedzy' button in 'Strefa wiedzy' in 'Benefity programu' module
4. Verify url
5. Verify page header
6. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Test case 4 - Redirecting to the "Czyściochowo" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Przejdź do Czyściochowa' button in 'Czyściochowo dla dzieci' in 'Benefity programu' module
4. Verify url
5. Verify page header
6. Verify visibility of 6 animation heroes
7. Verify visibility of Rossne social module, Czyściochowa akademia module and FAQ


## Contact Page tests (8)

### Contact Page:

Test case 1 - Page loads correctly.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Verify visibility of map, company/contact information
3. Check content of company information

Test case 2 - Sending a blank contact form.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Click 'Wyślij wiadomość' button
3. Verify error messages (email, message, captcha)

Test case 3 - Validation of email, phone number and message field.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Type letter in email field
3. Type digit in phone number field
4. Type <19 characters in message field
5. Click 'Wyślij wiadomość' button
6. Verify error messages (phone number, email, message)

Test case 4 - Filling out the contact form.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Klub Rossmann" 
3. Type correct values into: First Name, Last Name, Email, Phone number, message, rossmann club card number
4. Click 'Wyślij wiadomość' button
5. Verify error messages (captcha)


### Request category - Stationary drugstore:

Test case 1 - Verify "Numer karty klubu" field in "Klub Rossmann" category.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Drogeria stacjonarna" and "Klub Rossmann" 
3. Click 'Wyślij wiadomość' button
4. Verify error messages (rossmann club card number, captcha)
5. Type letter in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
6. Verify error messages (rossmann club card number) and clear field
7. Type digit in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
8. Verify error messages (rossmann club card number)
9. Type >13 characters in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
10. Verify error messages (rossmann club card number)
11. Type correct value (13 char) and click 'Wyślij wiadomość' button
12. Verify no error message

Test case 2 - Verify "Numer karty Programu Rossnę!" field in "Program Rossnę!" category.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Drogeria stacjonarna" and "Program Rossnę!" 
3. Click 'Wyślij wiadomość' button
4. Verify error messages (rossmann club card number, captcha)
5. Type letter in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
6. Verify error messages (rossmann club card number) and clear field
7. Type digit in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
8. Verify error messages (rossmann club card number)
9. Type >13 characters in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
10. Verify error messages (rossmann club card number)
11. Type correct value (13 char) and click 'Wyślij wiadomość' button
12. Verify no error message

Test case 3 - Verify "Pytanie o produkt" category.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Drogeria stacjonarna" and "Pytanie o produkt" 
3. Click 'Wyślij wiadomość' button
4. Verify no error message
5. Verify text above 'Number katalogowy produktu' field

Test case 4 - Verify "Usługi fotograficzne Cewe/Kodak" category.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Drogeria stacjonarna" and "Usługi fotograficzne Cewe/Kodak" 
3. Verify that there is no field to enter the (card) number 

Please note that the above test cases are just examples of basic documentation for automation purpose, and more test scenarios can be added as needed.
