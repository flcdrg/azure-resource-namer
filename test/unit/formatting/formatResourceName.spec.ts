import { resources } from '../../../src/resources';
import { formatResourceName } from "formatting";
import { MockFeedback } from './MockFeedback';

describe('formatting', () => {

  describe('formatResourceName', () => {
    let feedback: MockFeedback;

    beforeEach( () => {
      feedback = new MockFeedback();
    });

    describe('empty fields', () => {
      const resource = resources.find(f => f.category == 'General').assets.find(a => a.abbrev === 'apim');

      it('empty environment', () => {
        const result = formatResourceName(
          resource,
          'workload',
          '',
          'australiasoutheast',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"apim-workload-australiasoutheast-001"`);
      });

      it('empty environment and workload', () => {
        const result = formatResourceName(
          resource,
          '',
          '',
          'australiasoutheast',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"apim-australiasoutheast-001"`);
      });

      it('zero instance', () => {
        const result = formatResourceName(
          resource,
          'workload',
          'prod',
          'australiasoutheast',
          0,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"apim-workload-prod-australiasoutheast"`);
      })

    });
  });
});
