import animalFieldsManagerServices from './animalFieldsManager.services';
import poultry from './../../utils/poultry';
import animals from './../../utils/animal';
import cowFields from './../../utils/fields/cowFields';
import swineFields from './../../utils/fields/swineFields';
import poultryFields from './../../utils/fields/poultryFields';

describe('animal fields manager', () => {
  var animalFieldsManager, sandbox, spy;

  before(() => {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(angular.mock.module(animalFieldsManagerServices.name));

  beforeEach(inject((_animalFieldsManager_)=> {
    animalFieldsManager = _animalFieldsManager_;
  }));

  it('should get cow fields', () => {
    var spy = sinon.spy(cowFields, 'getAllFields');

    animalFieldsManager.getFieldsFor(animals.COW);

    expect(spy.withArgs().callCount).to.be.equal(1);
  });

  it('should get swine fields', () => {
    var spy = sandbox.spy(swineFields, 'getAllFields');

    animalFieldsManager.getFieldsFor(animals.SWINE);

    expect(spy.withArgs().callCount).to.be.equal(1);
  });

  describe('poultry species', () => {
    before(() => {
      spy = sandbox.spy(poultryFields, 'getAllFieldsFor');
    });
    afterEach(() => {
      sandbox.reset();
    });
    it('should get poultry breeder fields', () => {
      animalFieldsManager.getFieldsFor(animals.POULTRY, poultry.BREEDER);

      expect(spy.withArgs(poultry.BREEDER).callCount).to.be.equal(1);
    });

    it('should get poultry hens fields', () => {
      animalFieldsManager.getFieldsFor(animals.POULTRY, poultry.HENS);

      expect(spy.withArgs(poultry.HENS).callCount).to.be.equal(1);
    });

    it('should get poultry broiler fields', () => {
      animalFieldsManager.getFieldsFor(animals.POULTRY, poultry.BROILER);

      expect(spy.withArgs(poultry.BROILER).callCount).to.be.equal(1);
    });
  });
});