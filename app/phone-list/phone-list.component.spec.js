describe('phoneList', function() {

  //Cargamos el modulo que contiene el componente 'phoneList'
  beforeEach(module('phoneList'));

  //Testeamos el controlador
  describe('PhoneListController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('phoneList');
    }));

    it('crearemos un modelo de telefonos con 3 telefonos', function(){
      expect(ctrl.phones.length).toBe(3);
    });

    it('ponemos por defecto el valor para el orderProp', function(){
      expect(ctrl.orderProp).toBe('age');
    });
  }); 
});