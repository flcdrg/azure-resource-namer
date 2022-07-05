import { IResource } from "resourcetype-list";
require('format-unicorn');

export interface IFeedback {
  validationFeedback: string;
  resourceNameValid: boolean;
}

export function formatResourceName(selectedResource: IResource, workload: string, environment: string, region: string, instance: number, includeRegion: boolean, feedback: IFeedback): string {

  const pattern = selectedResource.pattern ?? '{resource}-{workload}-{environment}-{region}-{instance}';

  const instanceString = instance > 0 ? String(instance).padStart(3, '0') : '';

  const useRegion = includeRegion ? region : '';

  const name = pattern.formatUnicorn({ resource: selectedResource.abbrev, workload: workload, environment: environment, region: useRegion, instance: instanceString })
    .replace(/\-+/g, '-') // Remove double dashes (from an empty field)
    .replace(/\-+$/, ''); // Remove trailing dash(es)

  if (name.length > selectedResource?.maxLength) {
    feedback.validationFeedback = `Length exceeds maximum ${selectedResource.maxLength} characters`;
    feedback.resourceNameValid = false;

  } else if (selectedResource.regex && !selectedResource.regex?.test(name)) {
    feedback.validationFeedback = 'Name must only contain: ' + selectedResource.description ?? selectedResource.regex.source;
    feedback.resourceNameValid = false;

  } else {
    feedback.resourceNameValid = true;
  }
  return name;
}
