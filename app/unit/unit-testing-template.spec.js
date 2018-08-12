
describe("Testing html elements",function(){
      beforeEach(module('myTemplates'));
    var homeTemplate,compile,scope,element;

    beforeEach(inject(function($templateCache, $compile,$controller,$rootScope) {
        homeTemplate = $templateCache.get('index.html');
        scope=$rootScope.$new();
        compile=$compile;
        element = compile(homeTemplate)(scope);
    }));

    it('Input type should contains the word "Another one ?" ',function(){ 
        expect(element.find("input").eq(0).attr("placeholder")).toEqual("Another one ?");
    });

    it('Input type should contains the word "Search" ',function(){
        expect(element.find("input").eq(2).attr("placeholder")).toEqual("Search");
    });

    it('Add Button should have value "+ add" ',function(){
        expect(element.find("button").val()).toEqual("+ add");
    });

});