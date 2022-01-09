import { resources } from '../../../src/resources';
import { formatResourceName } from "formatting";
import { MockFeedback } from './MockFeedback';

describe('formatting', () => {

  describe('storage', () => {
    let feedback: MockFeedback;

    beforeEach( () => {
      feedback = new MockFeedback();
    });

    describe('st', () => {
      const resource = resources.find(f => f.category == 'Storage').assets.find(a => a.abbrev === 'st');

      it('valid', () => {
        const result = formatResourceName(
          resource,
          'workload',
          'prod',
          'eastus',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"stworkloadprodeastus001"`);
      });

      it('invalid', () => {
        formatResourceName(
          resource,
          'workloadthatmakesnametoolong',
          'prod',
          'eastus',
          1,
          feedback);
    
          expect(feedback.resourceNameValid).toBe(false);
      });
    });

  });
})
