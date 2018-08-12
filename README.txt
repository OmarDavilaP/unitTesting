List of testing:

1.-Test initialitation, as per funcitonality, list should start with 3 persons already added.
2.-Test function addTemp, when a user do click on button [+add] it should increase the array length one array=array+1.
3.-Test function addTemp, when user start to type into the input, $scope.temp variable should be true and should add what is typing on $scope.addName
4.-Test function deleteRow, it should delete the name selected by user.
5.-Test filter search
6.-Test show button [++add], When user start to type in input text, button [+add] should appear
7.-Test hide button [++add], When user delete all content in input text, button [+add] should dissapear

DOM Testing

8.-Input type should contains the word "Another one ?".
9.-Input type should contains the word "Search". 
10.-Add Button should have value "+ add".

Please find the testing files in https://github.com/OmarDavilaP/unitTesting/tree/master/app/unit
Tool used:
    1.-Jasmine
    2.-Angular-mocks
    3.-karma-ng-html2js-preprocessor (for template testing).

Note: I have copied the code from https://codepen.io/renaudtertrais/pen/hwrqH?editors=1010 but there are a small issue with bootstrap framework not related with my code (please see console developer tool)