import animalSelectionRun from './animalSelection.run';
import animalSelectionConfig from './animalSelection.config';
import animalSelectionControllers from './animalSelection.controllers';
import localStorageManager from './../../services/localStorageManagerService/localStorageManager.services';
import networkManagerService from './../../services/networkManagerService/networkManager.services';
import webManagerService from './../../services/webManagerService/webManager.services';

const AnimalSelectionModule = angular
    .module('olmixEvaluator.animalSelection', [
      animalSelectionControllers.name,
      'pascalprecht.translate',
      localStorageManager.name,
      webManagerService.name,
      networkManagerService.name
    ])
    .run(animalSelectionRun)
    .config(animalSelectionConfig);

export default AnimalSelectionModule;
