import { resources } from '../../../src/resources';
import { formatResourceName } from "formatting";
import { MockFeedback } from './MockFeedback';

describe('formatting', () => {

  describe('management and governance', () => {
    let feedback: MockFeedback;

    beforeEach( () => {
      feedback = new MockFeedback();
    });

    describe('kv', () => {
      const resource = resources.find(f => f.category == 'Management and governance').assets.find(a => a.abbrev === 'kv');

      it('valid', () => {
        const result = formatResourceName(
          resource,
          'workload',
          'prod',
          'eastus',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"kv-workload-prod-eastus-001"`);
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
