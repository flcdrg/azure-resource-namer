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
        formatResourceName(
          resource,
          'workloadthatmakesnametoolong',
          'prod',
          'australiasoutheast',
          1,
          feedback);
    
          expect(feedback.resourceNameValid).toBe(false);
      });
    });

    describe('id', () => {
      const resource = resources.find(f => f.category == 'General').assets.find(a => a.abbrev === 'id');

      it('valid', () => {
        const result = formatResourceName(
          resource,
          'workload_',
          'prod',
          'australiasoutheast',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"id-workload_-prod-australiasoutheast-001"`);
      });

      it('invalid', () => {
        formatResourceName(
          resource,
          'workload!',
          'prod',
          'australiasoutheast',
          1,
          feedback);
    
          expect(feedback.resourceNameValid).toBe(false);
      });
    });

    describe('rg', () => {
      const resource = resources.find(f => f.category == 'General').assets.find(a => a.abbrev === 'rg');

      it('valid', () => {
        const result = formatResourceName(
          resource,
          'workload',
          'prod',
          'australiasoutheast',
          1,
          feedback);
    
          expect(result).toMatchInlineSnapshot(`"rg-workload-prod-australiasoutheast-001"`);
      });

      it('invalid', () => {
        formatResourceName(
          resource,
          'workload!',
          'prod',
          'australiasoutheast',
          1,
          feedback);
    
          expect(feedback.resourceNameValid).toBe(false);
      });
    });
  });
})
