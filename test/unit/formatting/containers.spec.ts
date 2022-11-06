import { resources } from '../../../src/resources';
import { formatResourceName } from "formatting";
import { MockFeedback } from './MockFeedback';

describe('formatting', () => {

  describe('containers', () => {
    let feedback: MockFeedback;

    beforeEach( () => {
      feedback = new MockFeedback();
    });

    describe('cr', () => {
      const resource = resources.find(f => f.category == 'Containers').assets.find(a => a.abbrev === 'cr');

      it('valid', () => {
        const result = formatResourceName(
          resource,
          'workload',
          'prod',
          'eastus',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"crworkloadprodeastus001"`);
      });

      it('invalid', () => {
        formatResourceName(
          resource,
          'workloadwithinvalidchars!',
          'prod',
          'eastus',
          1,
          feedback);
    
          expect(feedback.resourceNameValid).toBe(false);
      });
    });

  });
})
