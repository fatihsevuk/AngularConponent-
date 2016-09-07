


angular.module('sehirlerApp').
    component('sehirlerList' ,{
        template:
            '<p>sehirlerin toplam sayısı: {{$ctrl.sehirler.length}}</p>'+
            '<ul>'+
                '<li ng-repeat="sehir in $ctrl.sehirler">'+
                '<span>sehir: {{sehir.isim}}</span>'+
                '<p>plaka: {{sehir.plaka}}</p>'+
                '</li>'+
            '</ul>',
        controller:function sehirController() {

            this.sehirler=[
                {
                    isim:'istanbul',
                    plaka:34
                },

                {
                    isim:'ankara',
                    plaka:06


                },

                {
                    isim:'izmir',
                    plaka:35


                },

                {
                    isim:'edirne',
                    plaka:22


                }
            ];

        }
});