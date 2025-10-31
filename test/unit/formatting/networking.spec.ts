import { resources } from '../../../src/resources';
import { formatResourceName } from "../../../src/formatting";
import { MockFeedback } from './MockFeedback';

describe('formatting', () => {

  describe('networking', () => {
    let feedback: MockFeedback;

    beforeEach( () => {
      feedback = new MockFeedback();
    });

    describe('subnet', () => {
      const resource = resources.find(f => f.category == 'Networking')!.assets.find(a => a.abbrev === 'subnet')!;

      it('valid', () => {
        const result = formatResourceName(
          resource,
          'work._load',
          'prod',
          'eastus',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"subnet-work._load-prod-eastus-001"`);
      });

      it('valid minimal', () => {
        const result = formatResourceName(
          resource,
          '',
          '',
          'eastus',
          0,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"subnet-eastus"`);
      });

      it('invalid', () => {
        formatResourceName(
          resource,
          'name!',
          'prod',
          'eastus',
          1,
          feedback);
    
          expect(feedback.resourceNameValid).toBe(false);
      });
    });

    describe('stc', () => {
      const resource = resources.find(f => f.category == 'Storage')!.assets.find(a => a.abbrev === 'stc')!;

      it('valid', () => {
        const result = formatResourceName(
          resource,
          'workload',
          'prod',
          'eastus',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"workload"`);
      });
    });
  });
})
