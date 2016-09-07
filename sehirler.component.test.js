
describe('sehirlerList' , function () {
    beforeEach(module('sehirlerApp'));

    // Test the controller
    describe('sehirController', function() {

        it('en fazla 4 sehir eklenmelidir.', inject(function($componentController) {
            var ctrl = $componentController('sehirlerList');

            expect(ctrl.sehirler.length).toBe(4);
        }));

    });
});