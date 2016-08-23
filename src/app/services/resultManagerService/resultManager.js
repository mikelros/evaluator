import {assign} from 'lodash';

export default class resultManager {
  /*@ngInject*/
  constructor($translate){
    assign(this, {$translate});
  };

  prepareResultPercentage(evaluationResult) {
    if (evaluationResult > 95) {
      return 95;
    } else if (evaluationResult < 26) {
      return 25;
    }
    return _.round(evaluationResult);
  }

  prepareResultText(evaluationResult) {
    console.log(evaluationResult);
    if (evaluationResult <= 300 && evaluationResult >= 60) {
      return 'Riesgo alto';
    } else if (evaluationResult <= 59 && evaluationResult >= 40) {
      return 'Riesgo medio';
    } else if (evaluationResult <= 39 && evaluationResult >= 0) {
      return 'Riesgo bajo';
    }
  }
}
