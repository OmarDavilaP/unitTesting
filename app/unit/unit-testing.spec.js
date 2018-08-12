
describe("fist test",function(){
    beforeEach(module('app'));
    describe("Testing angular controller",function(){
        var ctrl,scope,$filter,$document,$contrl;
        beforeEach(function(){
            inject(function($controller,$rootScope,_$filter_,_$document_){
                scope=$rootScope.$new();
                ctrl=$controller('ctrl',{$scope:scope});
                $filter = _$filter_;
                $document = _$document_;
            });
        });

        it('Test 1: Expect to have at least 1 person added',function(){
            //Test initialitation, as per funcitonality, list should start with 3 persons already added.
            expect(scope.rows.length).toBeGreaterThan(0)
        });

        it('Test 2: Expect to add the name that the user is typing into the var "rows" and change variable "temp to true" ',function(){
            //@beforeClick: get number of array before user start to type on input.
             const beforeClick=scope.rows.length;
             //user start to type on input
             scope.addName="O";
             //call @addTemp() function simulating ng-change
             scope.addTemp();
             //@scope.rows must contains one more item into the array
             expect(scope.rows.length).toBeGreaterThan(beforeClick);
             //@scope.temp should be true to go into the conditional if($scope.temp)
             //so the next time that ng-change calls @addTemp() function will execute $scope.rows.pop();
             expect(scope.temp).toBe(true);
        });
        
        it('Test 2.1: Array should contains the last word typed by the user in var rows',function(){
            //Continuing with Test 2 logic, once user have typed the second letter 
            //scope.temp will be activated to delete the last word typed by the user from $scope.rows
            // with $scope.rows.pop() and will push the last word.
            scope.rows=['Paul','John','Lucie','O'];
            const beforeClick=scope.rows.length;
            //user typed D
            scope.addName="Om";
            scope.temp=true;
            //call @addTemp() function simulating ng-change for second letter typed 
            scope.addTemp();
            //array should contains the last word typed by the user
            expect(scope.rows.indexOf(scope.addName)).toBeGreaterThan(-1);
                
        });
        it('Test 3 function addRow should clean up scope.addName and set scope.temp in false',function(){
            //call @scope.addRow simulating click on [+add] button.
            scope.addRow();
            expect(scope.temp).toBeFalsy();
            expect(scope.addName==="").toBeTruthy()
        });

        it('Test 4: Remove name from array',function(){
            scope.rows=['Paul','John','Lucie'];
            scope.deleteRow('John');
            expect(scope.rows.indexOf('John')).toEqual(-1);
        });

        it('Test 5: Filter should return the name according to what the user is typing', function() {
            scope.rows=['Paul','John','Lucie'];
            var res = $filter('filter')(scope.rows,'P');
            expect(res).toEqual(['Paul']);
          });

        it('Test 6: When user start to type in input text, button [+add] should appear',function(){
            //user Start to type something in the input
            scope.addName="O";
            //ng change calls addTemp()
            scope.addTemp();
            //ng-show should be true otherwise the button wont be appear
            expect(!!scope.addName).toBeTruthy();
        });

        it('Test 7: Test hide button [++add], When user delete all content in input text, button [+add] should dissapear',function(){
            //user Start to type something in the input
            scope.addName="O";
            //ng change calls addTemp()
            scope.addTemp();
            //ng-show should be true otherwise the button wont be appear
            expect(!!scope.addName).toBeTruthy();
        });  

    });
});