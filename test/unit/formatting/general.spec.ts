import { resources } from '../../../src/resources';
import { formatResourceName } from "formatting";
import { MockFeedback } from './MockFeedback';

describe('formatting', () => {

  describe('general', () => {
    let feedback: MockFeedback;

    beforeEach( () => {
      feedback = new MockFeedback();
    });

    describe('apim', () => {

      const resource = resources.find(f => f.category == 'General').assets.find(a => a.abbrev === 'apim');

      it('valid', () => {
        const result = formatResourceName(
          resource,
          'workload',
          'prod',
          'australiasoutheast',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"apim-workload-prod-australiasoutheast-001"`);
      });

      it('invalid', () => {
        const result = formatResourceName(
          resource,
          'workloadthatmakesnametoolong',
          'prod',
          'australiasoutheast',
          1,
          feedback);
    
          expect(feedback.resourceNameValid).toBe(false);
      });
    })
  });
})
