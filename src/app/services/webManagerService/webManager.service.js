import {assign} from 'lodash';


export default class webManagerService {
  /*@ngInject*/
  constructor(apiUrl, $http, $window) {
    assign(this, {apiUrl, $http, $window});
  };


  sendDataDrupal(result) {
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    var jsonResult = JSON.stringify(result);
    console.log(jsonResult);
    return this.$http.post('http://dev-olmix.pantheonsite.io/evaluator/process', jsonResult, config)
    //return this.$http.post('http://test.local:8081/evaluator/process', jsonResult, config)
      .then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
    );
  }

  prepareSendLocalStorage(claves){
    for (var i = 0; i < claves.length; i++){
      console.log(claves);
      var data = this.$window.localStorage.getItem(claves[i]);
      this.sendDataLocalStorage(data, claves[i]);
    }
  }

  sendDataLocalStorage(data, key){
    var requestResult = this.sendDataDrupal(data);
    requestResult.then((request) => {
      console.log('Conexion enviado');
      this.$window.localStorage.removeItem(key);
    }, (error) => {
      this.saveData(resultado);
      console.log('Error envio');
      return {result: 'error', error: 'server'};
    });
  }
}
